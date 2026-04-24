<script setup lang="ts">
import type { StoryCard } from './types'

defineProps<{
  storyCards: StoryCard[]
}>()
</script>

<template>
  <section id="proposal" class="mt-8 grid gap-5 lg:grid-cols-3">
    <article v-for="card in storyCards" :key="card.title" class="relative min-h-full overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,22,22,0.94)_0%,rgba(10,10,10,0.88)_100%),radial-gradient(circle_at_top_left,rgba(0,240,104,0.12)_0%,rgba(0,240,104,0)_45%)] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] lg:p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-neon">{{ card.eyebrow }}</p>
      <h2 class="mt-4 text-2xl font-semibold text-brand-ink">{{ card.title }}</h2>
      <p class="mt-3 text-base leading-7 text-brand-ink/68">{{ card.description }}</p>
    </article>
  </section>
</template>