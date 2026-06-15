<script setup lang="ts">
import type { AudienceCard } from './types'

defineProps<{
  audiences: AudienceCard[]
}>()
</script>

<template>
  <section id="experience" class="mt-8 grid gap-5 lg:grid-cols-2">
    <article
      v-for="audience in audiences"
      :key="audience.title"
      class="glass-panel relative min-h-full overflow-hidden rounded-panel border border-white/10 p-5 shadow-glow lg:p-6"
    >
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-neon">
        {{ audience.eyebrow }}
      </p>
      <h2 class="mt-4 max-w-xl text-3xl font-semibold text-brand-ink">{{ audience.title }}</h2>
      <p class="mt-3 max-w-xl text-base leading-7 text-brand-ink/70">{{ audience.summary }}</p>
      <ul class="mt-6 space-y-3">
        <li
          v-for="bullet in audience.bullets"
          :key="bullet"
          class="flex items-start gap-3 rounded-[20px] bg-white/5 px-4 py-4 text-white/80"
        >
          <span
            class="mt-1.5 h-[0.7rem] w-[0.7rem] shrink-0 rounded-full bg-brand-neon shadow-[0_0_18px_rgba(0,240,104,0.6)]"
          ></span>
          <span>{{ bullet }}</span>
        </li>
      </ul>
    </article>
  </section>
</template>
