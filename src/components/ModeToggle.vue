<template>
  <Button variant="outline" size="icon" @click="onToggle">
    <NightIcon v-if="mode === 'light'" class="h-[1.2rem] w-[1.2rem] transition-all" />
    <DayIcon v-else class="h-[1.7rem] w-[1.7rem] transition-all fill-primary" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

import { DayIcon, NightIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'

const mode = useColorMode({ disableTransition: false })

function onToggle() {
  mode.value = mode.value === 'light' ? 'dark' : 'light'
}
</script>
