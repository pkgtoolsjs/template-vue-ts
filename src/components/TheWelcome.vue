<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <button :title="`Count: ${counterStore.count}`" @click="counterStore.increment()">
    Count: {{ counterStore.count }}
  </button>
</template>
