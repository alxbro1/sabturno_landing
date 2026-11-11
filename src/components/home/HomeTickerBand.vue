<script setup lang="ts">
interface TickerItem {
  id: string
  type: 'vertical' | 'activity'
  icon?: string
  label: string
  highlight?: string
}

const items: TickerItem[] = [
  { id: 'v1', type: 'vertical', icon: '💈', label: 'Barberías' },
  { id: 'a1', type: 'activity', label: 'Turno reservado en 32s', highlight: 'En vivo' },
  { id: 'v2', type: 'vertical', icon: '✂️', label: 'Peluquerías & Salones' },
  { id: 'a2', type: 'activity', label: 'Seña acreditada por Mercado Pago', highlight: '$3.500 ARS' },
  { id: 'v3', type: 'vertical', icon: '✨', label: 'Centros de Estética' },
  { id: 'a3', type: 'activity', label: 'WhatsApp de recordatorio enviado', highlight: 'Automático' },
  { id: 'v4', type: 'vertical', icon: '💅', label: 'Uñas & Pestañas' },
  { id: 'a4', type: 'activity', label: '100% gratis para tu negocio', highlight: '$0 comisión' },
  { id: 'v5', type: 'vertical', icon: '🧖', label: 'Spas & Masajes' },
  { id: 'a5', type: 'activity', label: 'Reserva directa desde Instagram', highlight: 'Sin app' },
  { id: 'v6', type: 'vertical', icon: '🖋️', label: 'Estudios de Tatuaje' },
  { id: 'a6', type: 'activity', label: 'Agenda sincronizada en tiempo real', highlight: 'Multi-equipo' },
]
</script>

<template>
  <div
    class="relative w-full overflow-hidden border-y border-white/10 bg-[#090909]/95 py-3.5 backdrop-blur-md"
    aria-label="Rubros y actividad en tiempo real"
  >
    <!-- Ambient side gradient masks for ultra-smooth edge blending -->
    <div
      class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-night to-transparent sm:w-40"
    ></div>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-night to-transparent sm:w-40"
    ></div>

    <div class="ticker-track flex w-max items-center gap-4 hover:[animation-play-state:paused]">
      <!-- Group 1 -->
      <div class="flex shrink-0 items-center gap-4">
        <template v-for="item in items" :key="'g1-' + item.id">
          <!-- Activity Chip -->
          <div
            v-if="item.type === 'activity'"
            class="flex items-center gap-2.5 rounded-full border border-brand-neon/25 bg-brand-neon/[0.08] px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-sm"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-neon opacity-75"
              ></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-brand-neon"></span>
            </span>
            <span class="font-medium tracking-wide">{{ item.label }}</span>
            <span
              v-if="item.highlight"
              class="rounded-full bg-brand-neon/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-neon"
            >
              {{ item.highlight }}
            </span>
          </div>

          <!-- Vertical Chip -->
          <div
            v-else
            class="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:border-white/25 hover:text-white"
          >
            <span class="text-sm" aria-hidden="true">{{ item.icon }}</span>
            <span class="font-display tracking-wide">{{ item.label }}</span>
          </div>
        </template>
      </div>

      <!-- Group 2 (Duplicate for infinite seamless loop) -->
      <div class="flex shrink-0 items-center gap-4" aria-hidden="true">
        <template v-for="item in items" :key="'g2-' + item.id">
          <div
            v-if="item.type === 'activity'"
            class="flex items-center gap-2.5 rounded-full border border-brand-neon/25 bg-brand-neon/[0.08] px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-sm"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-neon opacity-75"
              ></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-brand-neon"></span>
            </span>
            <span class="font-medium tracking-wide">{{ item.label }}</span>
            <span
              v-if="item.highlight"
              class="rounded-full bg-brand-neon/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-neon"
            >
              {{ item.highlight }}
            </span>
          </div>

          <div
            v-else
            class="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-white/80"
          >
            <span class="text-sm" aria-hidden="true">{{ item.icon }}</span>
            <span class="font-display tracking-wide">{{ item.label }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes ticker {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

.ticker-track {
  animation: ticker 42s linear infinite;
  will-change: transform;
}
</style>
