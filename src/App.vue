<script setup lang="ts">
import AlarmForm from './components/AlarmForm/AlarmForm.vue'
import ChasePlayer from './components/ChasePlayer/ChasePlayer.vue'
import ClockComponent from './components/ClockComponent/ClockComponent.vue'
import FooterComponent from './components/FooterComponent/FooterComponent.vue'

import styles from '@/App.module.scss'
import '@/styles/styles.scss'
</script>

<template>
  <div :className="styles.App">
    <div :className="styles.upperSection">
      <h1 :className="styles.header">CHASE ALARM</h1>
      <ClockComponent />
      <AlarmForm />
    </div>
    <div :className="styles.bottomSection">
      <ChasePlayer />
      <FooterComponent />
    </div>
  </div>
</template>
