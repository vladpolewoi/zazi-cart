<template>
  <header class="bg-foreground w-full sticky p-4 flex items-center justify-between top-0">
    <div class="flex items-center gap-2">
      <div class="bg-yellow-400 rounded-md p-1 w-10 h-10">
        <img alt="Logo" src="../assets/logo.png" width="48" height="32" />
      </div>
      <span class="text-primary-foreground font-bold text-xl">Zazi-Cart </span>
    </div>

    <div class="flex items-center justify-between gap-2">
      <ModeToggle />
      <CartButton />
    </div>
  </header>
</template>

<script setup lang="ts">
import CartButton from '@/components/CartButton.vue'
import ModeToggle from '@/components/ModeToggle.vue'
</script>
