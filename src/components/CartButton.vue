<template>
  <Drawer direction="right">
    <DrawerTrigger>
      <div class="relative">
        <Button variant="outline" size="icon">
          <CartIcon class="fill-slate-800 h-6 w-6" />
        </Button>
        <span
          v-if="totalItems"
          class="bg-yellow-500 text-white font-bold rounded-full text-xs h-5 w-5 -top-2 -right-2 absolute flex items-center justify-center"
          >{{ totalItems }}</span
        >
      </div>
    </DrawerTrigger>
    <DrawerContent side="right">
      <DrawerHeader>
        <DrawerTitle>Your Cart</DrawerTitle>
      </DrawerHeader>

      <ul class="flex flex-col p-2 gap-2">
        <li v-for="item in cart" :key="item.product.id">
          <CartProductCard :product="item.product" />
        </li>
      </ul>

      <DrawerFooter>
        <Button class="w-full">Checkout</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Button from '@/components/ui/button/Button.vue'
import { CartIcon } from '@/assets/icons'
import { useCartStore } from '@/stores/cart'
import CartProductCard from '@/components/CartProductCard.vue'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerHeader,
  DrawerFooter
} from '@/components/ui/drawer'

const { totalItems, cart } = storeToRefs(useCartStore())
</script>
