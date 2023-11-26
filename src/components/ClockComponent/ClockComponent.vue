<script setup lang="ts">
import { store } from '@/store/store'
import { watchEffect } from 'vue'

watchEffect(() => {
  const timer = setInterval(() => {
    store.realTime = new Date()
  }, 1000)

  return () => {
    clearInterval(timer)
  }
})
</script>

<template>
  <div>
    <h1>
      {{
        store.realTime.toLocaleTimeString('en', {
          hour: '2-digit',
          hour12: false,
          minute: '2-digit',
          second: '2-digit'
        })
      }}
    </h1>
  </div>
</template>
