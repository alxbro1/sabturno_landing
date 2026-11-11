<script setup lang="ts">
import {
  CheckBadgeIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline'
import { trackEvent } from '../../lib/analytics'
import type { CtaHighlight } from './types'

defineProps<{
  ctaHighlights?: CtaHighlight[]
}>()

const emit = defineEmits<{
  (e: 'open-pre-register', location: string): void
}>()

function handleOpenAppClick(): void {
  trackEvent('open_app_click', { location: 'cta', transport_type: 'beacon' })
}
</script>

<template>
  <section id="contact" class="relative w-full py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Cinematic Banner Wrapper -->
      <div
        class="relative overflow-hidden rounded-[40px] border border-brand-neon/40 bg-gradient-to-b from-[#141b16] via-[#0c120e] to-[#080808] p-8 shadow-[0_25px_90px_rgba(0,240,104,0.18)] sm:p-12 lg:p-16"
      >
        <!-- Background Neon Glows and Grid -->
        <div
          class="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-neon/20 blur-[120px]"
        ></div>
        <div
          class="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-neon/15 blur-[120px]"
        ></div>
        <div
          class="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]"
        ></div>

        <!-- Banner Content -->
        <div class="relative z-10 mx-auto max-w-3xl text-center">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-brand-neon/40 bg-brand-neon/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-neon"
          >
            <SparklesIcon class="h-4 w-4" />
            <span>Reservas Online Sin Fricción</span>
          </span>

          <h2 class="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Llevá tu negocio al próximo nivel.
          </h2>

          <p class="mt-4 text-base leading-relaxed text-white/80 sm:text-xl">
            Agenda llena, cero mensajes manuales y cobro de señas automático desde hoy mismo.
          </p>

          <!-- Trust Badges Row -->
          <div class="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/80">
            <div class="flex items-center gap-1.5">
              <CheckBadgeIcon class="h-4 w-4 text-brand-neon" />
              <span>100% Gratis sin costos ocultos</span>
            </div>
            <div class="flex items-center gap-1.5">
              <ShieldCheckIcon class="h-4 w-4 text-brand-neon" />
              <span>Sin tarjeta de crédito requerida</span>
            </div>
            <div class="flex items-center gap-1.5">
              <SparklesIcon class="h-4 w-4 text-brand-neon" />
              <span>Listo en 3 minutos</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              class="w-full rounded-full bg-brand-neon px-9 py-4 text-center text-base font-bold text-brand-night shadow-neon transition duration-200 hover:-translate-y-0.5 hover:bg-brand-neon-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon sm:w-auto"
              @click="emit('open-pre-register', 'cta')"
            >
              Quiero Empezar a Usarlo
            </button>

            <a
              href="https://sabturno.com/app/"
              class="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center text-base font-semibold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-auto"
              @click="handleOpenAppClick"
            >
              <DevicePhoneMobileIcon class="h-5 w-5 text-brand-neon" />
              <span>Ver App Web en Vivo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
