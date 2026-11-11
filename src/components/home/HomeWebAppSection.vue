<script setup lang="ts">
import {
  BellAlertIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  ClockIcon,
  LinkIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline'
import type { WebMoment } from './types'

defineProps<{
  webMoments?: WebMoment[]
}>()
</script>

<template>
  <section id="app-web" class="relative w-full py-16 lg:py-24">
    <div id="proposal" class="absolute -top-16"></div>
    <!-- Ambient section backdrop glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-neon/[0.04] blur-[120px]"
    ></div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <div class="inline-flex items-center gap-2 rounded-full border border-brand-neon/30 bg-brand-neon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-neon">
          <SparklesIcon class="h-4 w-4" />
          <span>Experiencia de Reserva Web 24/7</span>
        </div>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Tu local abierto las 24 hs en el navegador de tus clientes.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
          Sin descargas obligatorias. Tus clientes tocan el link en Instagram, WhatsApp o tu QR y reservan su turno en 30 segundos con seña asegurada.
        </p>
      </div>

      <!-- Bento Grid Showcase -->
      <div class="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
        <!-- Phone Mockup (5 Cols) -->
        <div class="flex justify-center lg:col-span-5">
          <div class="relative w-full max-w-[340px]">
            <!-- Outer Phone Glow -->
            <div
              class="pointer-events-none absolute -inset-3 rounded-[52px] bg-gradient-to-b from-brand-neon/30 via-transparent to-brand-neon/10 blur-xl opacity-60"
            ></div>

            <!-- Phone Body Frame -->
            <div
              class="relative rounded-[44px] border-[5px] border-[#222222] bg-[#0c0c0c] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.85)] ring-1 ring-white/15"
            >
              <!-- Dynamic Island Notch -->
              <div class="mx-auto mb-2.5 flex h-4 w-24 items-center justify-center rounded-full bg-black">
                <span class="h-2 w-2 rounded-full bg-[#111] ring-1 ring-white/10"></span>
              </div>

              <!-- Phone Screen Content -->
              <div class="space-y-3.5 rounded-[32px] bg-[#121212] p-4 text-left text-white ring-1 ring-white/5">
                <!-- App Header -->
                <div class="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div class="flex items-center gap-2">
                    <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-neon font-bold text-brand-night text-xs">
                      ST
                    </div>
                    <div>
                      <p class="text-xs font-bold leading-none text-white">Barbería Capital</p>
                      <p class="text-[10px] text-white/60">sabturno.com/barberia-capital</p>
                    </div>
                  </div>
                  <span class="rounded-full bg-brand-neon/20 px-2 py-0.5 text-[9px] font-bold text-brand-neon">
                    Abierto
                  </span>
                </div>

                <!-- Selected Service Card -->
                <div class="rounded-2xl border border-brand-neon/30 bg-brand-neon/[0.07] p-3">
                  <div class="flex items-start justify-between">
                    <div>
                      <span class="text-[10px] font-semibold uppercase tracking-wider text-brand-neon">Servicio</span>
                      <h4 class="text-xs font-bold text-white">Corte Fade + Perfilado Barba</h4>
                      <div class="mt-1 flex items-center gap-2 text-[10px] text-white/70">
                        <ClockIcon class="h-3 w-3 text-brand-neon" />
                        <span>45 minutos</span>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-brand-neon">$8.500</span>
                  </div>
                </div>

                <!-- Professional Selector -->
                <div>
                  <p class="mb-1 text-[10px] font-semibold text-white/60 uppercase tracking-wider">Profesional</p>
                  <div class="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2">
                    <div class="flex items-center gap-2">
                      <div class="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white">
                        AR
                      </div>
                      <span class="text-[11px] font-semibold text-white">Agustín Ramírez</span>
                    </div>
                    <CheckCircleIcon class="h-4 w-4 text-brand-neon" />
                  </div>
                </div>

                <!-- Date & Slot Picker -->
                <div>
                  <p class="mb-1 text-[10px] font-semibold text-white/60 uppercase tracking-wider">Horario Disponible</p>
                  <div class="grid grid-cols-3 gap-1.5 text-center">
                    <div class="rounded-lg border border-white/10 bg-white/[0.03] py-1 text-[10px] text-white/60">
                      10:00
                    </div>
                    <div class="rounded-lg border border-brand-neon bg-brand-neon text-[10px] font-bold text-brand-night shadow-sm">
                      11:00 ✓
                    </div>
                    <div class="rounded-lg border border-white/10 bg-white/[0.03] py-1 text-[10px] text-white/60">
                      11:45
                    </div>
                  </div>
                </div>

                <!-- Payment Summary Box -->
                <div class="rounded-xl border border-white/10 bg-black/40 p-2.5 text-[10px]">
                  <div class="flex justify-between text-white/70">
                    <span>Total del servicio:</span>
                    <span>$8.500</span>
                  </div>
                  <div class="mt-1 flex justify-between font-bold text-brand-neon">
                    <span>Seña online requerida (40%):</span>
                    <span>$3.400</span>
                  </div>
                  <div class="mt-0.5 flex justify-between text-[9px] text-white/50">
                    <span>Saldo restante en el local:</span>
                    <span>$5.100</span>
                  </div>
                </div>

                <!-- Confirm & Pay CTA -->
                <div class="pt-1">
                  <div class="flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-neon py-2.5 text-xs font-bold text-brand-night shadow-neon transition hover:bg-brand-neon-hover">
                    <ShieldCheckIcon class="h-4 w-4" />
                    <span>Pagar Seña $3.400 y Confirmar</span>
                  </div>
                  <p class="mt-1.5 text-center text-[9px] text-white/50">
                    🔒 Pago seguro vía Mercado Pago o Transferencia
                  </p>
                </div>
              </div>
            </div>

            <!-- Floating Micro-Badge -->
            <div
              class="absolute -bottom-3 -right-2 flex items-center gap-2 rounded-full border border-brand-neon/40 bg-[#0e0e0e]/95 px-3 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md"
            >
              <CheckBadgeIcon class="h-4 w-4 text-brand-neon" />
              <span>0 Descargas requeridas</span>
            </div>
          </div>
        </div>

        <!-- Bento Grid Side Cards (7 Cols) -->
        <div class="flex flex-col gap-5 lg:col-span-7">
          <!-- Bento Card 1: WhatsApp Automated Alert -->
          <article
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-glow transition hover:border-brand-neon/40"
          >
            <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#25D366]">
                  <BellAlertIcon class="h-4 w-4" />
                  <span>WhatsApp Automático</span>
                </div>
                <h3 class="text-xl font-bold text-white sm:text-2xl">
                  Confirmación y recordatorios que eliminan las ausencias
                </h3>
                <p class="text-sm leading-relaxed text-white/70">
                  El cliente recibe la confirmación al instante y un recordatorio 2h antes. Reducción comprobada del 75% en turnos perdidos.
                </p>
              </div>

              <div class="shrink-0 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-1.5 text-center">
                <span class="text-lg font-bold text-[#25D366]">-75%</span>
                <p class="text-[10px] font-semibold text-white/70">Inasistencias</p>
              </div>
            </div>

            <!-- WhatsApp Chat Bubble Mockup -->
            <div class="mt-5 rounded-2xl border border-white/10 bg-[#0a100d] p-4 text-xs">
              <div class="flex items-center gap-2 border-b border-white/10 pb-2">
                <div class="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] font-bold text-black text-xs">
                  ST
                </div>
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="font-bold text-white">SabTurno • Barbería Capital</span>
                    <span class="text-[10px] text-[#25D366]">✓ Cuenta Comercial</span>
                  </div>
                  <span class="text-[10px] text-white/50">Mensaje automático</span>
                </div>
              </div>

              <div class="mt-3 max-w-md rounded-2xl rounded-tl-sm bg-[#122e23] p-3 text-white/90">
                <p class="font-semibold text-white">¡Hola Martín! Tu turno está confirmado 💈</p>
                <div class="mt-2 space-y-1 text-[11px] text-white/80">
                  <p>📅 <strong>Viernes 14 de Noviembre — 11:00 hs</strong></p>
                  <p>✂️ Servicio: Corte Fade + Barba</p>
                  <p>👤 Profesional: Agustín Ramírez</p>
                  <p>📍 Av. Corrientes 1420</p>
                  <p class="text-brand-neon">💳 Seña abonada: $3.400 (Mercado Pago)</p>
                </div>
                <div class="mt-2 flex items-center justify-between text-[10px] text-white/50">
                  <span>Recordatorio programado 2h antes</span>
                  <span class="text-[#53bdeb]">10:16 ✓✓</span>
                </div>
              </div>
            </div>
          </article>

          <!-- Subgrid: 2 Compact Bento Cards -->
          <div class="grid gap-5 sm:grid-cols-2">
            <!-- Bento Card 2: Mercado Pago + Talo Instant Payments -->
            <article
              class="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-glow transition hover:border-brand-neon/40"
            >
              <div>
                <div class="flex items-center justify-between">
                  <span class="rounded-full bg-blue-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-400">
                    Cobro Seguro
                  </span>
                  <span class="text-xs font-semibold text-brand-neon">0% comisión ST</span>
                </div>
                <h3 class="mt-3 text-lg font-bold text-white">
                  Cobrá señas con Mercado Pago y Talo
                </h3>
                <p class="mt-2 text-xs leading-relaxed text-white/70">
                  Las señas se acreditan directamente en tu cuenta al reservar. Congelá el turno y asegurá tu facturación diaria.
                </p>
              </div>

              <div class="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-3">
                <img
                  src="/brands/mercado-pago.svg"
                  alt="Mercado Pago"
                  class="h-6 w-auto shrink-0"
                  loading="lazy"
                />
                <div class="text-[11px]">
                  <p class="font-bold text-white">Checkout Pro & Transferencias</p>
                  <p class="text-white/50">Acreditación instantánea</p>
                </div>
              </div>
            </article>

            <!-- Bento Card 3: Instagram Bio & QR de Mostrador -->
            <article
              class="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-glow transition hover:border-brand-neon/40"
            >
              <div>
                <div class="flex items-center justify-between">
                  <span class="rounded-full bg-brand-neon/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-neon">
                    Canal Directo
                  </span>
                  <QrCodeIcon class="h-5 w-5 text-brand-neon" />
                </div>
                <h3 class="mt-3 text-lg font-bold text-white">
                  Link en Bio y QR para Mostrador
                </h3>
                <p class="mt-2 text-xs leading-relaxed text-white/70">
                  Pegá tu link en Instagram o poné tu cartel QR en el salón para que los clientes agenden sin esperas.
                </p>
              </div>

              <div class="mt-5 space-y-2">
                <div class="flex items-center justify-between rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs">
                  <div class="flex items-center gap-2 truncate">
                    <LinkIcon class="h-3.5 w-3.5 shrink-0 text-brand-neon" />
                    <span class="truncate font-mono text-[11px] text-white/90">sabturno.com/tu-local</span>
                  </div>
                  <span class="shrink-0 rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-brand-neon">
                    Copiar
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
