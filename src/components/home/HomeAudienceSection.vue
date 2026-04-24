<script setup lang="ts">
import type { AudienceCard } from './types'

defineProps<{
  audiences: AudienceCard[]
}>()
</script>

<template>
  <section id="experience" class="mt-8 grid gap-5 lg:grid-cols-2">
    <article v-for="audience in audiences" :key="audience.title" class="relative min-h-full overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,22,22,0.94)_0%,rgba(10,10,10,0.88)_100%),radial-gradient(circle_at_top_left,rgba(0,240,104,0.12)_0%,rgba(0,240,104,0)_45%)] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] lg:p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-neon">{{ audience.eyebrow }}</p>
      <h2 class="mt-4 max-w-xl text-3xl font-semibold text-brand-ink">{{ audience.title }}</h2>
      <p class="mt-3 max-w-xl text-base leading-7 text-brand-ink/68">{{ audience.summary }}</p>
      <ul class="mt-6 space-y-3">
        <li v-for="bullet in audience.bullets" :key="bullet" class="flex items-start gap-3 rounded-[20px] bg-white/5 px-4 py-4 text-white/80">
          <span class="mt-1.5 h-[0.7rem] w-[0.7rem] shrink-0 rounded-full bg-brand-neon shadow-[0_0_18px_rgba(0,240,104,0.6)]"></span>
          <span>{{ bullet }}</span>
        </li>
      </ul>
    </article>
  </section>
</template>