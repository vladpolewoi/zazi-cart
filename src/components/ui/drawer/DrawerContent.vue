<script lang="ts" setup>
import { cn } from '@/lib/utils'
import type { DialogContentEmits, DialogContentProps } from 'radix-vue'
import { useForwardPropsEmits } from 'radix-vue'
import { DrawerContent, DrawerPortal } from 'vaul-vue'
import type { HtmlHTMLAttributes } from 'vue'
import DrawerOverlay from './DrawerOverlay.vue'

const props = defineProps<DialogContentProps & { class?: HtmlHTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent
      v-bind="forwarded"
      :class="
        cn(
          'sm:w-[500px] fixed right-0 bottom-0 z-50 mt-24 flex h-full flex-col rounded-t-[10px] border bg-background',
          props.class
        )
      "
    >
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>
