<script setup lang="ts">
import { store } from '@/store/store'

import chase from '@/media/chase.mp4'

import styles from './ChasePlayer.module.scss'

const convertOpts: object = {
  hour: '2-digit',
  hour12: false,
  minute: '2-digit'
}
</script>

<template>
  <div :className="styles.playerContainer">
    <video
      v-if="
        store.alarmTime && store.realTime.toLocaleTimeString('en', convertOpts) >= store.alarmTime
      "
      :className="styles.player"
      loop
      :src="chase"
      autoplay
    />
  </div>
</template>
