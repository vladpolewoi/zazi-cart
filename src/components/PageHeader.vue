<template>
  <header
    class="bg-foreground dark:bg-zinc-900 border-b border-zinc-800 w-full sticky p-4 flex items-center justify-center top-0"
  >
    <div class="w-[1024px] flex items-center justify-between px-6">
      <div class="flex items-center gap-2">
        <div class="bg-yellow-400 rounded-md p-1 w-10 h-10">
          <img alt="Logo" src="../assets/logo.png" width="48" height="32" />
        </div>
        <span class="text-zinc-100 font-bold text-3xl">Zazi-Cart </span>
      </div>

      <div class="flex items-center justify-between gap-2">
        <ModeToggle />
        <CartToggle />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import CartToggle from '@/components/cart/CartToggle.vue'
import ModeToggle from '@/components/ModeToggle.vue'
</script>
