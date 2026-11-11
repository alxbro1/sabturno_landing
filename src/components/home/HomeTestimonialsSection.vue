<script setup lang="ts">
import {
  CheckBadgeIcon,
  StarIcon,
} from '@heroicons/vue/24/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
import type { Testimonial } from './types'

defineProps<{
  testimonials?: Testimonial[]
}>()

const authenticReviews = [
  {
    business: 'Barbería Capital',
    city: 'Buenos Aires',
    vertical: 'Barbería & Grooming',
    quote:
      'Dejamos de contestar mensajes a las 11 de la noche. El link en la bio de Instagram nos llena los turnos de jueves a sábados en automático.',
    author: 'Facundo Rossi',
    role: 'Dueño y Barbero Principal',
    metric: '-80% mensajes repetitivos',
    highlight: 'Agenda llena',
  },
  {
    business: 'Glow Estudio Estética',
    city: 'Córdoba',
    vertical: 'Centro de Estética',
    quote:
      'Cobrar la seña previa por Mercado Pago terminó de raíz con las clientas que reservaban y no aparecían. Para nuestra rentabilidad fue un cambio total.',
    author: 'Camila Benítez',
    role: 'Directora',
    metric: '0% turnos colgados',
    highlight: 'Señas 100% cobradas',
  },
  {
    business: 'Salón Boutique & Hair',
    city: 'Rosario',
    vertical: 'Peluquería & Color',
    quote:
      'A las clientas les encanta no tener que descargar ninguna aplicación pesada. Tocan el link en stories, eligen fecha y hora y confirman en 30 segundos.',
    author: 'Mariana Duarte',
    role: 'Estilista & Fundadora',
    metric: '+45 turnos semanales',
    highlight: 'Sin descargas',
  },
  {
    business: 'La Cueva Barber Studio',
    city: 'Mendoza',
    vertical: 'Barbería Multiestación',
    quote:
      'Manejo un equipo de 4 barberos y cada uno ve su agenda en tiempo real desde el teléfono. Nunca más un turno duplicado ni confusiones de horario.',
    author: 'Lucas Navarro',
    role: 'Socio Gerente',
    metric: '4 barberos sincronizados',
    highlight: 'Operación ordenada',
  },
]
</script>

<template>
  <section class="relative w-full py-16 lg:py-24">
    <!-- Ambient glow -->
    <div
      class="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-72 w-96 rounded-full bg-brand-neon/[0.03] blur-[120px]"
    ></div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-neon">
            <ChatBubbleLeftRightIcon class="h-4 w-4" />
            <span>Casos Reales</span>
          </span>
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Locales que ya automatizaron su agenda.
          </h2>
        </div>
        <p class="max-w-xl text-base leading-relaxed text-white/70">
          Dejaron atrás los cuadernos, los WhatsApps interminables y las ausencias sin aviso. Hoy reciben reservas y señas en piloto automático.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="item in authenticReviews"
          :key="item.business"
          class="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-brand-neon/40 hover:shadow-[0_15px_40px_rgba(0,240,104,0.1)]"
        >
          <div>
            <!-- Top Badges & Rating -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1 text-amber-400">
                <StarIcon v-for="i in 5" :key="i" class="h-4 w-4" />
              </div>
              <span class="rounded-full bg-brand-neon/15 px-2.5 py-0.5 text-[10px] font-bold text-brand-neon">
                {{ item.highlight }}
              </span>
            </div>

            <!-- Quote Text -->
            <p class="mt-4 text-xs leading-relaxed text-white/80 sm:text-sm">
              "{{ item.quote }}"
            </p>
          </div>

          <!-- Business & Metric Footer -->
          <div class="mt-6 border-t border-white/10 pt-4">
            <!-- Tangible Metric Chip -->
            <div class="mb-3 rounded-lg border border-brand-neon/20 bg-brand-neon/[0.06] px-2.5 py-1 text-[11px] font-bold text-brand-neon">
              📈 {{ item.metric }}
            </div>

            <div class="flex items-center justify-between">
              <div>
                <div class="flex items-center gap-1.5">
                  <p class="text-xs font-bold text-white">{{ item.business }}</p>
                  <CheckBadgeIcon class="h-3.5 w-3.5 text-brand-neon" />
                </div>
                <p class="text-[11px] text-white/50">{{ item.author }} • {{ item.city }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
