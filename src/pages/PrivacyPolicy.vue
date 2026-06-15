<script setup lang="ts">
import { onMounted, ref } from 'vue'

const html = ref<string>('')

onMounted(async () => {
  const response = await fetch('/politica-de-privacidad.html')
  html.value = await response.text()
})
</script>

<template>
  <div class="prose prose-invert max-w-none" v-html="html" />
</template>
