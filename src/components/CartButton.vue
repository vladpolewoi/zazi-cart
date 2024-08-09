<template>
  <Drawer direction="right">
    <DrawerTrigger>
      <div class="relative">
        <Button variant="outline" size="icon">
          <CartIcon class="fill-primary h-6 w-6" />
        </Button>
        <span
          v-if="totalItems"
          class="bg-yellow-500 text-zinc-900 font-bold rounded-full text-xs h-5 w-5 -top-2 -right-2 absolute flex items-center justify-center"
          >{{ totalItems }}</span
        >
      </div>
    </DrawerTrigger>
    <DrawerContent side="right">
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
  </Drawer>
</template>

<script setup lang="ts">
import CartProductCard from '@/components/CartProductCard.vue'
import { CartIcon } from '@/components/icons'
import Button from '@/components/ui/button/Button.vue'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { usePersistCart } from '@/composables/usePersistCart'
import { formatCurrency } from '@/lib/utils'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { totalItems, totalPrice, cart } = storeToRefs(useCartStore())
usePersistCart()

const totalPriceFormatted = computed(() => formatCurrency(totalPrice.value))

function onCheckout() {
  console.log('Checkout')
}
</script>
