<script setup lang="ts">
import type { CtaHighlight } from './types'

defineProps<{
  ctaHighlights: CtaHighlight[]
}>()

defineEmits<{
  (e: 'open-pre-register'): void
}>()
</script>

<template>
  <section
    id="contact"
    class="mt-8 rounded-panel bg-[linear-gradient(135deg,rgba(0,240,104,1)_0%,rgba(122,255,185,0.92)_52%,rgba(240,255,245,0.84)_100%)] p-6 shadow-[0_28px_90px_rgba(0,240,104,0.22)] lg:p-8"
  >
    <div class="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
      <div>
        <p
          class="inline-flex items-center gap-2 rounded-full border border-brand-night/20 bg-brand-night/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-night"
        >
          Reservá sin fricción desde el primer día
        </p>
        <h2
          class="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-brand-night sm:text-5xl"
        >
          Si tu negocio ya necesita vender mejor desde el primer click, esta version de Sabturno va
          en la direccion correcta.
        </h2>
        <p class="mt-4 max-w-2xl text-lg leading-8 text-brand-night">
          Sumate a la prueba cerrada y mostra una forma mas moderna de reservar. Menos friccion para
          el cliente. Mas claridad para tu equipo.
        </p>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            class="rounded-full bg-brand-night px-7 py-4 text-sm font-semibold text-brand-ink transition hover:-translate-y-0.5 hover:bg-black focus-visible:ring-2 focus-visible:ring-brand-neon/50 focus-visible:outline-none"
            @click="$emit('open-pre-register')"
          >
            Quiero empezar a usarlo
          </button>
          <a
            href="https://sabturno.com/app/"
            class="rounded-full border border-brand-night/15 bg-white/30 px-7 py-4 text-center text-sm font-semibold text-brand-night transition hover:-translate-y-0.5 hover:bg-white/45 focus-visible:ring-2 focus-visible:ring-brand-neon/50 focus-visible:outline-none"
          >
            Ver la App Web
          </a>
        </div>
      </div>

      <div class="rounded-card border border-brand-night/15 bg-white/30 p-6 backdrop-blur-sm">
        <div class="space-y-4">
          <div
            v-for="highlight in ctaHighlights"
            :key="highlight.title"
            class="rounded-pill border border-brand-night/15 bg-white/55 px-5 py-4"
          >
            <p class="text-sm font-semibold text-brand-night">{{ highlight.title }}</p>
            <p class="mt-1 text-sm leading-6 text-brand-night">{{ highlight.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
