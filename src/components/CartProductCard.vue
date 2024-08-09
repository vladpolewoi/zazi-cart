<template>
  <section>
    <Card class="h-full flex justify-between flex-col">
      <CardHeader>
        <CardTitle class="text-xl">{{ product.title }}</CardTitle>
      </CardHeader>

      <CardContent>
        <div class="flex items-center justify-between">
          <div class="overflow-hidden rounded-lg h-24 w-24">
            <img :src="product.image" alt="image" />
          </div>
          <div>
            <span class="text-xl font-bold">${{ product.price }}</span>
            <div class="text-sm">Stock: 12</div>
            <div class="flex items-center gap-1">
              <StarIcon class="fill-yellow-400" />{{ product.rating.rate }}
            </div>
            <span class="inline-block mb-2 text-sm text-slate-400">Produced By: ShopName </span>
          </div>
          <div class="flex items-center gap-1">
            <Button @click="onItemRemove" variant="outline" size="icon" class="group">
              <TrashIcon class="fill-primary group-hover:fill-red-500 group w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>

      <CardFooter class="gap-2 justify-between">
        <Input
          type="number"
          class="max-w-20"
          :modelValue="toValue(quantity)"
          @input="onQuantityChange"
        />
        <div class="flex flex-col">
          <span class="text-secondary-foreground">Total price:</span>
          <span class="text-2xl font-semibold">{{ totalPrice }}</span>
        </div>
      </CardFooter>
    </Card>
  </section>
</template>

<script setup lang="ts">
import type { IProduct } from '@/api/product'
import { StarIcon, TrashIcon } from '@/assets/icons'
import Button from '@/components/ui/button/Button.vue'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Input from '@/components/ui/input/Input.vue'
import { formatCurrency } from '@/lib/utils'
import { useCartStore } from '@/stores/cart'
import { computed, toValue } from 'vue'

interface Props {
  product: IProduct
}

const { product } = defineProps<Props>()
const { removeItem, getQuantityById, updateQuantity } = useCartStore()
const quantity = computed(() => getQuantityById(product.id))

const totalPrice = computed(() => formatCurrency(product.price * quantity.value.value))

function onQuantityChange(event: Event) {
  const value = (event.target as HTMLInputElement).value
  updateQuantity(product.id, Number(value))
}

function onItemRemove() {
  removeItem(product.id)
}
</script>
