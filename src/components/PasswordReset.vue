<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

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

watch([password, confirmPassword], () => {
  error.value = ''
})

function validate() {
  if (isExpired.value) {
    error.value = 'El token ha expirado.'
    return false
  }
  if (!password.value || password.value.length < 8) {
    error.value = 'La contraseña debe tener al menos 8 caracteres.'
    return false
  }
  if (password.value !== confirmPassword.value) {
    error.value = 'Las contraseñas no coinciden.'
    return false
  }
  return true
}

async function submit() {
  if (!validate()) return
  isSubmitting.value = true
  error.value = ''
  try {
    await fetch('https://app-api.sabturno.com/auth/reset-password', {
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

<template>
  <div
    class="glass-panel mx-auto max-w-md rounded-panel border border-brand-neon/20 p-6 text-brand-ink shadow-card"
  >
    <h2 class="text-xl font-semibold text-brand-ink">Resetear contraseña</h2>
    <p class="mt-2 text-sm text-brand-ink/70">
      Introduce tu nueva contraseña. Token expira:
      <span class="font-medium text-brand-neon">{{ expiresText }}</span>
    </p>

    <div
      v-if="isExpired"
      class="mt-4 rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
    >
      El token expiró.
    </div>

    <form class="mt-6 space-y-4" @submit.prevent="submit">
      <div>
        <label class="text-sm font-semibold text-brand-ink" for="reset-password"
          >Nueva contraseña</label
        >
        <div class="relative mt-2">
          <input
            id="reset-password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="w-full rounded-2xl border border-brand-neon/20 bg-brand-card px-4 py-3 pr-12 text-sm text-brand-ink placeholder:text-brand-ink/40 outline-none focus:border-brand-neon/50"
            placeholder="Mínimo 8 caracteres"
          />
          <button
            type="button"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-brand-ink/50 transition hover:text-brand-neon"
            aria-label="Mostrar contraseña"
            @click="showPassword = !showPassword"
          >
            <EyeSlashIcon v-if="showPassword" class="h-5 w-5" />
            <EyeIcon v-else class="h-5 w-5" />
          </button>
        </div>
      </div>

      <div>
        <label class="text-sm font-semibold text-brand-ink" for="reset-confirm"
          >Confirmar contraseña</label
        >
        <div class="relative mt-2">
          <input
            id="reset-confirm"
            v-model="confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            class="w-full rounded-2xl border border-brand-neon/20 bg-brand-card px-4 py-3 pr-12 text-sm text-brand-ink placeholder:text-brand-ink/40 outline-none focus:border-brand-neon/50"
            placeholder="Repetí la contraseña"
          />
          <button
            type="button"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-brand-ink/50 transition hover:text-brand-neon"
            aria-label="Mostrar confirmar contraseña"
            @click="showConfirmPassword = !showConfirmPassword"
          >
            <EyeSlashIcon v-if="showConfirmPassword" class="h-5 w-5" />
            <EyeIcon v-else class="h-5 w-5" />
          </button>
        </div>
      </div>

      <div v-if="error" class="flex items-center gap-2">
        <span
          class="inline-block rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive"
          >Error</span
        >
        <span class="text-sm text-brand-ink/70">{{ error }}</span>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting || isExpired"
        class="w-full rounded-full bg-brand-neon py-3 text-sm font-semibold text-brand-night transition hover:-translate-y-0.5 hover:bg-brand-neon-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {{ isSubmitting ? 'Enviando...' : 'Resetear contraseña' }}
      </button>
    </form>

    <div
      v-if="success"
      class="mt-4 rounded-2xl border border-success/30 bg-success/10 px-4 py-3 text-sm font-semibold text-success"
    >
      Contraseña reseteada con éxito
    </div>
  </div>
</template>
