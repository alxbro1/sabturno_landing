<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

type PreRegisterPayload = {
  name?: string
  email: string
  source?: string
}

const props = withDefaults(
  defineProps<{
    open: boolean
    endpoint?: string
  }>(),
  {
    endpoint: undefined,
  },
)

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'success'): void
}>()

const name = ref('')
const email = ref('')
const isSubmitting = ref(false)
const submitError = ref<string | null>(null)
const submitted = ref(false)

function resetState() {
  name.value = ''
  email.value = ''
  isSubmitting.value = false
  submitError.value = null
  submitted.value = false
}

function close() {
  emit('close')
}

async function submit() {
  submitError.value = null

  const trimmedEmail = email.value.trim()
  if (!trimmedEmail) {
    submitError.value = 'Ingresá un correo válido.'
    return
  }

  const payload: PreRegisterPayload = {
    name: name.value.trim() || undefined,
    email: trimmedEmail,
    source: 'landing',
  }

  isSubmitting.value = true
  try {
    const res = await fetch('https://app-api.sabturno.com/test/pre-register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      let message = `Error al enviar (HTTP ${res.status}).`
      const data = (await res.json()) as { message?: string } | null
      if (data?.message) message = data.message
      throw new Error(message)
    }

    submitted.value = true
    emit('success')
  } catch (err) {
    submitError.value = err instanceof Error ? err.message : 'Error al enviar el formulario.'
  } finally {
    isSubmitting.value = false
  }
}

function onKeydown(e: KeyboardEvent) {
  if (!props.open) return
  if (e.key === 'Escape') close()
}

function setBodyScrollLocked(locked: boolean) {
  const body = document.body
  if (locked) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = ''
  }
}

watch(
  () => props.open,
  (open) => {
    if (open) {
      resetState()
      setBodyScrollLocked(true)
    } else {
      setBodyScrollLocked(false)
    }
  },
  { immediate: true },
)

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  setBodyScrollLocked(false)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
      <button
        type="button"
        class="absolute inset-0 bg-brand-night/80"
        aria-label="Cerrar"
        @click="close"
      ></button>

      <section
        class="relative w-full max-w-xl rounded-3xl border border-brand-neon/20 bg-brand-muted/95 p-6 text-brand-ink shadow-card"
        role="dialog"
        aria-modal="true"
        aria-label="Pre-registro"
      >
        <header class="flex items-start justify-between gap-4">
          <div class="space-y-1">
            <h2 class="text-2xl font-semibold text-brand-ink">Pre-registro a Sabturno</h2>
            <p class="text-sm text-brand-ink/70">
              Al enviarlo, te agregamos a una lista de testers y vas a recibir un correo para unirte al grupo de testeo.
            </p>
          </div>
          <button
            type="button"
            class="rounded-full border border-brand-neon/30 bg-brand-card px-3 py-1 text-sm text-brand-ink/70 transition hover:text-brand-neon"
            @click="close"
          >
            Cerrar
          </button>
        </header>

        <div class="mt-6" v-if="submitted">
          <div class="rounded-2xl border border-brand-neon/30 bg-brand-neon/10 p-4">
            <p class="text-sm font-semibold text-brand-neon">¡Listo!</p>
            <p class="mt-1 text-sm text-brand-ink/70">Te vamos a contactar por correo con la invitación al grupo de testeo.</p>
            <p class="mt-2 text-sm text-brand-ink/70">Esto puede demorar hasta 24 hs en llegarte (correo o confirmación).</p>
          </div>
          <div class="mt-4 flex justify-end">
            <button
              type="button"
              class="rounded-full bg-brand-neon px-6 py-2 text-sm font-semibold text-brand-night transition hover:bg-brand-neon/80"
              @click="close"
            >
              Entendido
            </button>
          </div>
        </div>

        <form v-else class="mt-6 space-y-4" @submit.prevent="submit">
          <div>
            <label class="text-sm font-semibold text-brand-ink" for="prereg-name">Nombre (opcional)</label>
            <input
              id="prereg-name"
              v-model="name"
              type="text"
              autocomplete="name"
              class="mt-2 w-full rounded-2xl border border-brand-neon/20 bg-brand-card px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/40 outline-none focus:border-brand-neon/50"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label class="text-sm font-semibold text-brand-ink" for="prereg-email">Email</label>
            <input
              id="prereg-email"
              v-model="email"
              type="email"
              required
              autocomplete="email"
              class="mt-2 w-full rounded-2xl border border-brand-neon/20 bg-brand-card px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/40 outline-none focus:border-brand-neon/50"
              placeholder="tu@email.com"
            />
          </div>

          <p v-if="submitError" class="text-sm text-brand-ink">
            <span class="inline-block rounded-full border border-brand-neon/30 bg-brand-neon/10 px-3 py-1 text-xs font-semibold text-brand-neon">Error</span>
            <span class="ml-2 text-brand-ink/70">{{ submitError }}</span>
          </p>

          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-xs text-brand-ink/60">
              Enviamos tu email a nuestro servidor para sumarte al test.
            </p>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full rounded-full bg-brand-neon px-6 py-3 text-sm font-semibold text-brand-night transition hover:bg-brand-neon/80 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {{ isSubmitting ? 'Enviando…' : 'Enviar pre-registro' }}
            </button>
          </div>
        </form>
      </section>
    </div>
  </Teleport>
</template>
