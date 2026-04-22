<script setup lang="ts">
import { RouterLink } from 'vue-router'

type Feature = {
  title: string
  description: string
}

type FeatureColumn = {
  title: string
  tagline: string
  focus: string
  items: Feature[]
}

type WorkflowStep = {
  title: string
  description: string
  result: string
}

type Stat = {
  label: string
  value: string
}

type CtaHighlight = {
  title: string
  detail: string
}

const heroBenefits = [
  'Registro 100% gratis para locales y clientes',
  'Agenda inteligente y centralizada',
  'Recordatorios automáticos al cliente',
]

const stats: Stat[] = [
  { label: 'Locales activos', value: '180+' },
  { label: 'Turnos confirmados/mes', value: '32K' },
  { label: 'Cancelaciones evitadas', value: '−38%' },
]

const featureColumns: FeatureColumn[] = [
  {
    title: 'Para locales',
    tagline: 'Control total del negocio',
    focus: 'Operaciones',
    items: [
      {
        title: 'Agenda compartida',
        description: 'Sincronizá barbers, estilistas y cabinas en una sola vista con permisos personalizados.',
      },
      {
        title: 'Cobranzas claras',
        description: 'Registrá anticipos y pagos desde la misma app para conciliar caja al cierre del día.',
      },
      {
        title: 'Métricas inmediatas',
        description: 'Detectá horas ociosas, servicios estrella y equipos con mayor retención.',
      },
    ],
  },
  {
    title: 'Para clientes',
    tagline: 'Experiencia sin fricción',
    focus: 'Comunidad',
    items: [
      {
        title: 'Booking en 2 taps',
        description: 'Disponibilidad real, combos favoritos y medios de pago guardados.',
      },
      {
        title: 'Seguimiento humanizado',
        description: 'Recordatorios por WhatsApp o push con tono del local y opción de feedback instantáneo.',
      },
      {
        title: 'Programa de fidelidad',
        description: 'Sellos automáticos y upgrades cuando completan cierta cantidad de turnos.',
      },
    ],
  },
]

const workflow: WorkflowStep[] = [
  {
    title: 'Configurar el local',
    description: 'Cargamos servicios, staff y horarios diferenciados para cada silla en menos de 30 minutos.',
    result: 'Agenda publicada 24/7',
  },
  {
    title: 'Comunicar a la comunidad',
    description: 'Enviá el link inteligente para que clientes reserven, paguen y reprogramen sin llamar.',
    result: 'Turnos confirmados automáticamente',
  },
  {
    title: 'Optimizar decisiones',
    description: 'Dashboards inmediatos para saber qué promos activar y cuándo sumar nuevo talento.',
    result: 'Operación rentable y predecible',
  },
]

const ctaHighlights: CtaHighlight[] = [
  {
    title: 'Registro gratuito',
    detail: 'Crea tu cuenta en minutos, sin tarjeta ni contrato mínimo.',
  },
  {
    title: 'Soporte en español',
    detail: 'Acompañamiento por chat y correo para que nadie se quede trabado.',
  },
  {
    title: 'Actualizaciones continuas',
    detail: 'Lanzamos mejoras frecuentes teniendo en cuenta el feedback de la comunidad.',
  },
]

const sampleServices = [
  { name: 'Corte', time: '10:15', location: 'Sucursal Palermo' },
  { name: 'Color + Brushing', time: '11:45', location: 'Sucursal Centro' },
  { name: 'Hidratación', time: '13:15', location: 'Sucursal Recoleta' },
]
import { ref, onMounted } from 'vue'
import PasswordReset from '../components/PasswordReset.vue'
import PreRegisterModal from '../components/PreRegisterModal.vue'

const activeTab = ref<'main' | 'reset'>('main')
const isPreRegisterOpen = ref(false)
const showPreRegisterNotice = ref(false)
const tokenInput = ref('')
const tokenExpiresInput = ref('')
const sampleToken = 'demo-reset-token-abc123'
const sampleExpires = new Date(Date.now() + 1000 * 60 * 30).toISOString()

function handleResetSuccess() {
  alert('Contraseña reseteada (simulado)')
}

function openPreRegister() {
  isPreRegisterOpen.value = true
}

function handlePreRegisterSuccess() {
  showPreRegisterNotice.value = true
}

onMounted(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('passwordResetToken') || params.get('token')
    const expires = params.get('passwordResetTokenExpires') || params.get('expires')
    if (token) {
      tokenInput.value = token
      if (expires) tokenExpiresInput.value = expires
      activeTab.value = 'reset'
    }
})

</script>

<template>
  <div class="bg-brand-night text-brand-ink">
    <PreRegisterModal
      :open="isPreRegisterOpen"
      @close="isPreRegisterOpen = false"
      @success="handlePreRegisterSuccess"
    />

    <div v-if="showPreRegisterNotice" class="mx-auto max-w-6xl px-4 pt-4 lg:px-0">
      <div class="flex items-start justify-between gap-4 rounded-3xl border border-brand-neon/20 bg-brand-muted/90 p-4 shadow-card">
        <p class="text-sm text-brand-ink/70">
          Pre-registro enviado. Esto puede demorar hasta 24 hs en llegarte por correo (o confirmación).
        </p>
        <button
          type="button"
          class="rounded-full border border-brand-neon/30 bg-brand-card px-3 py-1 text-xs font-semibold text-brand-ink/70 transition hover:text-brand-neon"
          @click="showPreRegisterNotice = false"
        >
          Cerrar
        </button>
      </div>
    </div>
    <header class="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 lg:px-0">
      <div class="flex">
        <img src="/white_logotype.webp" alt="Logo Sabturno" class="h-14">
      </div>
      <nav class="hidden items-center gap-6 text-sm font-medium text-brand-ink/70 md:flex">
        <a href="#features" class="hover:text-brand-neon transition">Funciones</a>
        <a href="#workflow" class="hover:text-brand-neon transition">Cómo funciona</a>
        <a href="#contact" class="hover:text-brand-neon transition">Contacto</a>
        <RouterLink to="/terminos-y-condiciones" class="text-xs underline underline-offset-4 hover:text-brand-neon transition">Términos y condiciones</RouterLink>
        <RouterLink to="/politica-de-privacidad" class="text-xs underline underline-offset-4 hover:text-brand-neon transition">Política de privacidad</RouterLink>
      </nav>
      <button 
        class="hidden rounded-full bg-brand-neon px-5 py-2 text-sm font-semibold text-brand-night shadow-card transition hover:bg-brand-neon/80 md:block"
        @click="openPreRegister"
      >
        Descargar Ahora
      </button>
    </header>


      <main class="mx-auto max-w-6xl space-y-24 p-4 pb-24 lg:px-0">
        <div v-if="activeTab==='reset'" class="p-4">
          <PasswordReset :passwordResetToken="tokenInput || sampleToken" :passwordResetTokenExpires="tokenExpiresInput || sampleExpires" @success="handleResetSuccess" />
        </div>
        <template v-else>
          <section  id="hero" class="relative mt-4 overflow-hidden rounded-fluid border border-brand-neon/20 bg-brand-card/80 p-4 shadow-card">
            <div class="absolute inset-0 opacity-40 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(0,240,104,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,104,0.08)_1px,transparent_1px)]"></div>
            <div class="relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
              <div class="space-y-8 p-4">
                <span class="inline-flex items-center gap-2 rounded-full border border-brand-neon/40 bg-brand-neon/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-neon">Locales + Clientes en un mismo pulso</span>
                <div class="space-y-4">
                  <h1 class="text-4xl font-semibold text-brand-ink sm:text-5xl">
                    La forma más simple de gestionar tus turnos, totalmente gratis
                  </h1>
                  <p class="text-lg text-brand-ink/70">
                    Sabturno conecta barberías, peluquerías y centros de estética con su comunidad. Cualquier persona puede
                    registrarse gratis, reservar y gestionar turnos sin llamadas ni chats eternos.
                  </p>
                </div>
                <div class="flex flex-wrap gap-3">
                  <button 
                  class="rounded-full bg-brand-neon px-6 py-3 text-sm font-semibold text-brand-night shadow-card transition hover:-translate-y-0.5 hover:bg-brand-neon/80"
                  @click="openPreRegister"
                >
                    Descargar Ahora
                  </button>
                  <button class="rounded-full border border-brand-neon/40 bg-brand-muted/70 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:-translate-y-0.5 hover:border-brand-neon">
                    Ver cómo funciona
                  </button>
                </div>
                <ul class="flex flex-wrap gap-3">
                  <li v-for="benefit in heroBenefits" :key="benefit" class="rounded-full border border-brand-neon/40 bg-brand-muted/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/90">
                    {{ benefit }}
                  </li>
                </ul>
              </div>
              <div class="relative overflow-hidden rounded-fluid border border-brand-neon/20 bg-gradient-to-br from-brand-muted/95 via-brand-card/90 to-brand-muted/90 px-6 py-8 shadow-glow">
                <div class="mb-6 flex items-center justify-between text-sm text-brand-ink/60">
                  <span>Agenda Hoy</span>
                  <span>Sabturno OS</span>
                </div>
                <div class="space-y-4">
                  <div v-for="service in sampleServices" :key="service.name" class="rounded-2xl border border-brand-neon/20 bg-brand-muted/90 px-4 py-3 shadow-card">
                    <div class="flex items-center justify-between text-sm">
                      <p class="font-semibold text-brand-ink">{{ service.name }}</p>
                      <span class="text-brand-ink/60">{{ service.time }} hs</span>
                    </div>
                    <p class="text-xs text-brand-ink/60">Cliente confirmado · {{ service.location }}</p>
                  </div>
                  <div class="mt-8 grid gap-4 sm:grid-cols-3">
                    <div v-for="metric in stats" :key="metric.label" class="rounded-2xl border border-brand-neon/20 bg-brand-muted/90 px-4 py-3 text-center">
                      <p class="text-2xl font-semibold text-brand-neon">{{ metric.value }}</p>
                      <p class="text-xs text-brand-ink/60">{{ metric.label }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" class="space-y-12">
            <div class="mx-auto max-w-3xl text-center">
              <p class="inline-flex items-center gap-2 rounded-full border border-brand-neon/40 bg-brand-neon/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-neon">Diseñado para ambos lados del mostrador</p>
              <h2 class="mt-6 text-4xl font-semibold text-brand-ink">Una sola plataforma para coordinar servicios, comunidad y negocio</h2>
              <p class="mt-4 text-base text-brand-ink/70">
                Estandarizá procesos sin perder el toque humano: workflows claros para managers y una app amable para tus clientes fieles.
              </p>
            </div>
            <div class="grid gap-6 md:grid-cols-2">
              <article v-for="column in featureColumns" :key="column.title" class="h-full rounded-fluid border border-brand-neon/20 bg-brand-card/80 p-4 shadow-card">
                <header class="mb-6 flex items-center justify-between">
                  <div>
                    <p class="text-sm uppercase tracking-wide text-brand-ink/60">{{ column.focus }}</p>
                    <h3 class="text-2xl font-semibold text-brand-ink">{{ column.title }}</h3>
                  </div>
                  <span class="rounded-full border border-brand-neon/30 bg-brand-neon/10 px-3 py-1 text-xs font-semibold text-brand-neon">
                    {{ column.tagline }}
                  </span>
                </header>
                <ul class="space-y-5">
                  <li v-for="item in column.items" :key="item.title" class="rounded-2xl border border-brand-neon/20 bg-brand-muted/80 px-4 py-4">
                    <h4 class="text-lg font-semibold text-brand-ink">{{ item.title }}</h4>
                    <p class="mt-1 text-sm text-brand-ink/70">{{ item.description }}</p>
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section id="workflow" class="space-y-10 rounded-fluid border border-brand-neon/20 bg-brand-card/80 p-4 shadow-card">
            <div class="space-y-3">
              <p class="inline-flex items-center gap-2 rounded-full border border-brand-neon/40 bg-brand-neon/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-neon">Implementación express</p>
              <div class="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 class="text-3xl font-semibold text-brand-ink">Tu operación lista en tres hitos claros</h2>
                  <p class="text-base text-brand-ink/70">Sin hojas de cálculo ni llamadas eternas: todo vive en Sabturno.</p>
                </div>
                <div class="text-sm text-brand-ink/60">Tiempo promedio de puesta en marcha: 5 días</div>
              </div>
            </div>
            <ol class="grid gap-6 md:grid-cols-3">
              <li v-for="(step, index) in workflow" :key="step.title" class="rounded-3xl border border-brand-neon/20 bg-brand-muted/80 p-5">
                <span class="text-xs font-semibold uppercase tracking-[0.3em] text-brand-ink/40">0{{ index + 1 }}</span>
                <h3 class="mt-4 text-xl font-semibold text-brand-ink">{{ step.title }}</h3>
                <p class="mt-2 text-sm text-brand-ink/70">{{ step.description }}</p>
                <p class="mt-4 text-sm font-semibold text-brand-neon">{{ step.result }}</p>
              </li>
            </ol>
          </section>

          <section id="contact" class="rounded-fluid border border-brand-neon/20 bg-brand-card/80 p-4 shadow-card">
            <div class="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
              <div class="space-y-4 p-4">
                <p class="inline-flex items-center gap-2 rounded-full border border-brand-neon/40 bg-brand-neon/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-neon">Empieza hoy mismo</p>
                <h2 class="text-3xl font-semibold text-brand-ink">Crea tu cuenta gratuita en Sabturno</h2>
                <p class="text-base text-brand-ink/70">
                  Entendemos las horas pico, las cancelaciones de último minuto y la necesidad de mantener motivado al equipo. Registrate sin costo y
                  empezá a ordenar tu día a día desde la app.
                </p>
                <div class="grid gap-4 sm:grid-cols-3">
                  <div v-for="stat in stats" :key="stat.label" class="rounded-2xl border border-brand-neon/20 bg-brand-muted/90 px-4 py-3 text-center">
                    <p class="text-xl font-semibold text-brand-neon">{{ stat.value }}</p>
                    <p class="text-xs text-brand-ink/60">{{ stat.label }}</p>
                  </div>
                </div>
              </div>
              <div class="rounded-3xl border border-brand-neon/20 bg-brand-muted/90 p-6 shadow-card">
                <div class="space-y-5">
                  <div class="rounded-2xl border border-brand-neon/30 bg-brand-neon/10 p-4">
                    <p class="text-sm font-semibold text-brand-neon">Disponible</p>
                    <p class="text-2xl font-semibold text-brand-ink">Crea tu cuenta</p>
                    <p class="text-sm text-brand-ink/70">Registrate gratis y empezá a usar Sabturno en minutos.</p>
                  </div>
                  <ul class="space-y-4">
                    <li v-for="highlight in ctaHighlights" :key="highlight.title" class="rounded-2xl border border-brand-neon/20 bg-brand-card px-4 py-3">
                      <p class="text-sm font-semibold text-brand-ink">{{ highlight.title }}</p>
                      <p class="text-sm text-brand-ink/60">{{ highlight.detail }}</p>
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="w-full rounded-full bg-brand-neon py-3 text-sm font-semibold text-brand-night transition hover:bg-brand-neon/80"
                    @click="openPreRegister"
                  >
                    Crear cuenta gratis
                  </button>
                  <p class="text-center text-xs text-brand-ink/60">
                    Al continuar aceptás nuestros
                    <a href="/terminos-y-condiciones.html" class="underline underline-offset-2 hover:text-brand-neon transition">Términos y Condiciones</a>.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </template>
      </main>
    <footer class="border-t border-brand-neon/20 bg-brand-card/80">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-brand-ink/60 sm:flex-row lg:px-0">
        <p>© {{ new Date().getFullYear() }} Sabturno. Todos los derechos reservados.</p>
        <div class="flex flex-wrap items-center gap-4">
          <RouterLink to="/terminos-y-condiciones" class="underline underline-offset-2 hover:text-brand-neon transition">Términos y Condiciones</RouterLink>
          <RouterLink to="/politica-de-privacidad" class="underline underline-offset-2 hover:text-brand-neon transition">Política de Privacidad</RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>
