<script setup>
  const showTip = ref(true)
  const toggleTip = () => {
    showTip.value = false
  }
  onMounted(() => {
    setTimeout(() => {
      toggleTip()
    }, 8000)
  })
</script>
<template>
  <aside class="fixed top-15 right-4 z-50 flex items-center justify-center rounded-lg bg-black px-5 py-3 text-white"
        v-if="showTip">
    <a target="_blank"
      rel="noreferrer"
      class="text-sm font-medium hover:opacity-75">
      Hey! Welcome to my home 👋
    </a>

    <button class="ml-3 rounded  p-1 hover:bg-white/20" @click="toggleTip">
      <span class="sr-only">Close</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </aside>
</template>

<style scoped>
</style>
