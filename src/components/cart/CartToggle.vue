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

    <CartContent />
  </Drawer>
</template>

<script setup lang="ts">
import CartContent from '@/components/cart/CartContent.vue'
import { CartIcon } from '@/components/icons'
import Button from '@/components/ui/button/Button.vue'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const { totalItems } = storeToRefs(useCartStore())
// usePersistCart()
</script>
