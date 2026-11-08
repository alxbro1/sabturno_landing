<script setup lang="ts">
import { CheckBadgeIcon } from '@heroicons/vue/24/outline'
import { trackEvent, trackPixelCustomEvent } from '../../lib/analytics'
import type { IncludedFeature } from './types'

defineProps<{
  features: IncludedFeature[]
}>()

function handleRegisterClick(): void {
  trackEvent('sign_up_click', { plan: 'free', transport_type: 'beacon' })
  trackPixelCustomEvent('ClickRegister', { plan: 'free' })
}
</script>

<template>
  <section id="todo-incluido" class="mt-16 lg:mt-24">
    <div class="text-center">
      <span class="badge">100% Gratis</span>
      <h2 class="mt-5 text-3xl font-semibold tracking-tight text-brand-ink lg:text-5xl">
        Todo incluido, sin costo
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-brand-ink/70">
        Olvidate de los planes pagos y las restricciones. Todas las herramientas de Sabturno están
        disponibles gratis para tu negocio desde el primer día.
      </p>
    </div>

    <div class="mx-auto mt-10 max-w-4xl">
      <article
        class="glass-panel relative overflow-hidden rounded-panel border border-brand-neon/40 p-6 shadow-glow lg:p-10"
      >
        <div
          class="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-brand-neon/0 via-brand-neon to-brand-neon/0"
        ></div>

        <div
          class="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-center"
        >
          <div class="space-y-3">
            <span class="badge text-[0.65rem]">Acceso completo</span>
            <h3 class="text-2xl font-semibold text-brand-ink sm:text-3xl">
              Todas las funcionalidades desbloqueadas
            </h3>
            <p class="max-w-xl text-sm leading-6 text-brand-ink/65">
              Sin límites por nivel ni cargos mensuales para usar la plataforma en tu barbería,
              peluquería o centro de estética.
            </p>
          </div>

          <div class="shrink-0 lg:text-right">
            <div class="flex items-baseline gap-2 lg:justify-end">
              <span
                class="font-display text-4xl font-bold tracking-tight text-brand-neon sm:text-5xl"
              >
                Gratis
              </span>
            </div>
            <p class="mt-1 text-xs font-medium text-brand-ink/60">
              Sin suscripciones ni costos ocultos
            </p>
          </div>
        </div>

        <ul class="mt-8 grid gap-4 sm:grid-cols-2">
          <li
            v-for="feature in features"
            :key="feature.title"
            class="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
          >
            <span
              class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-neon/15 text-brand-neon"
            >
              <CheckBadgeIcon class="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p class="text-sm font-semibold text-brand-ink">{{ feature.title }}</p>
              <p class="mt-1 text-xs leading-5 text-brand-ink/65">{{ feature.description }}</p>
            </div>
          </li>
        </ul>

        <div
          class="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-neon/20 bg-brand-neon/[0.06] p-5 sm:flex-row"
        >
          <p class="text-center text-sm text-brand-ink/80 sm:text-left">
            Activá tu agenda online y empezá a recibir reservas confirmadas en minutos.
          </p>
          <a
            href="https://appweb.sabturno.com/register"
            rel="noopener noreferrer"
            class="w-full shrink-0 rounded-full bg-brand-neon px-8 py-3.5 text-center text-sm font-semibold text-brand-night transition hover:-translate-y-0.5 hover:bg-brand-neon-hover focus-visible:ring-2 focus-visible:ring-brand-neon/50 focus-visible:outline-none sm:w-auto"
            @click="handleRegisterClick"
          >
            Empezar gratis
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
