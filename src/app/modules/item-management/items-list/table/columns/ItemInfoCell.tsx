/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Item} from '../../core/_models'

type Props = {
  item: Item
}

const ItemInfoCell: FC<Props> = ({item}) => (
  <div className='d-flex align-items-center'>
    <div className='d-flex flex-column'>
      <div className='text-gray-800 mb-1'>
        {item.name}
      </div>
    </div>
  </div>
)

export {ItemInfoCell}
