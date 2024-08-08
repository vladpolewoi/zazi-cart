<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import Button from '@/components/ui/button/Button.vue'
import ModeToggle from '@/components/ModeToggle.vue'
import CartButton from '@/components/CartButton.vue'
</script>

<template>
  <header class="bg-slate-800 w-full sticky p-4 flex items-center justify-between top-0">
    <div class="flex items-center gap-2">
      <div class="bg-yellow-400 rounded-md p-1 w-10 h-10">
        <img alt="Logo" src="./assets/logo.png" width="48" height="32" />
      </div>
      <span class="text-white font-bold text-xl">Zazi-Cart </span>
    </div>

    <div class="flex items-center justify-between gap-2">
      <ModeToggle />
      <CartButton :quantity="4" />
    </div>
  </header>

  <main>
    <div class="w-full bg-yellow-200 h-dvh"></div>
    <div class="w-full bg-yellow-200 h-dvh"></div>
    <div class="w-full bg-yellow-200 h-dvh"></div>
    <p class="text-red-500">HELLO</p>
    <!-- <TheWelcome /> -->
    <Button>ShadCN</Button>
  </main>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
