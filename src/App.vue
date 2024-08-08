<template>
  <Header />
  <main>
    <suspense>
      <template #fallback>
        <div class="flex items-center justify-center h-screen">Loading...</div>
      </template>
      <template #default>
        <ProductsList class="p-6" />
      </template>
    </suspense>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/PageHeader.vue'
import Footer from '@/components/PageFooter.vue'
import ProductsList from '@/components/ProductsList.vue'
</script>
