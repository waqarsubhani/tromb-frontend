import {FC, useMemo} from 'react'
import {ID} from '../../../../../../_test/helpers'
import {useListView} from '../../core/ListViewProvider'

type Props = {
  id: ID
}

const ItemSelectionCell: FC<Props> = ({id}) => {
  const {selected, onSelect} = useListView()
  const isSelected = useMemo(() => selected.includes(id), [id, selected])
  return (
    <div className='form-check form-check-custom form-check-solid'>
      <input
        className='form-check-input'
        type='checkbox'
        data-kt-check={isSelected}
        data-kt-check-target='#kt_table_items .form-check-input'
        checked={isSelected}
        onChange={() => onSelect(id)}
      />
    </div>
  )
}

export {ItemSelectionCell}
