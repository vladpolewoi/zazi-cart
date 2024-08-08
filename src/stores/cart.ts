import type { IProduct } from '@/api/product'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type Cart = {
  quantity: number
  product: IProduct
}[]

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart>([])
  const totalItems = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0))

  // const total = computed(() => cart.value.reduce((acc, item) => acc + item.product.price, 0))

  const addItem = (item: IProduct, quantity: number) =>
    cart.value.push({
      product: item,
      quantity
    })

  const removeItem = (id: number) => {
    const index = cart.value.findIndex((item) => item.product.id === id)
    cart.value.splice(index, 1)
  }

  return {
    cart,
    totalItems,
    addItem,
    removeItem
  }
})
