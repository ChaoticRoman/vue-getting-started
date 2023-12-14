import { ref } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  // 1s delayed
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setTimeout(() => {
        data.value = json
      }, 1000)
    })
    .catch((err) => (error.value = err))

// No delay:
//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => (data.value = json))
//     .catch((err) => (error.value = err))

  return { data, error }
}