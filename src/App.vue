<script setup>
import { ref, computed } from 'vue'

// use default imports like this, would not work with named import
import CounterCompositionApi from './components/CounterCompositionApi.vue'
import CounterOptionsApi from './components/CounterOptionsApi.vue'

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
    <p></p>
    x = <input v-model.number="x" />
    Square of {{ x }} is {{ computed_example }}.
    <p></p>
    <button @click="toggleAwesome">Toggle</button>
    <p></p>
    <div v-if="awesome">Vue is awesome!</div>
    <div v-else>Oh no 😢</div>
    <br>
    <CounterCompositionApi testid="C1"></CounterCompositionApi>
    <CounterCompositionApi testid="C2"></CounterCompositionApi>
    <CounterOptionsApi testid="O1"></CounterOptionsApi>
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
