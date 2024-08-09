import type { IProduct } from '@/api/product'
import { CART_STORAGE } from '@/composables/usePersistCart'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type Cart = {
  [key: string]: {
    quantity: number
    product: IProduct
  }
}

export const useCartStore = defineStore('cart', () => {
  console.log('GOT', JSON.parse(localStorage.getItem(CART_STORAGE) as string))
  const cart = ref<Cart>(JSON.parse(localStorage.getItem(CART_STORAGE) as string) ?? {})

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

  return {
    cart,
    totalItems,
    totalPrice,
    getQuantityById,
    addItem,
    removeItem,
    updateQuantity
  }
})
