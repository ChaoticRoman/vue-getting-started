<script setup>
import { ref, onMounted, defineProps } from 'vue'

const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})

const props = defineProps(['testid']);
</script>

<template>
  <button @click="increment" :data-testid="props.testid">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
