<template>
  <div class="relative">
    <Button variant="outline" size="icon">
      <CartIcon class="fill-slate-800 h-6 w-6" />
    </Button>
    <span
      v-if="quantity"
      class="bg-yellow-500 text-white font-bold rounded-full text-xs h-5 w-5 -top-2 -right-2 absolute flex items-center justify-center"
      >{{ quantity }}</span
    >
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { CartIcon } from '@/assets/icons'

interface Props {
  quantity: number
}

defineProps<Props>()
</script>
