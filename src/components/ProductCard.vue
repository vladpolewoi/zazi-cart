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
            <span class="text-2xl font-bold">{{ formattedPrice }}</span>
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
          v-model="quantity"
          class="max-w-20"
          type="number"
          min="1"
          @change="onQuantityChange"
        />
        <Button
          class="bg-yellow-300 text-slate-900 font-semibold"
          variant="secondary"
          @click="onCartAdd"
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'

import type { IProduct } from '@/api/product'
import { StarIcon } from '@/components/icons'
import Button from '@/components/ui/button/Button.vue'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Input from '@/components/ui/input/Input.vue'
import { formatCurrency } from '@/lib/utils'
import { useCartStore } from '@/stores/cart'

interface Props {
  product: IProduct
}

const { product } = defineProps<Props>()
const formattedPrice = computed(() => formatCurrency(product.price))

// Quantity
const quantity = ref(1)

function onQuantityChange(event: Event) {
  const target = event.target as HTMLInputElement

  if (Number(target.value) < 1) {
    quantity.value = 1
  }
}

// Cart
const { addItem } = useCartStore()

function onCartAdd() {
  const count = Number(quantity.value)

  if (count > 0) {
    addItem(product, Number(quantity.value))
    toast.success(`Added to cart`)
  }
}
</script>
