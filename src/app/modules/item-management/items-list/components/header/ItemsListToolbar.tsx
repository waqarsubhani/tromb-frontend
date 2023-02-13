import {KTSVG} from '../../../../../../_test/helpers'
import {useListView} from '../../core/ListViewProvider'

const ItemsListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddItemModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <button type='button' className='btn btn-primary' onClick={openAddItemModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Item
      </button>
    </div>
  )
}

export {ItemsListToolbar}
