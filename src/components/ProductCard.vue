<template>
  <section>
    <Card>
      <CardHeader>
        <div class="overflow-hidden rounded-lg h-40">
          <img :src="product.image" alt="image" />
        </div>
        <CardTitle class="text-xl">{{ product.title }}</CardTitle>
      </CardHeader>

      <CardContent>
        <div class="flex items-center justify-between">
          <div>
            <span class="text-2xl font-bold">${{ product.price }}</span>
            <div class="text-sm">Stock: 12</div>
          </div>
          <div class="flex items-center gap-1">
            <StarIcon class="fill-yellow-400" />{{ product.rating.rate }}
          </div>
        </div>
        <span class="inline-block mb-2 text-sm text-slate-400">Produced By: ShopName </span>
      </CardContent>

      <CardFooter>
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  </section>
</template>

<script setup lang="ts">
import { IProduct } from '@/api/product.ts'
import { Card, CardTitle, CardHeader, CardFooter, CardContent } from '@/components/ui/card'
import Button from '@/components/ui/button/Button.vue'
import { StarIcon } from '@/assets/icons'

interface Props {
  product: IProduct
}

defineProps<Props>()
</script>
