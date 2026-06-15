<script setup lang="ts">
import { BanknotesIcon, BoltIcon, CalendarDaysIcon, CreditCardIcon } from '@heroicons/vue/24/outline'
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
</script>

<template>
  <section
    id="hero"
    class="glass-panel relative overflow-hidden rounded-panel border border-white/10 p-5 shadow-glow md:p-6 xl:p-8"
  >
    <div class="space-y-8">
      <div class="badge">App movil + App web en un solo sistema</div>
      <div class="grid gap-8 lg:grid-cols-2 grid-cols-1">
        <div class="space-y-5 flex flex-col justify-between">
          <div class="space-y-5">
            <h1
              class="max-w-3xl text-4xl font-semibold leading-[0.95] text-brand-ink sm:text-5xl 2xl:max-w-4xl 2xl:text-7xl"
            >
              Tu negocio siempre reservado.
              <br />
              Sin llamadas, sin fricción.
            </h1>
            <p class="max-w-xl text-base leading-7 text-brand-ink/70 sm:text-lg">
              Tus clientes reservan desde el navegador en segundos. Tu agenda se actualiza sola.
            </p>
            <div class="flex flex-wrap gap-3">
              <div
                class="inline-flex items-center gap-3 rounded-2xl border border-[#009EE3]/40 bg-[#009EE3]/12 px-3 py-2"
              >
                <img
                  src="/brands/mercado-pago.svg"
                  alt="Mercado Pago"
                  class="h-8 w-auto"
                  loading="lazy"
                />
                <p class="text-xs font-semibold uppercase tracking-[0.16em] text-[#7BCFFF]">
                  Pagos online con Mercado Pago
                </p>
              </div>
              <div
                class="inline-flex items-center gap-3 rounded-2xl border border-brand-neon/30 bg-brand-neon/10 px-3 py-2"
              >
                <BanknotesIcon class="h-7 w-7 text-brand-neon" aria-hidden="true" />
                <p class="text-xs font-semibold uppercase tracking-[0.16em] text-brand-neon">
                  Transferencia bancaria directa
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="rounded-card border border-white/10 bg-[linear-gradient(180deg,rgba(7,7,7,0.98),rgba(18,18,18,0.92))] p-4"
          >
            <div class="flex items-center justify-between text-xs text-brand-ink/50">
              <span>Reserva en 2 minutos</span>
              <span>100% web</span>
            </div>
            <div
              class="mt-4 rounded-pill bg-[linear-gradient(180deg,#6bffb0_0%,#00f068_100%)] p-5 text-brand-night"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.18em]">Tu proximo turno</p>
              <p class="mt-3 text-xl font-semibold sm:text-2xl">La Barbería</p>
              <p class="mt-1 text-sm leading-6 text-brand-night/70">
                Elegi servicio, horario y profesional sin salir del navegador.
              </p>
            </div>
            <div class="mt-4 space-y-3">
              <div
                v-for="snapshot in serviceSnapshots"
                :key="snapshot.service"
                class="rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
              >
                <div class="flex items-center justify-between text-sm">
                  <p class="font-semibold text-brand-ink">{{ snapshot.service }}</p>
                  <span class="text-brand-neon">{{ snapshot.time }}</span>
                </div>
                <p class="mt-1 text-xs text-brand-ink/55">{{ snapshot.client }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul class="grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
        <li v-for="highlight in heroHighlights" :key="highlight" class="stat-chip">
          {{ highlight }}
        </li>
      </ul>

      <div class="grid gap-4 md:grid-cols-3">
        <article
          v-for="(metric, index) in heroMetrics"
          :key="metric.label"
          class="card-hover rounded-card border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 hover:border-brand-neon/35"
        >
          <div class="flex items-center gap-2">
            <component
              :is="metricIcons[index % metricIcons.length]"
              class="h-7 w-7 text-brand-neon/85"
              aria-hidden="true"
            />
            <p class="text-3xl font-semibold text-brand-neon">{{ metric.value }}</p>
          </div>
          <p class="mt-2 text-sm font-semibold text-brand-ink">{{ metric.label }}</p>
          <p class="mt-2 text-sm leading-6 text-brand-ink/60">{{ metric.detail }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
