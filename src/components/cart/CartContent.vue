<template>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Your Cart</DrawerTitle>
    </DrawerHeader>

    <div v-if="!totalItems" class="flex items-center justify-center h-full">
      <h2 class="font-bold text-3xl text-primary">Your Cart is Empty</h2>
    </div>

    <ul class="flex flex-col p-2 gap-2 overflow-y-auto h-full">
      <li v-for="item in cart" :key="item.product.id">
        <CartProductCard :product="item.product" />
      </li>
    </ul>

    <div class="px-6 mt-2 flex flex-col">
      <span>Total:</span>
      <span class="text-3xl font-bold text-red-600">{{ totalPriceFormatted }}</span>
    </div>

    <DrawerFooter>
      <Button class="w-full text-xl font-semibold" size="lg" @click="onCheckout">Checkout</Button>
    </DrawerFooter>
  </DrawerContent>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import CartProductCard from '@/components/cart/CartProductCard.vue'
import Button from '@/components/ui/button/Button.vue'
import { DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { formatCurrency } from '@/lib/utils'
import { useCartStore } from '@/stores/cart'
import { toast } from 'vue-sonner'

const { totalItems, totalPrice, cart } = storeToRefs(useCartStore())
const { clearCart } = useCartStore()

const totalPriceFormatted = computed(() => formatCurrency(totalPrice.value))

function onCheckout() {
  clearCart()
  toast.success('Checkout successful!')
}
</script>
