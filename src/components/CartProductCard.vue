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
            <AlertDialog :open="isAlertOpen">
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="icon" class="group" @click="isAlertOpen = true">
                  <TrashIcon class="fill-primary group-hover:fill-red-500 group w-4 h-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will remove product form your cart.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel @click="isAlertOpen = false">Cancel</AlertDialogCancel>
                  <AlertDialogAction class="bg-red-500 hover:bg-red-600" @click="onItemRemove"
                    >Remove</AlertDialogAction
                  >
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardContent>

      <CardFooter class="gap-2 justify-between">
        <!-- <Input
          type="number"
          class="max-w-20"
          min="1"
          :modelValue="quantity.value"
          @change="onQuantityChange"
        /> -->
        <div class="flex gap-4 items-center">
          <Button size="icon" @click="onQuantityChange(-1)">
            <MinusIcon class="fill-secondary h-5 w-5" />
          </Button>
          <span class="text-xl font-bold">{{ quantity }}</span>
          <Button size="icon" @click="onQuantityChange(1)">
            <PlusIcon class="fill-secondary h-5 w-5" />
          </Button>
        </div>
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
import { MinusIcon, PlusIcon, StarIcon, TrashIcon } from '@/assets/icons'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import Button from '@/components/ui/button/Button.vue'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { useCartStore } from '@/stores/cart'
import { computed, ref } from 'vue'

interface Props {
  product: IProduct
}

const { product } = defineProps<Props>()

const isAlertOpen = ref(false)

const { removeItem, getQuantityById, updateQuantity } = useCartStore()
const quantity = computed(() => getQuantityById(product.id))

const totalPrice = computed(() => formatCurrency(product.price * quantity.value.value))

function onQuantityChange(value: number) {
  const newQuantity = quantity.value.value + value

  if (newQuantity < 1) {
    isAlertOpen.value = true
  } else {
    updateQuantity(product.id, newQuantity)
  }
}

function onItemRemove() {
  removeItem(product.id)
}
</script>
