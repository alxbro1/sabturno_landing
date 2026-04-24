<script setup lang="ts">
import type { Testimonial } from './types'

defineProps<{
  testimonials: Testimonial[]
}>()
</script>

<template>
  <section class="relative mt-8 overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,22,22,0.94)_0%,rgba(10,10,10,0.88)_100%),radial-gradient(circle_at_top_left,rgba(0,240,104,0.12)_0%,rgba(0,240,104,0)_45%)] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] lg:p-6">
    <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-2xl">
        <p class="inline-flex items-center gap-2 rounded-full border border-brand-neon/20 bg-brand-neon/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-neon">
          Sensacion de producto
        </p>
        <h2 class="mt-5 text-4xl font-semibold text-brand-ink sm:text-5xl">Una landing con mas ritmo, mas contraste y mas intencion comercial.</h2>
      </div>
      <p class="max-w-xl text-base leading-7 text-brand-ink/68">
        La nueva estructura pone foco en el problema real, la solucion nueva y el valor para ambos publicos. El resultado se siente mas premium y mas persuasivo.
      </p>
    </div>
    <div class="mt-8 grid gap-4 lg:grid-cols-3">
      <article v-for="testimonial in testimonials" :key="testimonial.author" class="rounded-[30px] border border-white/10 bg-white/5 p-5 transition duration-200 hover:-translate-y-1.5 hover:border-brand-neon/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
        <p class="text-base leading-8 text-brand-ink/74">"{{ testimonial.quote }}"</p>
        <div class="mt-6 border-t border-white/8 pt-4">
          <p class="text-sm font-semibold text-brand-ink">{{ testimonial.author }}</p>
          <p class="text-sm text-brand-ink/55">{{ testimonial.role }}</p>
        </div>
      </article>
    </div>
  </section>
</template>