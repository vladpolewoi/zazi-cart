<template>
  <section>
    <Card class="h-full flex justify-between flex-col">
      <CardHeader>
        <div class="overflow-hidden rounded-lg h-48">
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

      <CardFooter class="gap-2 justify-end">
        <Input type="number" class="max-w-20" v-model="quantity" />
        <Button @click="onCartAdd" variant="primary" class="bg-yellow-300 text-primary"
          >Add to cart</Button
        >
      </CardFooter>
    </Card>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { IProduct } from '@/api/product.ts'
import { Card, CardTitle, CardHeader, CardFooter, CardContent } from '@/components/ui/card'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import { StarIcon } from '@/assets/icons'
import { useCartStore } from '@/stores/cart'

interface Props {
  product: IProduct
}

const { product } = defineProps<Props>()

const quantity = ref(1)
const { addItem } = useCartStore()

function onCartAdd() {
  addItem(product, Number(quantity.value))
}
</script>
