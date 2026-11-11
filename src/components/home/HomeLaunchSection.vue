<script setup lang="ts">
import {
  CheckIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  ShareIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline'
import type { FlowStep } from './types'

defineProps<{
  launchSteps?: FlowStep[]
}>()

const steps = [
  {
    step: '01',
    title: 'Configurá tu Local',
    time: '3 minutos',
    description: 'Cargá tus servicios, precios, profesionales y horarios de atención. Listo para operar en el momento.',
    uiSnippet: {
      type: 'config',
      badge: 'Agenda lista',
      item1: 'Lun a Sáb • 09:00 a 20:00',
      item2: '3 Profesionales sincronizados',
    },
  },
  {
    step: '02',
    title: 'Compartí tu Link o QR',
    time: '1 minuto',
    description: 'Pegá tu link exclusivo en la bio de Instagram, WhatsApp Business o colocá el QR en tu salón.',
    uiSnippet: {
      type: 'share',
      badge: 'Link público',
      url: 'sabturno.com/tu-local',
    },
  },
  {
    step: '03',
    title: 'Turnos en Piloto Automático',
    time: '24/7 activo',
    description: 'Tus clientes agendan solos, las señas caen en tu cuenta y WhatsApp envía los recordatorios.',
    uiSnippet: {
      type: 'live',
      badge: 'Turno confirmado',
      detail: 'Seña acreditada • $3.400 ARS',
    },
  },
]
</script>

<template>
  <section id="launch" class="relative w-full py-16 lg:py-24">
    <!-- Ambient glow behind pipeline -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-neon/[0.04] blur-[100px]"
    ></div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="inline-flex items-center gap-2 rounded-full border border-brand-neon/30 bg-brand-neon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-neon">
          <RocketLaunchIcon class="h-4 w-4" />
          <span>Activación Express</span>
        </span>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          De registrarte a recibir reservas hoy mismo.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
          Sin instalaciones complejas ni capacitaciones eternas. El sistema más intuitivo para poner tu negocio en piloto automático.
        </p>
      </div>

      <!-- Pipeline Container -->
      <div class="relative mt-14">
        <!-- Connecting glowing neon line (Desktop only) -->
        <div
          class="pointer-events-none absolute left-0 right-0 top-1/2 -z-10 hidden -translate-y-8 lg:block"
          aria-hidden="true"
        >
          <div class="mx-16 h-0.5 bg-gradient-to-r from-brand-neon/20 via-brand-neon to-brand-neon/20 shadow-[0_0_12px_rgba(0,240,104,0.6)]"></div>
        </div>

        <!-- 3 Horizontal Connected Step Cards -->
        <div class="grid gap-6 lg:grid-cols-3">
          <article
            v-for="item in steps"
            :key="item.step"
            class="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-brand-neon/40 hover:shadow-[0_20px_50px_rgba(0,240,104,0.12)]"
          >
            <!-- Top Step Header -->
            <div>
              <div class="flex items-center justify-between">
                <span class="font-display text-4xl font-extrabold text-brand-neon/90 group-hover:text-brand-neon transition-colors">
                  {{ item.step }}
                </span>
                <span class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/60">
                  {{ item.time }}
                </span>
              </div>

              <h3 class="mt-4 text-xl font-bold text-white group-hover:text-brand-neon transition-colors">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
                {{ item.description }}
              </p>
            </div>

            <!-- Micro-Illustration / UI Snippet -->
            <div class="mt-6 rounded-2xl border border-white/10 bg-black/50 p-3.5">
              <!-- Step 1 Snippet -->
              <div v-if="item.uiSnippet.type === 'config'" class="space-y-2">
                <div class="flex items-center justify-between text-[11px]">
                  <span class="flex items-center gap-1.5 font-semibold text-brand-neon">
                    <Cog6ToothIcon class="h-3.5 w-3.5" />
                    {{ item.uiSnippet.badge }}
                  </span>
                  <span class="rounded bg-brand-neon/15 px-1.5 py-0.5 text-[9px] font-bold text-brand-neon">ACTIVO</span>
                </div>
                <div class="space-y-1 text-[10px] text-white/70">
                  <div class="flex items-center gap-1.5">
                    <CheckIcon class="h-3 w-3 text-brand-neon" />
                    <span>{{ item.uiSnippet.item1 }}</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <CheckIcon class="h-3 w-3 text-brand-neon" />
                    <span>{{ item.uiSnippet.item2 }}</span>
                  </div>
                </div>
              </div>

              <!-- Step 2 Snippet -->
              <div v-else-if="item.uiSnippet.type === 'share'" class="space-y-2">
                <div class="flex items-center justify-between text-[11px]">
                  <span class="flex items-center gap-1.5 font-semibold text-white">
                    <ShareIcon class="h-3.5 w-3.5 text-brand-neon" />
                    {{ item.uiSnippet.badge }}
                  </span>
                  <span class="text-[10px] text-brand-neon">Instagram & WhatsApp</span>
                </div>
                <div class="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px]">
                  <span class="font-mono text-white/80 truncate">{{ item.uiSnippet.url }}</span>
                  <span class="shrink-0 font-bold text-brand-neon">Copiar</span>
                </div>
              </div>

              <!-- Step 3 Snippet -->
              <div v-else class="space-y-1.5">
                <div class="flex items-center justify-between text-[11px]">
                  <span class="flex items-center gap-1.5 font-semibold text-brand-neon">
                    <SparklesIcon class="h-3.5 w-3.5" />
                    {{ item.uiSnippet.badge }}
                  </span>
                  <span class="text-[10px] text-white/50">Hace 2m</span>
                </div>
                <p class="text-[11px] font-bold text-white">Corte Degradé • Martín G.</p>
                <p class="text-[10px] text-brand-neon font-mono">{{ item.uiSnippet.detail }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
