/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import clsx from 'clsx'
import {useQueryResponseLoading, useQueryResponsePagination} from '../../core/QueryResponseProvider'
import {useQueryRequest} from '../../core/QueryRequestProvider'

type Props = {
  pagination: any
}

const mappedLabel = (label: string): string => {
  if (label === '&laquo; Previous') {
    return 'Previous'
  }

  if (label === 'Next &raquo;') {
    return 'Next'
  }

  return label
}

const ItemsListPagination: FC<Props> = ({pagination}) => {
  const currentPageNumber = pagination.page || 1
  const isLoading = useQueryResponseLoading()
  const {updateState} = useQueryRequest()
  const updatePage = (page: number | null) => {
    if (!page || isLoading || pagination.page === page) {
      return
    }

    updateState({page, limit: pagination.limit || 10})
  }

  const totalPages = Math.ceil(pagination.total / pagination.limit)
  const links = []
  for (let i = 1; i <= totalPages; i++) {
    links.push({ label: i.toString(), page: i })
  }

  if (totalPages === 1) {
    return null
  }


  return (
    <div className='row'>
      <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'></div>
      <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
        <div id='kt_table_items_paginate'>
          <ul className='pagination'>
            {currentPageNumber !== 1 && (
              <li className={clsx('page-item', {disabled: isLoading})}>
                <a
                  className={clsx('page-link', {
                    'page-text': true,
                    'me-5': true,
                  })}
                  onClick={() => updatePage(currentPageNumber - 1)}
                  style={{cursor: 'pointer'}}
                >
                  Previous
                </a>
              </li>
            )}
            {links
              ?.map((link: { label: string, page: number }) => {
                return {...link, label: mappedLabel(link.label)}
              })
              .map((link: { label: string, page: any }) => (
                <li
                  key={link.label}
                  className={clsx('page-item', {
                    active: pagination.page === link.page,
                    disabled: isLoading,
                    previous: link.label === 'Previous',
                    next: link.label === 'Next',
                  })}
                >
                  <a
                    className={clsx('page-link', {
                      'page-text': link.label === 'Previous' || link.label === 'Next',
                      'me-5': link.label === 'Previous',
                    })}
                    onClick={() => updatePage(link.page)}
                    style={{cursor: 'pointer'}}
                  >
                    {mappedLabel(link.label)}
                  </a>
                </li>
              ))}
              {currentPageNumber !== totalPages && (
                <li className={clsx('page-item', {disabled: isLoading})}>
                  <a
                    className={clsx('page-link', {
                      'page-text': true,
                    })}
                    onClick={() => updatePage(currentPageNumber + 1)}
                    style={{cursor: 'pointer'}}
                  >
                    Next
                  </a>
                </li>
              )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export {ItemsListPagination}
