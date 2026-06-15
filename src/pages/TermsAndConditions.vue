<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LegalPageLayout from '../components/LegalPageLayout.vue'

const html = ref<string>('')

onMounted(async () => {
  const response = await fetch('/terminos-y-condiciones.html')
  html.value = await response.text()
})
</script>

<template>
  <LegalPageLayout>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="legal-content" v-html="html" />
  </LegalPageLayout>
</template>
