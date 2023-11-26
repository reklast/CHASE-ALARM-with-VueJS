import { reactive } from 'vue';

export const store = reactive({
    realTime: new Date(),
    alarmTime: "",
})
