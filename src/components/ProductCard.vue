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
        <Input
          @change="onQuantityChange"
          type="number"
          min="1"
          class="max-w-20"
          v-model="quantity"
        />
        <Button
          @click="onCartAdd"
          variant="secondary"
          class="bg-yellow-300 text-slate-900 font-semibold"
          >Add to cart</Button
        >
      </CardFooter>
    </Card>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { IProduct } from '@/api/product'
import { StarIcon } from '@/components/icons'
import Button from '@/components/ui/button/Button.vue'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Input from '@/components/ui/input/Input.vue'
import { useCartStore } from '@/stores/cart'
import { toast } from 'vue-sonner'

interface Props {
  product: IProduct
}

const { product } = defineProps<Props>()

const quantity = ref(1)
const { addItem } = useCartStore()

function onCartAdd() {
  const count = Number(quantity.value)

  if (count > 0) {
    addItem(product, Number(quantity.value))
    toast.success(`Added to cart`)
  }
}

function onQuantityChange(event: Event) {
  const target = event.target as HTMLInputElement

  if (Number(target.value) < 1) {
    quantity.value = 1
  }
}
</script>
