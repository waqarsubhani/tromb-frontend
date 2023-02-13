import {useListView} from '../../core/ListViewProvider'
import {ItemsListToolbar} from './ItemsListToolbar'
import {ItemsListGrouping} from './ItemsListGrouping'
import {ItemsListSearchComponent} from './ItemsListSearchComponent'

const ItemsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <ItemsListSearchComponent />
      <div className='card-toolbar'>
        {selected.length > 0 ? <ItemsListGrouping /> : <ItemsListToolbar />}
      </div>
    </div>
  )
}

export {ItemsListHeader}
