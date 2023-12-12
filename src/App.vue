<script setup>
import { ref, computed } from 'vue'

const greeting = ref("How are you going, my friend?");
const x = ref(5);
let awesome = ref(true);

const computed_example = computed(() => {
  return x.value * x.value;
});

function toggleAwesome() {
  awesome.value = !awesome.value;
}
</script>

<template>
  <div id="app">
    <h1>Hello, World!</h1>
    {{ greeting }}
    <p />
    x = <input v-model="x" />
    Square of {{ x }} is {{ computed_example }}.
    <p />
    <button @click="toggleAwesome">Toggle</button>
    <p />
    <div v-if="awesome">Vue is awesome!</div>
    <div v-else>Oh no 😢</div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
