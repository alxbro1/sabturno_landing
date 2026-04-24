<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { NavItem } from './types'

defineProps<{
  navItems: NavItem[]
  mobileMenuOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'open-pre-register'): void
  (e: 'close-mobile-menu'): void
  (e: 'toggle-mobile-menu'): void
}>()
</script>

<template>
  <header class="sticky top-0 z-50">
    <div class="mx-auto max-w-7xl px-4 pt-4 lg:px-6">
      <div
        class="flex items-center gap-4 rounded-[32px] border border-white/10 bg-[#0a0a0ab8] px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-[18px] lg:px-6"
      >
        <a href="#hero" class="flex shrink-0 items-center">
          <img src="/white_logotype.webp" alt="Logo Sabturno" class="h-6 w-auto lg:h-8" />
        </a>

        <nav
          class="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-brand-ink/70 lg:flex"
        >
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="whitespace-nowrap transition hover:text-brand-neon"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="hidden shrink-0 items-center gap-3 lg:flex">
          <button
            type="button"
            class="rounded-full border border-brand-neon/20 bg-brand-card px-5 py-2 text-sm font-semibold text-brand-ink transition hover:-translate-y-0.5 hover:border-brand-neon"
            @click="emit('open-pre-register')"
          >
            Sumarme al test
          </button>
          <a
            href="https://sabturno.com/app/"
            class="rounded-full bg-brand-neon px-5 py-2 text-sm font-semibold text-brand-night transition hover:-translate-y-0.5 hover:bg-brand-neon/85"
          >
            Probar App Web
          </a>
        </div>

        <button
          type="button"
          class="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-neon/20 bg-brand-card text-brand-ink transition hover:border-brand-neon lg:hidden"
          aria-label="Abrir menú"
          @click="emit('toggle-mobile-menu')"
        >
          <span class="space-y-1.5">
            <span class="block h-0.5 w-5 bg-current"></span>
            <span class="block h-0.5 w-5 bg-current"></span>
            <span class="block h-0.5 w-5 bg-current"></span>
          </span>
        </button>
      </div>

      <div
        v-if="mobileMenuOpen"
        class="mt-3 overflow-hidden rounded-[28px] border border-brand-neon/15 bg-brand-card/95 p-4 shadow-card backdrop-blur"
      >
        <div class="flex flex-col gap-3 text-sm font-medium text-brand-ink/80">
          <a
            v-for="item in navItems"
            :key="`mobile-${item.label}`"
            :href="item.href"
            class="rounded-2xl border border-transparent px-3 py-2 transition hover:border-brand-neon/20 hover:bg-brand-muted"
            @click="emit('close-mobile-menu')"
          >
            {{ item.label }}
          </a>
          <RouterLink
            to="/terminos-y-condiciones"
            class="rounded-2xl px-3 py-2 text-brand-ink/70 underline underline-offset-4"
            @click="emit('close-mobile-menu')"
          >
            Términos y condiciones
          </RouterLink>
          <RouterLink
            to="/politica-de-privacidad"
            class="rounded-2xl px-3 py-2 text-brand-ink/70 underline underline-offset-4"
            @click="emit('close-mobile-menu')"
          >
            Política de privacidad
          </RouterLink>
        </div>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            class="rounded-full border border-brand-neon/20 bg-brand-muted px-5 py-3 text-sm font-semibold text-brand-ink"
            @click="emit('open-pre-register')"
          >
            Sumarme al test
          </button>
          <a
            href="https://sabturno.com/app/"
            class="rounded-full bg-brand-neon px-5 py-3 text-center text-sm font-semibold text-brand-night"
            @click="emit('close-mobile-menu')"
          >
            Probar App Web
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
