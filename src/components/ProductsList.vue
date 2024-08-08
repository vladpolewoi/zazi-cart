<template>
  <ul class="grid grid-cols-3 gap-2">
    <li v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { getProducts } from '@/api/product'

const products = await getProducts()
console.log(products)
</script>
