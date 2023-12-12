<script setup>
import { ref, onMounted } from 'vue'

// eslint-disable-next-line no-unused-vars
const name = 'CounterCompositionApi';

var count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
