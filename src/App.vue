<template>
  <Header />
  <main class="flex justify-center">
    <div class="max-w-[1024px]">
      <suspense>
        <template #fallback>
          <div class="flex items-center justify-center h-screen">Loading...</div>
        </template>
        <template #default>
          <ProductsList class="p-6" />
        </template>
      </suspense>
    </div>
  </main>
  <Footer />
  <Toaster />
</template>

<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'

import Footer from '@/components/PageFooter.vue'
import Header from '@/components/PageHeader.vue'
import ProductsList from '@/components/ProductsList.vue'
</script>
