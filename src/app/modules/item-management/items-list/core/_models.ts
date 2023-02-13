import {ID, Response} from '../../../../../_test/helpers'
export type Item = {
  id?: ID
  name?: string
  description?: string
  price?: number
  status?: string;
  createdOn?: Date;
  updatedOn?: Date;
}

export type ItemsQueryResponse = {
  items: Array<Item>,
  total: number
}

export const initialItem: Item = {
  name: 'test',
  description: 'test',
  status: 'active',
  price: 10
}
