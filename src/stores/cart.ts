import type { IProduct } from '@/api/product'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type Cart = {
  [key: string]: {
    quantity: number
    product: IProduct
  }
}

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart>({})
  const totalItems = computed(() =>
    Object.values(cart.value).reduce((acc, item) => acc + item.quantity, 0)
  )

  const getQuantityById = (id: number) => computed(() => cart.value[id]?.quantity || 0)

  // const total = computed(() => cart.value.reduce((acc, item) => acc + item.product.price, 0))

  const addItem = (item: IProduct, quantity: number) => {
    cart.value[item.id] = {
      product: item,
      quantity: (cart.value[item.id]?.quantity || 0) + quantity
    }
  }

  const removeItem = (id: number) => {
    const { [id]: _, ...rest } = cart.value

    cart.value = rest
  }

  const updateQuantity = (id: number, quantity: number) => {
    cart.value[id].quantity = quantity
  }

  return {
    cart,
    totalItems,
    getQuantityById,
    addItem,
    removeItem,
    updateQuantity
  }
})
