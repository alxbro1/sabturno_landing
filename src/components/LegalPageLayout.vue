<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="relative isolate min-h-screen overflow-clip bg-brand-night text-brand-ink">
    <div
      class="pointer-events-none absolute -left-40 -top-24 -z-20 h-[32rem] w-[32rem] rounded-full opacity-35 blur-[80px] [background:radial-gradient(circle,rgba(0,240,104,0.85)_0%,rgba(0,240,104,0)_70%)]"
    ></div>
    <div
      class="pointer-events-none absolute -right-40 top-72 -z-20 h-[32rem] w-[32rem] rounded-full opacity-35 blur-[80px] [background:radial-gradient(circle,rgba(67,206,162,0.42)_0%,rgba(67,206,162,0)_72%)]"
    ></div>

    <header class="sticky top-0 z-50">
      <div class="mx-auto max-w-7xl px-4 pt-4 lg:px-6">
        <div
          class="flex items-center justify-between rounded-[32px] border border-white/10 bg-[#0a0a0ab8] px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-[18px] lg:px-6"
        >
          <RouterLink to="/" class="flex shrink-0 items-center">
            <img src="/white_logotype.webp" alt="Logo Sabturno" class="h-6 w-auto lg:h-8" />
          </RouterLink>
          <RouterLink
            to="/"
            class="rounded-full border border-brand-neon/20 bg-brand-card px-5 py-2 text-sm font-semibold text-brand-ink transition hover:-translate-y-0.5 hover:border-brand-neon"
          >
            Volver al inicio
          </RouterLink>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-4xl px-4 pb-24 pt-8 lg:px-6">
      <slot />
    </main>

    <footer class="border-t border-brand-neon/10 bg-black/20">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-brand-ink/55 lg:flex-row lg:px-6"
      >
        <p>
          © {{ new Date().getFullYear() }} Sabturno. Gestión de turnos para locales que quieren verse
          mejor y vender mejor.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            to="/terminos-y-condiciones"
            class="underline underline-offset-4 transition hover:text-brand-neon"
          >
            Términos y condiciones
          </RouterLink>
          <RouterLink
            to="/politica-de-privacidad"
            class="underline underline-offset-4 transition hover:text-brand-neon"
          >
            Política de privacidad
          </RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>
