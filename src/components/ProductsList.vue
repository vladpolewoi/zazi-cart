<template>
  <ul class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
    <li v-for="product in products" :key="product.id">
      <ProductCard class="h-full" :product="product" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { getProducts } from '@/api/product'
import ProductCard from '@/components/ProductCard.vue'

const products = await getProducts()
</script>
