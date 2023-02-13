/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {ID} from '../../../../../../_test/helpers'
import {useListView} from '../../core/ListViewProvider'

type Props = {
  id: ID
}

const ItemActionsCell: FC<Props> = ({id}) => {
  const {setItemIdForUpdate} = useListView()

  const openEditModal = () => {
    setItemIdForUpdate(id)
  }

  return (
    <>
      <a
        href='#'
        onClick={openEditModal}
        className='btn btn-light btn-active-light-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Edit
      </a>
    </>
  )
}

export {ItemActionsCell}
