<script setup lang="ts">
import {
  CheckBadgeIcon,
  CheckCircleIcon,
  GiftIcon,
  XCircleIcon,
} from '@heroicons/vue/24/outline'
import { trackEvent, trackPixelCustomEvent } from '../../lib/analytics'
import type { IncludedFeature } from './types'

defineProps<{
  features?: IncludedFeature[]
}>()

function handleRegisterClick(): void {
  trackEvent('sign_up_click', { plan: 'free', transport_type: 'beacon' })
  trackPixelCustomEvent('ClickRegister', { plan: 'free' })
}

const valuePerks = [
  {
    title: 'Turnos y reservas 100% ilimitadas',
    desc: 'Sin límites mensuales de agenda, clientes ni reservas en la web.',
  },
  {
    title: 'Multi-profesional y equipo completo',
    desc: 'Agregá a todos tus barberos, peluqueros o especialistas sin costo adicional.',
  },
  {
    title: 'WhatsApp y recordatorios automáticos',
    desc: 'Confirmaciones instantáneas con link de mapa y recordatorio pre-turno.',
  },
  {
    title: 'Tarjeta de fidelización digital',
    desc: 'Premiá a tus clientes frecuentes y aumentá la recurrencia sin tarjetas impresas.',
  },
  {
    title: 'Multi-sucursal y control de caja',
    desc: 'Gestioná uno o varios locales desde la misma cuenta sin costos extra.',
  },
]
</script>

<template>
  <section id="todo-incluido" class="relative w-full py-16 lg:py-28">
    <!-- Ambient glowing radial backdrop -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-neon/[0.05] blur-[150px]"
    ></div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="inline-flex items-center gap-2 rounded-full border border-brand-neon/30 bg-brand-neon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-neon">
          <GiftIcon class="h-4 w-4" />
          <span>Acceso Total Desbloqueado</span>
        </span>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Todo incluido, 100% Gratis para tu negocio.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
          Sin tarifas mensuales fijas, sin comisiones por turno y sin planes ocultos. Todas las funcionalidades están disponibles desde el primer día.
        </p>
      </div>

      <!-- Main Showcase Container -->
      <div class="mt-14 overflow-hidden rounded-[40px] border border-brand-neon/35 bg-gradient-to-b from-[#141414] via-[#0f0f0f] to-[#090909] p-6 shadow-[0_20px_80px_rgba(0,240,104,0.14)] sm:p-10 lg:p-12">
        <!-- Banner Grid Header -->
        <div class="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-center">
          <div class="space-y-2">
            <span class="rounded-full bg-brand-neon/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-neon">
              Plan Único Ilimitado
            </span>
            <h3 class="text-2xl font-bold text-white sm:text-4xl">
              Cero costo para tu local. Para siempre.
            </h3>
            <p class="max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              Creemos en acompañar el crecimiento de tu negocio. No te cobramos por usar la plataforma ni retenemos porcentaje de tus turnos.
            </p>
          </div>

          <div class="shrink-0 lg:text-right">
            <div class="flex items-baseline gap-2 lg:justify-end">
              <span class="font-display text-5xl font-extrabold text-brand-neon sm:text-6xl">
                $0
              </span>
              <span class="text-sm font-semibold text-white/60">/ mes</span>
            </div>
            <p class="mt-1 text-xs font-semibold text-brand-neon/90">
              0% comisiones de plataforma
            </p>
          </div>
        </div>

        <!-- Value Matrix vs Others -->
        <div class="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-black/40 p-5 sm:grid-cols-2">
          <!-- SabTurno column -->
          <div class="rounded-2xl border border-brand-neon/30 bg-brand-neon/[0.05] p-4">
            <div class="flex items-center gap-2">
              <CheckCircleIcon class="h-5 w-5 text-brand-neon" />
              <h4 class="font-bold text-white text-sm sm:text-base">Con SabTurno</h4>
            </div>
            <ul class="mt-3 space-y-2 text-xs sm:text-sm text-white/90">
              <li class="flex items-center gap-2">
                <span class="text-brand-neon font-bold">✓</span>
                <span>$0 costo mensual, sin contratos</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-brand-neon font-bold">✓</span>
                <span>0% comisión sobre tus reservas</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-brand-neon font-bold">✓</span>
                <span>Todas las funciones unlocked desde el día 1</span>
              </li>
            </ul>
          </div>

          <!-- Other solutions column -->
          <div class="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-white/60">
            <div class="flex items-center gap-2">
              <XCircleIcon class="h-5 w-5 text-red-400" />
              <h4 class="font-semibold text-white/80 text-sm sm:text-base">Otras plataformas</h4>
            </div>
            <ul class="mt-3 space-y-2 text-xs sm:text-sm">
              <li class="flex items-center gap-2">
                <span class="text-red-400">✗</span>
                <span>Planes de $25.000 a $60.000+ por mes</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-red-400">✗</span>
                <span>Comisión del 3% al 8% por cada turno cobrado</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-red-400">✗</span>
                <span>Límites estrictos de profesionales o sucursales</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Included Features Grid -->
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="perk in valuePerks"
            :key="perk.title"
            class="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-brand-neon/30 hover:bg-white/[0.05]"
          >
            <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-brand-neon/15 text-brand-neon">
              <CheckBadgeIcon class="h-4 w-4" />
            </div>
            <div>
              <p class="text-sm font-bold text-white">{{ perk.title }}</p>
              <p class="mt-1 text-xs leading-relaxed text-white/60">{{ perk.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Prominent Bottom CTA Bar -->
        <div class="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-brand-neon/30 bg-gradient-to-r from-brand-neon/10 via-brand-neon/[0.05] to-transparent p-6 sm:flex-row">
          <div class="space-y-1 text-center sm:text-left">
            <p class="text-sm font-bold text-white sm:text-base">
              ¿Listo para activar tu agenda online sin costos?
            </p>
            <p class="text-xs text-white/60">
              Registrá tu local en 3 minutos. Sin pedir tarjeta de crédito.
            </p>
          </div>

          <a
            href="https://appweb.sabturno.com/register"
            rel="noopener noreferrer"
            class="w-full shrink-0 rounded-full bg-brand-neon px-8 py-3.5 text-center text-sm font-bold text-brand-night shadow-neon transition hover:-translate-y-0.5 hover:bg-brand-neon-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon sm:w-auto"
            @click="handleRegisterClick"
          >
            Empezar Gratis Ahora
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
