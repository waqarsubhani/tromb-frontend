import {useQueryClient, useMutation} from 'react-query'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteSelectedItems} from '../../core/_requests'

const ItemsListGrouping = () => {
  const {selected, clearSelected} = useListView()
  const queryClient = useQueryClient()
  const {query} = useQueryResponse()

  const deleteAllSelectedItems = useMutation(() => deleteSelectedItems(selected), {
    onSuccess: () => {
      queryClient.invalidateQueries([`${query}`])
      clearSelected()
    },
  })

  return (
    <div className='d-flex justify-content-end align-items-center'>
      <div className='fw-bolder me-5'>
        <span className='me-2'>{selected.length}</span> Selected
      </div>

      <button
        type='button'
        className='btn btn-danger'
        onClick={async () => await deleteAllSelectedItems.mutateAsync()}
      >
        Delete Selected
      </button>
    </div>
  )
}

export {ItemsListGrouping}
