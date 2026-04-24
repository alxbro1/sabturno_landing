<script setup lang="ts">
import { Cog8ToothIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/vue/24/outline'
import type { FlowStep } from './types'

defineProps<{
  launchSteps: FlowStep[]
}>()

const launchIcons = [Cog8ToothIcon, RocketLaunchIcon, SparklesIcon]
</script>

<template>
  <section id="launch" class="relative mt-8 overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,22,22,0.94)_0%,rgba(10,10,10,0.88)_100%),radial-gradient(circle_at_top_left,rgba(0,240,104,0.12)_0%,rgba(0,240,104,0)_45%)] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] lg:p-6">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p class="inline-flex items-center gap-2 rounded-full border border-brand-neon/20 bg-brand-neon/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-neon">
          Implementacion rapida
        </p>
        <h2 class="mt-5 text-4xl font-semibold text-brand-ink sm:text-5xl">Como se activa Sabturno en tu local</h2>
      </div>
      <p class="max-w-xl text-base leading-7 text-brand-ink/68">
        No hace falta complicar la puesta en marcha: el objetivo es pasar de idea a reservas reales en pocos pasos.
      </p>
    </div>
    <ol class="mt-8 grid gap-4 lg:grid-cols-3">
      <li v-for="(step, index) in launchSteps" :key="step.step" class="rounded-[30px] border border-white/10 bg-white/5 p-5 transition duration-200 hover:-translate-y-1.5 hover:border-brand-neon/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
        <component
          :is="launchIcons[index % launchIcons.length]"
          class="h-5 w-5 text-brand-neon/85"
          aria-hidden="true"
        />
        <span class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-neon">{{ step.step }}</span>
        <h3 class="mt-5 text-2xl font-semibold text-brand-ink">{{ step.title }}</h3>
        <p class="mt-3 text-sm leading-7 text-brand-ink/65">{{ step.description }}</p>
      </li>
    </ol>
  </section>
</template>