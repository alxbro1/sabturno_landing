<script setup lang="ts">
import { Cog8ToothIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/vue/24/outline'
import type { FlowStep } from './types'

defineProps<{
  launchSteps: FlowStep[]
}>()

const launchIcons = [Cog8ToothIcon, RocketLaunchIcon, SparklesIcon]
</script>

<template>
  <section
    id="launch"
    class="glass-panel relative mt-8 overflow-hidden rounded-panel border border-white/10 p-5 shadow-glow lg:p-6"
  >
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p class="badge">Implementacion rapida</p>
        <h2 class="mt-5 text-4xl font-semibold text-brand-ink sm:text-5xl">
          Como se activa Sabturno en tu local
        </h2>
      </div>
      <p class="max-w-xl text-base leading-7 text-brand-ink/68">
        No hace falta complicar la puesta en marcha: el objetivo es pasar de idea a reservas reales
        en pocos pasos.
      </p>
    </div>
    <ol class="mt-8 grid gap-4 lg:grid-cols-3">
      <li
        v-for="(step, index) in launchSteps"
        :key="step.step"
        class="card-hover rounded-card border border-white/10 bg-white/5 p-5 hover:border-brand-neon/35"
      >
        <component
          :is="launchIcons[index % launchIcons.length]"
          class="h-5 w-5 text-brand-neon/85"
          aria-hidden="true"
        />
        <span class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-neon">{{
          step.step
        }}</span>
        <h3 class="mt-5 text-2xl font-semibold text-brand-ink">{{ step.title }}</h3>
        <p class="mt-3 text-sm leading-7 text-brand-ink/65">{{ step.description }}</p>
      </li>
    </ol>
  </section>
</template>
