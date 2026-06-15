<script setup lang="ts">
import type { StoryCard } from './types'

defineProps<{
  storyCards: StoryCard[]
}>()
</script>

<template>
  <section id="proposal" class="mt-8 grid gap-5 lg:grid-cols-3">
    <article
      v-for="card in storyCards"
      :key="card.title"
      class="glass-panel relative min-h-full overflow-hidden rounded-panel border border-white/10 p-5 shadow-glow lg:p-6"
    >
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-neon">
        {{ card.eyebrow }}
      </p>
      <h2 class="mt-4 text-2xl font-semibold text-brand-ink">{{ card.title }}</h2>
      <p class="mt-3 text-base leading-7 text-brand-ink/68">{{ card.description }}</p>
    </article>
  </section>
</template>
