<script setup lang="ts">
import type { Testimonial } from './types'

defineProps<{
  testimonials: Testimonial[]
}>()
</script>

<template>
  <section
    class="glass-panel relative mt-8 overflow-hidden rounded-panel border border-white/10 p-5 shadow-glow lg:p-6"
  >
    <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-2xl">
        <p class="badge">Voces de quienes ya reservan</p>
        <h2 class="mt-5 text-4xl font-semibold text-brand-ink sm:text-5xl">
          Lo que cambia cuando los turnos salen solos.
        </h2>
      </div>
      <p class="max-w-xl text-base leading-7 text-brand-ink/68">
        Locales que dejaron atrás los mensajes sueltos y hoy confirman reservas desde la app web
        comparten qué se nota en su día a día.
      </p>
    </div>
    <div class="mt-8 grid gap-4 lg:grid-cols-3">
      <article
        v-for="testimonial in testimonials"
        :key="testimonial.author"
        class="card-hover rounded-card border border-white/10 bg-white/5 p-5 hover:border-brand-neon/35"
      >
        <p class="text-base leading-8 text-brand-ink/75">"{{ testimonial.quote }}"</p>
          <div class="mt-6 border-t border-white/10 pt-4">
          <p class="text-sm font-semibold text-brand-ink">{{ testimonial.author }}</p>
          <p class="text-sm text-brand-ink/55">{{ testimonial.role }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
