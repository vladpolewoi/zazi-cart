import { mande } from 'mande'
import { API_URL } from './config'

export interface IProduct {
  title: string
  price: number
  image: string
  id: number
  description: string
  category: string
  rating: {
    rate: number
    count: number
  }
}
const products = mande(`${API_URL}/products`)

export async function getProducts() {
  return products.get<IProduct[]>()
}
