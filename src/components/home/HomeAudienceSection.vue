<script setup lang="ts">
import {
  CheckCircleIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline'
import type { AudienceCard } from './types'

defineProps<{
  audiences?: AudienceCard[]
}>()

const businessAppointments = [
  {
    time: '09:30',
    client: 'Lucas Méndez',
    service: 'Fade Clásico',
    staff: 'Agustín R.',
    status: 'Cobrado',
    amount: '$6.500',
    statusColor: 'text-brand-neon bg-brand-neon/15 border-brand-neon/30',
  },
  {
    time: '10:15',
    client: 'Martín Gómez',
    service: 'Corte + Barba',
    staff: 'Nico S.',
    status: 'En curso',
    amount: '$8.500',
    statusColor: 'text-amber-400 bg-amber-400/15 border-amber-400/30 animate-pulse',
  },
  {
    time: '11:00',
    client: 'Santiago Ruiz',
    service: 'Corte Tijera',
    staff: 'Agustín R.',
    status: 'Seña Recibida',
    amount: '$3.000',
    statusColor: 'text-sky-400 bg-sky-400/15 border-sky-400/30',
  },
  {
    time: '11:45',
    client: 'Gastón Vega',
    service: 'Color + Brushing',
    staff: 'Mateo P.',
    status: 'Confirmado',
    amount: '$12.000',
    statusColor: 'text-emerald-400 bg-emerald-400/15 border-emerald-400/30',
  },
]

const clientSteps = [
  {
    num: '01',
    title: 'Tocan tu link en Instagram o WhatsApp',
    desc: 'Sin descargar nada, sin contraseñas engorrosas. Se abre al instante en Chrome o Safari.',
    badge: '0 descargas',
  },
  {
    num: '02',
    title: 'Eligen profesional, servicio y horario',
    desc: 'Ven tu disponibilidad real sincronizada al segundo. Chau al ida y vuelta de "¿A qué hora tenés libre?".',
    badge: 'En tiempo real',
  },
  {
    num: '03',
    title: 'Pagan la seña y turno congelado',
    desc: 'Abonan por Mercado Pago o transferencia y reciben su comprobante por WhatsApp con recordatorio automático.',
    badge: '30 segundos',
  },
]
</script>

<template>
  <section id="experience" class="relative w-full py-16 lg:py-24">
    <!-- Ambient glow behind the section -->
    <div
      class="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-[450px] w-[500px] rounded-full bg-brand-neon/[0.03] blur-[140px]"
    ></div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-neon">
          <UserGroupIcon class="h-4 w-4" />
          <span>Diseñado para ambos lados</span>
        </span>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          El equilibrio perfecto entre control total y reserva express.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
          Un panel potente para que tu equipo ordene su día sin estrés, y un flujo ultrarrápido para que tus clientes amen reservar.
        </p>
      </div>

      <!-- Split Panoramic Panels -->
      <div class="mt-14 grid gap-8 lg:grid-cols-2">
        <!-- Panel 1: Para Tu Negocio (Live Dashboard Calendar Mockup) -->
        <article
          class="relative flex flex-col justify-between overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-[#131313] to-[#0a0a0a] p-6 shadow-glow sm:p-8"
        >
          <div>
            <div class="flex items-center justify-between">
              <span class="rounded-full border border-brand-neon/30 bg-brand-neon/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-neon">
                Para tu Negocio
              </span>
              <span class="flex items-center gap-1.5 text-xs font-medium text-white/50">
                <span class="h-2 w-2 rounded-full bg-brand-neon animate-pulse"></span>
                Agenda en vivo
              </span>
            </div>

            <h3 class="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Control visual absoluto sin planillas ni cuadernos.
            </h3>
            <p class="mt-2 text-sm text-white/70">
              Sincronización multi-profesional al instante. Bloqueos de horarios en 1 clic y métricas claras de facturación diaria.
            </p>

            <!-- Mini Live Calendar Mockup -->
            <div class="mt-6 rounded-2xl border border-white/10 bg-[#0d0d0d] p-4">
              <!-- Calendar Header Metrics -->
              <div class="grid grid-cols-3 gap-2 border-b border-white/10 pb-3 text-center">
                <div class="rounded-xl bg-white/[0.03] p-2">
                  <p class="text-[10px] uppercase tracking-wider text-white/50">Hoy</p>
                  <p class="text-sm font-bold text-white sm:text-base">18 Turnos</p>
                </div>
                <div class="rounded-xl bg-brand-neon/[0.06] p-2">
                  <p class="text-[10px] uppercase tracking-wider text-brand-neon">Facturado</p>
                  <p class="text-sm font-bold text-brand-neon sm:text-base">$142.000</p>
                </div>
                <div class="rounded-xl bg-white/[0.03] p-2">
                  <p class="text-[10px] uppercase tracking-wider text-white/50">Ocupación</p>
                  <p class="text-sm font-bold text-white sm:text-base">94%</p>
                </div>
              </div>

              <!-- Appointment List -->
              <div class="mt-3 divide-y divide-white/5">
                <div
                  v-for="appt in businessAppointments"
                  :key="appt.time + appt.client"
                  class="flex items-center justify-between py-2.5 text-xs transition-colors hover:bg-white/[0.02]"
                >
                  <div class="flex items-center gap-3">
                    <span class="font-mono text-xs font-semibold text-white/60">{{ appt.time }}</span>
                    <div>
                      <p class="font-bold text-white">{{ appt.client }}</p>
                      <p class="text-[11px] text-white/50">{{ appt.service }} • {{ appt.staff }}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <span
                      class="inline-block rounded-full border px-2 py-0.5 text-[10px] font-semibold"
                      :class="appt.statusColor"
                    >
                      {{ appt.status }}
                    </span>
                    <p class="mt-0.5 font-mono text-[11px] text-white/70">{{ appt.amount }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature Bullets -->
          <ul class="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-xs sm:text-sm text-white/80">
            <li class="flex items-center gap-2.5">
              <CheckCircleIcon class="h-4 w-4 shrink-0 text-brand-neon" />
              <span>Multi-profesional: cada estilista o barbero ve su propia agenda en el celular.</span>
            </li>
            <li class="flex items-center gap-2.5">
              <CheckCircleIcon class="h-4 w-4 shrink-0 text-brand-neon" />
              <span>Señas automáticas acreditadas sin demoras en tu cuenta de Mercado Pago.</span>
            </li>
          </ul>
        </article>

        <!-- Panel 2: Para Tus Clientes (0 Friction 3-Step Express Booking) -->
        <article
          class="relative flex flex-col justify-between overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-[#131313] to-[#0a0a0a] p-6 shadow-glow sm:p-8"
        >
          <div>
            <div class="flex items-center justify-between">
              <span class="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-400">
                Para tus Clientes
              </span>
              <span class="flex items-center gap-1.5 text-xs font-medium text-white/50">
                <ClockIcon class="h-4 w-4 text-sky-400" />
                30 segundos
              </span>
            </div>

            <h3 class="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Reservar se siente instantáneo, claro y cómodo.
            </h3>
            <p class="mt-2 text-sm text-white/70">
              Eliminamos cualquier barrera. Tus clientes reservan en 3 toques mientras viajan, trabajan o scrollean Instagram.
            </p>

            <!-- 3-Step Connected Visual Timeline -->
            <div class="mt-6 space-y-3.5">
              <div
                v-for="step in clientSteps"
                :key="step.num"
                class="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/25 hover:bg-white/[0.05]"
              >
                <div class="flex items-start justify-between gap-3">
                  <div class="flex items-start gap-3">
                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-white/10 font-mono text-xs font-bold text-brand-neon">
                      {{ step.num }}
                    </span>
                    <div>
                      <h4 class="text-sm font-bold text-white">{{ step.title }}</h4>
                      <p class="mt-1 text-xs leading-relaxed text-white/60">{{ step.desc }}</p>
                    </div>
                  </div>
                  <span class="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/70">
                    {{ step.badge }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Conversion Comparison Pill -->
          <div class="mt-6 flex items-center justify-between rounded-2xl border border-brand-neon/20 bg-brand-neon/[0.06] p-4">
            <div class="flex items-center gap-3">
              <SparklesIcon class="h-5 w-5 shrink-0 text-brand-neon" />
              <div>
                <p class="text-xs font-bold text-white">+61% de conversión de reservas</p>
                <p class="text-[11px] text-white/60">Frente a responder mensajes manualmente por WhatsApp</p>
              </div>
            </div>
            <DevicePhoneMobileIcon class="h-6 w-6 text-brand-neon/60" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
