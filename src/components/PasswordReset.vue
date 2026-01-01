<template>
  <div class="mx-auto max-w-md rounded-2xl border border-brand-neon/20 bg-brand-card p-6 text-brand-night">
    <h2 class="text-xl font-semibold text-brand-ink mb-2">Resetear contraseña</h2>
    <p class="text-sm text-brand-ink/70 mb-4">Introduce tu nueva contraseña. Token expira: <span class="font-medium">{{ expiresText }}</span></p>
    <div v-if="isExpired" class="text-red-500 mb-4">El token expiró.</div>
    <form @submit.prevent="submit">
      <label class="block text-sm text-brand-ink/70">Nueva contraseña</label>
      <div class="relative mb-3">
        <input v-model="password" :type="showPassword ? 'text' : 'password'" class="w-full rounded-md border px-3 py-2 pr-10" />
        <button type="button" @click="showPassword = !showPassword" class="absolute right-2 top-1/2 -translate-y-1/2 text-sm opacity-80" aria-label="Mostrar contraseña">
          <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.582M6.1 6.1A9.966 9.966 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.97 9.97 0 01-4.35 5.37M3 3l18 18"/></svg>
        </button>
      </div>
      <label class="block text-sm text-brand-ink/70">Confirmar contraseña</label>
      <div class="relative mb-3">
        <input v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" class="w-full rounded-md border px-3 py-2 pr-10" />
        <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute right-2 top-1/2 -translate-y-1/2 text-sm opacity-80" aria-label="Mostrar confirmar contraseña">
          <svg v-if="!showConfirmPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.582M6.1 6.1A9.966 9.966 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.97 9.97 0 01-4.35 5.37M3 3l18 18"/></svg>
        </button>
      </div>
      <div class="text-sm text-red-500 mb-3" v-if="error">{{ error }}</div>
      <button class="w-full rounded-full bg-brand-neon py-2 text-sm font-semibold text-brand-night disabled:opacity-60" :disabled="isSubmitting || isExpired">
        {{ isSubmitting ? 'Enviando...' : 'Resetear contraseña' }}
      </button>
    </form>
    <div v-if="success" class="mt-4 text-green-500">Contraseña reseteada con éxito</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  passwordResetToken?: string
  passwordResetTokenExpires?: string | number | Date
}>()
const emit = defineEmits<{
  (e: 'success', payload: { token?: string }): void
}>()

const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const error = ref('')
const isSubmitting = ref(false)
const success = ref(false)

const expiresAt = computed(() => {
  if (!props.passwordResetTokenExpires) return null
  const d = new Date(props.passwordResetTokenExpires)
  return isNaN(d.getTime()) ? null : d
})
const isExpired = computed(() => {
  if (!expiresAt.value) return false
  return Date.now() > expiresAt.value.getTime()
})
const expiresText = computed(() => {
  return expiresAt.value ? expiresAt.value.toLocaleString() : 'sin expiración definida'
})

watch([password, confirmPassword], () => { error.value = '' })

function validate() {
  if (isExpired.value) { error.value = 'El token ha expirado.'; return false }
  if (!password.value || password.value.length < 8) { error.value = 'La contraseña debe tener al menos 8 caracteres.'; return false }
  if (password.value !== confirmPassword.value) { error.value = 'Las contraseñas no coinciden.'; return false }
  return true
}

async function submit() {
  if (!validate()) return
  isSubmitting.value = true
  error.value = ''
  try {
    await fetch('/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: props.passwordResetToken,
        newPassword: password.value,
      }),
    })
    success.value = true
    emit('success', { token: props.passwordResetToken })
  } catch {
    error.value = 'Error al resetear la contraseña.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
