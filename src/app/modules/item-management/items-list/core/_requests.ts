import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../_test/helpers'
import {Item, ItemsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL
const ITEM_URL = `${API_URL}/item`

const getItems = (query: string): Promise<ItemsQueryResponse | Item[]> => {
  return axios
    .get(`${ITEM_URL}?${query}`)
    .then((d: AxiosResponse<ItemsQueryResponse>) => d.data)
}

const getItemById = (id: ID): Promise<Item | undefined> => {
  return axios
    .get(`${ITEM_URL}/${id}`)
    .then((response: any) => response.data)

}

const createItem = (item: Item): Promise<Item | undefined> => {
  return axios
    .post(ITEM_URL, item)
    .then((response: AxiosResponse<Response<Item>>) => response.data)
    .then((response: Response<Item>) => response.data)
}

const updateItem = (item: Item): Promise<Item | undefined> => {
  return axios
    .put(`${ITEM_URL}/${item.id}`, item)
    .then((response: AxiosResponse<Response<Item>>) => response.data)
    .then((response: Response<Item>) => response.data)
}

const deleteItem = (itemId: ID): Promise<void> => {
  return axios.delete(`${ITEM_URL}/${itemId}`).then(() => {})
}

const deleteSelectedItems = (itemsIds: Array<ID>): Promise<void> => {
  const requests = itemsIds.map((id) => axios.delete(`${ITEM_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getItems, deleteItem, deleteSelectedItems, getItemById, createItem, updateItem}
