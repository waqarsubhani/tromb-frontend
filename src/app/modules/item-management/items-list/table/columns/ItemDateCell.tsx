import {FC} from 'react'
import moment from 'moment'

type Props = {
  dateStr: Date
}

const ItemDateCell: FC<Props> = ({dateStr}) => (
  <div className='d-flex align-items-center'>
    <div className='d-flex flex-column'>
      <div className='mb-1'>
        {moment(dateStr).format('MMMM-DD-YYYY')}
      </div>
    </div>
  </div>
)

export {ItemDateCell}
