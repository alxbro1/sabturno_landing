<script setup lang="ts">
import { CursorArrowRaysIcon, DevicePhoneMobileIcon, WalletIcon } from '@heroicons/vue/24/outline'
import type { WebMoment } from './types'

defineProps<{
  webMoments: WebMoment[]
}>()

const webMomentIcons = [CursorArrowRaysIcon, DevicePhoneMobileIcon, WalletIcon]
</script>

<template>
  <section id="app-web" class="relative mt-8 overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,22,22,0.94)_0%,rgba(10,10,10,0.88)_100%),radial-gradient(circle_at_top_left,rgba(0,240,104,0.12)_0%,rgba(0,240,104,0)_45%)] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] lg:p-6">
    <div class="grid gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
      <div class="space-y-6">
        <p class="inline-flex items-center gap-2 rounded-full border border-brand-neon/20 bg-brand-neon/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-neon">
          La novedad que cambia la conversion
        </p>
        <h2 class="max-w-xl text-4xl font-semibold text-brand-ink sm:text-5xl">
          Deja de depender de que el cliente descargue algo para reservar.
        </h2>
        <p class="max-w-xl text-lg leading-8 text-brand-ink/68">
          La app web reduce la friccion justo donde mas duele: ese momento en el que el cliente esta listo para sacar turno, pero no quiere instalar una app.
          Ahora puede entrar directo, ver disponibilidad y avanzar sin romper el impulso.
        </p>
        <div class="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black/30 px-3 py-2">
          <img
            src="/brands/google-play.svg"
            alt="Google Play"
            class="h-8 w-auto p-1"
            loading="lazy"
          >
          <p class="text-xs font-semibold uppercase tracking-[0.16em] text-white">
            App movil disponible en Google Play
          </p>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
        <article v-for="(moment, index) in webMoments" :key="moment.title" class="rounded-[30px] border border-white/10 bg-white/5 p-5 transition duration-200 hover:-translate-y-1.5 hover:border-brand-neon/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
          <component
            :is="webMomentIcons[index % webMomentIcons.length]"
            class="h-5 w-5 text-brand-neon/85"
            aria-hidden="true"
          />
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-neon">{{ moment.label }}</p>
          <h3 class="mt-4 text-2xl font-semibold text-brand-ink">{{ moment.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-brand-ink/65">{{ moment.description }}</p>
          <p class="mt-5 text-sm font-semibold text-brand-neon">{{ moment.result }}</p>
        </article>
      </div>
    </div>
  </section>
</template>