<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  BanknotesIcon,
  BoltIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  CreditCardIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline'
import { mountHeroScrollWorld } from '../../lib/heroScrubEngine'
import type { HeroMetric, ServiceSnapshot } from './types'

defineProps<{
  heroHighlights: string[]
  heroMetrics: HeroMetric[]
  serviceSnapshots: ServiceSnapshot[]
}>()

defineEmits<{
  (e: 'open-pre-register'): void
}>()

const metricIcons = [CalendarDaysIcon, CreditCardIcon, BoltIcon]

const trackRef = ref<HTMLElement | null>(null)
const stageRef = ref<HTMLElement | null>(null)
const flightProgress = ref(0)
const activeSceneIndex = ref(0)
const isStaticFallback = ref(false)

let engineInstance: { destroy: () => void } | null = null

const sceneLabels = ['01 · Fachada exterior', '02 · Mostrador y agenda']

// Computed animated styles for Scene 1 (Exterior pitch)
const scene1Style = computed(() => {
  if (isStaticFallback.value) return {}
  const p = flightProgress.value
  // Fully visible from 0 to 0.32, fades out and moves up until 0.48
  const opacity = p <= 0.32 ? 1 : p >= 0.48 ? 0 : 1 - (p - 0.32) / (0.48 - 0.32)
  const translateY = p <= 0.32 ? 0 : -((p - 0.32) / (0.48 - 0.32)) * 36
  const scale = p <= 0.32 ? 1 : 1 - ((p - 0.32) / (0.48 - 0.32)) * 0.04
  return {
    opacity: opacity.toFixed(3),
    transform: `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`,
    pointerEvents: (opacity > 0.08 ? 'auto' : 'none') as 'auto' | 'none',
  }
})

// Computed animated styles for Scene 2 (Interior live calendar & tablet)
const scene2Style = computed(() => {
  if (isStaticFallback.value) return {}
  const p = flightProgress.value
  // Hidden until 0.44, fades in and rises until 0.62
  const opacity = p <= 0.44 ? 0 : p >= 0.62 ? 1 : (p - 0.44) / (0.62 - 0.44)
  const translateY = p <= 0.44 ? 36 : p >= 0.62 ? 0 : (1 - (p - 0.44) / (0.62 - 0.44)) * 36
  return {
    opacity: opacity.toFixed(3),
    transform: `translate3d(0, ${translateY.toFixed(1)}px, 0)`,
    pointerEvents: (opacity > 0.08 ? 'auto' : 'none') as 'auto' | 'none',
  }
})

// Subtle opacity calculation for bottom metrics bar
const metricsOpacityStyle = computed(() => {
  if (isStaticFallback.value) return {}
  const p = flightProgress.value
  // Starts appearing as user enters scene 2
  const opacity = p <= 0.55 ? 0 : p >= 0.75 ? 1 : (p - 0.55) / (0.75 - 0.55)
  return {
    opacity: opacity.toFixed(3),
    pointerEvents: (opacity > 0.1 ? 'auto' : 'none') as 'auto' | 'none',
  }
})

onMounted(() => {
  if (!trackRef.value || !stageRef.value) return

  engineInstance = mountHeroScrollWorld(stageRef.value, {
    trackEl: trackRef.value,
    diveScroll: 1.15,
    crossfade: 0.14,
    finalePoster: '/hero-world/finale.webp',
    finalePosterMobile: '/hero-world/finale-m.webp',
    sections: [
      {
        id: 'exterior',
        label: 'Exterior nocturno',
        still: '/hero-world/exterior.webp',
        stillMobile: '/hero-world/exterior-m.webp',
        clip: '/hero-world/vid/exterior.mp4',
        clipMobile: '/hero-world/vid/exterior-m.mp4',
        accent: '#00f068',
        scroll: 1.15,
      },
      {
        id: 'interior',
        label: 'Agenda confirmándose sola',
        still: '/hero-world/interior.webp',
        stillMobile: '/hero-world/interior-m.webp',
        clip: '/hero-world/vid/interior.mp4',
        clipMobile: '/hero-world/vid/interior-m.mp4',
        accent: '#00f068',
        scroll: 1.15,
        linger: 0.35,
      },
    ],
    connectors: [],
    connectorsMobile: [],
    onProgress: (progress, sceneIdx, fallbackStatic) => {
      flightProgress.value = progress
      activeSceneIndex.value = sceneIdx
      isStaticFallback.value = fallbackStatic
    },
  })
})

onBeforeUnmount(() => {
  engineInstance?.destroy()
  engineInstance = null
})
</script>

<template>
  <section
    id="hero"
    ref="trackRef"
    class="relative w-full"
    :class="isStaticFallback ? 'min-h-0' : 'min-h-[250vh]'"
  >
    <!-- Viewport Container (Sticky when interactive scroll-world is active) -->
    <div
      class="w-full"
      :class="isStaticFallback ? 'relative py-12' : 'sticky top-0 h-screen overflow-hidden'"
    >
      <!-- FULL-BLEED Scroll-world cinematic stage (100% viewport width) -->
      <div
        ref="stageRef"
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden"
      ></div>

      <!-- Cinematic Vignettes & Readability Scrims -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(5,8,6,0.45)_0%,rgba(5,8,6,0.78)_75%,rgba(5,8,6,0.92)_100%)]"
      ></div>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"
      ></div>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/85 to-transparent"
      ></div>

      <!-- Centralized Content Frame -->
      <div
        class="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-4 pb-4 pt-24 sm:px-6 sm:pb-6 sm:pt-24 lg:px-8"
      >
        <!-- Top Status Bar: Badge & Scene indicator -->
        <div class="flex items-center justify-between gap-2 pb-2 sm:pb-0">
          <div class="badge hidden border-brand-neon/30 bg-black/65 backdrop-blur-md sm:inline-flex">
            App móvil + App web en un solo sistema
          </div>

          <div
            v-if="!isStaticFallback"
            class="ml-auto inline-flex items-center gap-2.5 rounded-full border border-brand-neon/25 bg-black/75 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-ink/90 shadow-lg backdrop-blur-md sm:gap-3 sm:px-4 sm:py-1.5 sm:text-[0.7rem] sm:tracking-[0.16em]"
          >
            <span class="h-2 w-2 rounded-full bg-brand-neon shadow-neon animate-pulse"></span>
            <span>{{ sceneLabels[activeSceneIndex] || sceneLabels[0] }}</span>
            <span class="h-1 w-12 overflow-hidden rounded-full bg-white/20 sm:w-16">
              <span
                class="block h-full bg-brand-neon transition-[width] duration-150"
                :style="{ width: `${Math.round(flightProgress * 100)}%` }"
              ></span>
            </span>
          </div>
        </div>

        <!-- Central Stage: Choreographed Text Transitions for PC & Mobile -->
        <div class="relative my-auto flex flex-1 items-center justify-center py-2 sm:py-4">
          <!-- ================= SCENE 1 LAYER: Exterior Pitch ================= -->
          <div
            class="w-full transition-all duration-150 will-change-transform"
            :class="isStaticFallback ? 'relative' : 'absolute inset-x-0'"
            :style="scene1Style"
          >
            <div class="mx-auto max-w-3xl space-y-4 text-center sm:space-y-6 lg:max-w-4xl">
              <h1
                class="text-3xl font-semibold leading-[1.05] tracking-tight text-brand-ink drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] sm:text-5xl lg:text-7xl"
              >
                Tu negocio siempre reservado.
                <br />
                <span
                  class="bg-gradient-to-r from-white via-white to-brand-neon bg-clip-text text-transparent"
                >
                  Sin llamadas, sin fricción.
                </span>
              </h1>

              <p
                class="mx-auto max-w-2xl text-sm leading-6 text-brand-ink/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:text-lg sm:leading-7"
              >
                Tus clientes reservan desde el navegador en segundos. Tu agenda se actualiza sola.
              </p>

              <!-- Payment Trust Badges -->
              <div class="flex flex-wrap items-center justify-center gap-2 pt-1 sm:gap-3 sm:pt-2">
                <div
                  class="inline-flex items-center gap-2 rounded-xl border border-[#009EE3]/40 bg-[#050806]/85 px-3 py-1.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:px-3.5 sm:py-2"
                >
                  <img
                    src="/brands/mercado-pago.svg"
                    alt="Mercado Pago"
                    class="h-6 w-auto sm:h-7"
                    loading="lazy"
                  />
                  <p class="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#7BCFFF] sm:text-xs sm:tracking-[0.16em]">
                    Pagos online con Mercado Pago
                  </p>
                </div>

                <div
                  class="inline-flex items-center gap-2 rounded-xl border border-brand-neon/30 bg-[#050806]/85 px-3 py-1.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:px-3.5 sm:py-2"
                >
                  <BanknotesIcon class="h-5 w-5 text-brand-neon sm:h-6 sm:w-6" aria-hidden="true" />
                  <p class="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-neon sm:text-xs sm:tracking-[0.16em]">
                    Transferencia bancaria directa
                  </p>
                </div>
              </div>

              <!-- Action Buttons & Scroll Hint -->
              <div class="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4 sm:pt-4">
                <button
                  type="button"
                  class="w-full rounded-full bg-brand-neon px-7 py-3 text-sm font-semibold text-brand-night shadow-neon transition hover:-translate-y-0.5 hover:bg-[#2bff82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon/60 sm:w-auto sm:px-8 sm:py-4"
                  @click="$emit('open-pre-register')"
                >
                  Empezar gratis
                </button>
                <a
                  href="https://sabturno.com/app/"
                  class="w-full rounded-full border border-white/20 bg-black/60 px-7 py-3 text-center text-sm font-semibold text-brand-ink backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon/60 sm:w-auto sm:px-8 sm:py-4"
                >
                  Ver demo online
                </a>
              </div>

              <!-- Animated Scroll Hint for PC -->
              <div
                v-if="!isStaticFallback && flightProgress < 0.2"
                class="pt-3 text-[0.65rem] uppercase tracking-[0.2em] text-brand-neon/75 animate-bounce inline-flex items-center gap-1.5 sm:pt-6 sm:text-xs"
              >
                <span>Deslizá hacia abajo para entrar al local</span>
                <ChevronDownIcon class="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
            </div>
          </div>

          <!-- ================= SCENE 2 LAYER: Interior Live Agenda & Tablet Mockup ================= -->
          <div
            class="w-full transition-all duration-150 will-change-transform"
            :class="isStaticFallback ? 'relative mt-8 sm:mt-12' : 'absolute inset-x-0'"
            :style="scene2Style"
          >
            <div class="grid grid-cols-1 items-center gap-5 lg:grid-cols-12 lg:gap-12">
              <!-- Left Column: Live Automation Message -->
              <div class="space-y-3.5 text-left sm:space-y-6 lg:col-span-7">
                <div
                  class="inline-flex items-center gap-2 rounded-full border border-brand-neon/40 bg-brand-neon/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand-neon backdrop-blur-md sm:px-3.5 sm:text-xs sm:tracking-[0.2em]"
                >
                  <SparklesIcon class="h-3.5 w-3.5" />
                  <span>Agenda en tiempo real</span>
                </div>

                <h2
                  class="text-2xl font-semibold leading-tight text-brand-ink drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] sm:text-4xl lg:text-5xl"
                >
                  Turnos confirmándose solos mientras vos atendés
                </h2>

                <p class="max-w-xl text-xs leading-5 text-brand-ink/80 sm:text-base sm:leading-7">
                  El cliente elige servicio, horario y profesional desde el navegador. La reserva
                  impacta al instante en la pantalla de tu mostrador sin que tengas que responder
                  mensajes manuales.
                </p>

                <!-- Advantage Points -->
                <ul class="space-y-1.5 pt-0.5 text-xs text-brand-ink/90 sm:space-y-2.5 sm:pt-1 sm:text-sm">
                  <li class="flex items-center gap-2 sm:gap-2.5">
                    <CheckCircleIcon class="h-4 w-4 text-brand-neon shrink-0 sm:h-5 sm:w-5" />
                    <span>Disponibilidad 100% sincronizada entre tu app y la web</span>
                  </li>
                  <li class="flex items-center gap-2 sm:gap-2.5">
                    <CheckCircleIcon class="h-4 w-4 text-brand-neon shrink-0 sm:h-5 sm:w-5" />
                    <span>Sin descargas ni registros pesados para tus clientes</span>
                  </li>
                  <li class="flex items-center gap-2 sm:gap-2.5">
                    <CheckCircleIcon class="h-4 w-4 text-brand-neon shrink-0 sm:h-5 sm:w-5" />
                    <span>100% gratis para siempre, sin comisiones por turno</span>
                  </li>
                </ul>

                <div class="pt-1 sm:pt-2">
                  <button
                    type="button"
                    class="w-full rounded-full bg-brand-neon px-6 py-2.5 text-xs font-semibold text-brand-night shadow-neon transition hover:-translate-y-0.5 hover:bg-[#2bff82] sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm"
                    @click="$emit('open-pre-register')"
                  >
                    Sumar mi negocio gratis
                  </button>
                </div>
              </div>

              <!-- Right Column: Glowing Live Booking Mockup Card -->
              <div class="lg:col-span-5">
                <div
                  class="rounded-card border border-brand-neon/45 bg-[linear-gradient(180deg,rgba(7,14,10,0.94),rgba(12,24,16,0.9))] p-3.5 shadow-[0_0_50px_rgba(0,240,104,0.22)] backdrop-blur-xl transition-all duration-300 hover:border-brand-neon/60 sm:p-5"
                >
                  <div class="flex items-center justify-between text-xs text-brand-ink/70">
                    <span class="inline-flex items-center gap-1.5 font-semibold text-brand-neon">
                      <span class="h-1.5 w-1.5 rounded-full bg-brand-neon animate-pulse"></span>
                      Reserva en 2 minutos
                    </span>
                    <span class="rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-brand-ink/80">100% web</span>
                  </div>

                  <div
                    class="mt-2.5 rounded-pill bg-[linear-gradient(180deg,#6bffb0_0%,#00f068_100%)] p-3 text-brand-night shadow-lg sm:mt-4 sm:p-5"
                  >
                    <p class="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-brand-night/80 sm:text-[0.65rem]">
                      Mostrador digital
                    </p>
                    <p class="mt-1 text-base font-bold sm:mt-2 sm:text-2xl">La Barbería</p>
                    <p class="mt-0.5 text-[0.7rem] leading-4 text-brand-night/80 sm:mt-1 sm:text-xs sm:leading-5">
                      Turnos sincronizados en tiempo real directamente en tu pantalla.
                    </p>
                  </div>

                  <div class="mt-2.5 space-y-2 sm:mt-4 sm:space-y-2.5">
                    <div
                      v-for="(snapshot, sIdx) in serviceSnapshots"
                      :key="snapshot.service"
                      class="rounded-xl border border-white/10 bg-black/55 px-3 py-2 backdrop-blur-md transition hover:border-brand-neon/30 sm:rounded-2xl sm:px-4 sm:py-3"
                      :class="sIdx === 2 ? 'hidden sm:block' : 'block'"
                    >
                      <div class="flex items-center justify-between text-xs sm:text-sm">
                        <p class="font-semibold text-brand-ink">{{ snapshot.service }}</p>
                        <span class="font-mono font-semibold text-brand-neon">{{ snapshot.time }}</span>
                      </div>
                      <p class="mt-0.5 text-[0.65rem] text-brand-ink/65 sm:mt-1 sm:text-xs">{{ snapshot.client }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar: Metric Highlights (Visible in Scene 2 or static) -->
        <div
          class="transition-opacity duration-300"
          :class="isStaticFallback ? 'relative mt-8' : 'w-full'"
          :style="metricsOpacityStyle"
        >
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <article
              v-for="(metric, index) in heroMetrics"
              :key="metric.label"
              class="rounded-2xl border border-white/15 bg-black/65 px-4 py-3.5 backdrop-blur-md transition hover:border-brand-neon/40 shadow-lg"
            >
              <div class="flex items-center gap-2.5">
                <component
                  :is="metricIcons[index % metricIcons.length]"
                  class="h-5 w-5 text-brand-neon"
                  aria-hidden="true"
                />
                <p class="text-xl font-bold text-brand-neon sm:text-2xl">{{ metric.value }}</p>
              </div>
              <p class="mt-1 text-xs font-semibold text-brand-ink">{{ metric.label }}</p>
              <p class="mt-0.5 line-clamp-1 text-xs text-brand-ink/70">{{ metric.detail }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
