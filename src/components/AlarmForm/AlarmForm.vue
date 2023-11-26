<script setup lang="ts">
import { store } from '@/store/store'

import styles from './AlarmForm.module.scss'

let formInput: string

const handleSubmit = (e: Event) => {
  e.preventDefault()
  store.alarmTime = formInput
  alert(`Time set to: ${store.alarmTime}`)
}
</script>

<template>
  <div>
    <form @submit="handleSubmit" :className="styles.form">
      <input type="time" :id="styles.setTime" v-model="formInput" />

      <input :id="styles.button" type="submit" value="SET" />
    </form>
  </div>
</template>
