// @ts-nocheck
import {Column} from 'react-table'
import {ItemInfoCell} from './ItemInfoCell'
import {ItemActionsCell} from './ItemActionsCell'
import {ItemSelectionCell} from './ItemSelectionCell'
import {ItemCustomHeader} from './ItemCustomHeader'
import {ItemSelectionHeader} from './ItemSelectionHeader'
import {Item} from '../../core/_models'
import { ItemDateCell } from './ItemDateCell'

const itemsColumns: ReadonlyArray<Column<Item>> = [
  {
    Header: (props) => <ItemSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <ItemSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <ItemCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <ItemInfoCell item={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <ItemCustomHeader tableProps={props} title='Description' className='min-w-125px' />,
    accessor: 'description',
  },
  {
    Header: (props) => (
      <ItemCustomHeader tableProps={props} title='Price' className='min-w-125px' />
    ),
    id: 'price',
    accessor: 'price'
  },
  {
    Header: (props) => (
      <ItemCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    accessor: 'status',
  },
  {
    Header: (props) => (
      <ItemCustomHeader tableProps={props} title='Created On' className='min-w-125px' />
    ),
    accessor: 'createdOn',
    Cell: ({...props}) => <ItemDateCell dateStr={props.data[props.row.index].createdOn} />,
  },
  {
    Header: (props) => (
      <ItemCustomHeader tableProps={props} title='Updated On' className='min-w-125px' />
    ),
    accessor: 'updatedOn',
    Cell: ({...props}) => <ItemDateCell dateStr={props.data[props.row.index].updatedOn} />,
  },
  {
    Header: (props) => (
      <ItemCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ItemActionsCell id={props.data[props.row.index].id} />,
  },
]

export {itemsColumns}
