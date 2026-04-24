<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="border-t border-brand-neon/10 bg-black/20">
    <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-brand-ink/55 lg:flex-row lg:px-6">
      <p>© {{ new Date().getFullYear() }} Sabturno. Gestion de turnos para locales que quieren verse mejor y vender mejor.</p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <RouterLink to="/terminos-y-condiciones" class="underline underline-offset-4 transition hover:text-brand-neon">
          Terminos y condiciones
        </RouterLink>
        <RouterLink to="/politica-de-privacidad" class="underline underline-offset-4 transition hover:text-brand-neon">
          Politica de privacidad
        </RouterLink>
      </div>
    </div>
  </footer>
</template>