<script setup lang="ts">
import type { FaqItem } from './types'

defineProps<{
  faqItems: FaqItem[]
}>()
</script>

<template>
  <section class="mt-8 grid gap-5 lg:grid-cols-2">
    <article
      v-for="faq in faqItems"
      :key="faq.question"
      class="glass-panel relative min-h-full overflow-hidden rounded-panel border border-white/10 p-5 shadow-glow lg:p-6"
    >
      <h3 class="text-2xl font-semibold text-brand-ink">{{ faq.question }}</h3>
      <p class="mt-3 text-base leading-7 text-brand-ink/66">{{ faq.answer }}</p>
    </article>
  </section>
</template>
