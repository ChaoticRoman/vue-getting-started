<script setup>
import { ref, computed } from 'vue'

const greeting = ref("How are you going, my friend?");

const x = ref(5);

const computed_example = computed(() => {
  return x.value * x.value;
});
</script>

<template>
  <div id="app">
    <h1>Hello, World!</h1>
    {{ greeting }}
    <p />
    Square of {{ x }} is {{ computed_example }}.
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
