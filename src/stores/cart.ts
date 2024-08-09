import type { IProduct } from '@/api/product'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed } from 'vue'

type Cart = {
  [key: string]: {
    quantity: number
    product: IProduct
  }
}

const CART_STORAGE = 'CART_STORAGE'

export const useCartStore = defineStore('cart', () => {
  // useStorage will make data persistent
  const cart = useStorage<Cart>(CART_STORAGE, {})

  const totalItems = computed(() =>
    Object.values(cart.value).reduce((acc, item) => acc + item.quantity, 0)
  )
  const totalPrice = computed(() =>
    Object.values(cart.value).reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  )
  const getQuantityById = (id: number) => computed(() => cart.value[id]?.quantity || 0)

  function addItem(item: IProduct, quantity: number) {
    cart.value[item.id] = {
      product: item,
      quantity: (cart.value[item.id]?.quantity || 0) + quantity
    }
  }

  function removeItem(id: number) {
    const { [id]: _, ...rest } = cart.value

    cart.value = rest
  }

  function updateQuantity(id: number, quantity: number) {
    cart.value[id].quantity = quantity
  }

  function clearCart() {
    cart.value = {}
  }

  return {
    cart,
    totalItems,
    totalPrice,
    getQuantityById,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  }
})
