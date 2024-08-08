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
export async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data: IProduct[] = await res.json()

  return data
}
