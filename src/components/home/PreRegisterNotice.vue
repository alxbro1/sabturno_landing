<script setup lang="ts">
defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 pt-4 lg:px-6">
    <div
      class="flex items-start justify-between gap-4 rounded-3xl border border-white/10 bg-[#111111d1] px-4 py-4 backdrop-blur-[16px]"
    >
      <p class="text-sm text-brand-ink/70">
        Pre-registro enviado. Esto puede demorar hasta 24 hs en llegarte por correo o por mensaje de
        confirmación.
      </p>
      <button
        type="button"
        class="rounded-full border border-brand-neon/20 bg-brand-card px-3 py-1 text-xs font-semibold text-brand-ink/70 transition hover:text-brand-neon"
        @click="$emit('close')"
      >
        X
      </button>
    </div>
  </div>
</template>
