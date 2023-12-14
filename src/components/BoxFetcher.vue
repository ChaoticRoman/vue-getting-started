<script setup>
import { useFetch } from './fetch.js'

const { data, error } = useFetch("https://httpbin.org/get")
</script>

<template>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
      Data loaded:
      <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading...</div>
  </template>


<style scoped>
div {
    margin: 10px;
    padding: 10px;
}
pre {
    text-align: left;
    margin: 10px;
    padding: 10px;
    border: 3px solid;
}
</style>
