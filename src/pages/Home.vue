<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  BoltIcon,
  CalendarDaysIcon,
  CreditCardIcon,
} from '@heroicons/vue/24/outline'
import { trackEvent } from '../lib/analytics'
import PasswordReset from '../components/PasswordReset.vue'
import PreRegisterModal from '../components/PreRegisterModal.vue'
import HomeAudienceSection from '../components/home/HomeAudienceSection.vue'
import HomeCtaSection from '../components/home/HomeCtaSection.vue'
import HomeFaqSection from '../components/home/HomeFaqSection.vue'
import HomeFooter from '../components/home/HomeFooter.vue'
import HomeHeader from '../components/home/HomeHeader.vue'
import HomeHeroSection from '../components/home/HomeHeroSection.vue'
import HomeLaunchSection from '../components/home/HomeLaunchSection.vue'
import HomePricingSection from '../components/home/HomePricingSection.vue'
import HomeTestimonialsSection from '../components/home/HomeTestimonialsSection.vue'
import HomeTickerBand from '../components/home/HomeTickerBand.vue'
import HomeWebAppSection from '../components/home/HomeWebAppSection.vue'
import PreRegisterNotice from '../components/home/PreRegisterNotice.vue'
import type {
  AudienceCard,
  CtaHighlight,
  FaqItem,
  FlowStep,
  HeroMetric,
  IncludedFeature,
  NavItem,
  ServiceSnapshot,
  Testimonial,
  WebMoment,
} from '../components/home/types'

const navItems: NavItem[] = [
  { label: 'Propuesta', href: '#app-web' },
  { label: 'App Web', href: '#app-web' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Implementación', href: '#launch' },
  { label: 'Contacto', href: '#contact' },
]

const includedFeatures: IncludedFeature[] = [
  {
    title: 'Reservas online ilimitadas',
    description: 'Tus clientes reservan 24/7 desde el navegador sin límite mensual de turnos.',
  },
  {
    title: 'Integración MercadoPago',
    description: 'Cobrá señas o turnos completos de forma automática al momento de reservar.',
  },
  {
    title: 'Integración Talo',
    description: 'Recibí transferencias directas conciliadas automáticamente con tu agenda.',
  },
  {
    title: 'Pagos en efectivo ilimitados',
    description: 'Permití abonar en el local sin topes mensuales ni restricciones de volumen.',
  },
  {
    title: 'Tarjeta de fidelización',
    description: 'Premiá las visitas frecuentes de tus clientes con beneficios automáticos.',
  },
]

const heroMetrics: HeroMetric[] = [
  {
    value: '100% gratis',
    label: 'Gratis para siempre, sin costos ocultos',
    detail:
      'Todas las funciones están incluidas desde el primer día. Sin planes pagos ni sorpresas para tu local ni para tus clientes.',
  },
  {
    value: '+61%',
    label: 'Más turnos pagos',
    detail:
      'Frente al modelo WhatsApp sin cobro previo, la app web convierte reservas en pagos confirmados antes del turno.',
  },
  {
    value: '1 sola agenda',
    label: 'Todo sincronizado',
    detail: 'Móvil y web comparten disponibilidad en tiempo real.',
  },
]

const metricIcons = [CalendarDaysIcon, CreditCardIcon, BoltIcon]

const heroHighlights = [
  'Ideal para barberías, peluquerías y centros de estética',
  'Clientes reservando sin llamadas ni WhatsApps infinitos',
  'Diseño pensado para convertir visitas en turnos confirmados',
]

const audiences: AudienceCard[] = [
  {
    eyebrow: 'Para el local',
    title: 'Control visual del negocio, sin procesos manuales.',
    summary:
      'Sabturno ordena la agenda, baja errores y te da una presencia digital más fuerte frente al cliente.',
    bullets: [
      'Agenda por profesional, servicio o sucursal',
      'Confirmaciones y reprogramaciones sin intervención manual',
      'Un link listo para compartir en Instagram, Google o WhatsApp',
    ],
  },
  {
    eyebrow: 'Para tus clientes',
    title: 'Reservar se siente rápido, claro y confiable.',
    summary:
      'La app web les permite resolver todo en pocos pasos, sin instalar nada y sin perder tiempo.',
    bullets: [
      'Disponibilidad real antes de reservar',
      'Flujo simple para elegir servicio, horario y profesional',
      'Experiencia mobile-first pensada para volver a reservar',
    ],
  },
]

const webMoments: WebMoment[] = [
  {
    label: 'Descubrimiento',
    title: 'Te encuentran y reservan',
    description:
      'El usuario ve tu perfil o promoción y entra directo a la app web sin pasos extra.',
    result: 'Más conversiones desde redes y campañas.',
  },
  {
    label: 'Reserva',
    title: 'Elige lo que tiene disponible',
    description:
      'La disponibilidad está sincronizada con tu operación real para evitar confusión o saturación.',
    result: 'Menos idas y vueltas y menos errores.',
  },
  {
    label: 'Pagos',
    title: 'Reservas que si se concretan',
    description:
      'Con la app web es más fácil que el cliente complete su reserva y pague por adelantado para asegurar su turno',
    result: 'Más turnos confirmados y menos ausencias',
  },
]

const launchSteps: FlowStep[] = [
  {
    step: '01',
    title: 'Armamos tu operación',
    description:
      'Cargamos servicios, horarios, profesionales y reglas para que la agenda quede lista para publicar.',
  },
  {
    step: '02',
    title: 'Activamos el canal web',
    description:
      'Compartís un link directo y tus clientes ya pueden reservar desde el navegador en cualquier momento.',
  },
  {
    step: '03',
    title: 'Escalás con mejor conversión',
    description:
      'Con menos fricción en la reserva, tus campañas y recomendaciones empiezan a rendir más.',
  },
]

const testimonials: Testimonial[] = [
  {
    quote:
      'La diferencia fue inmediata: dejamos de perder reservas por gente que no quería instalar nada.',
    author: 'La Barbería',
    role: 'Testeo cerrado Sabturno',
  },
  {
    quote:
      'La experiencia se siente mucho más premium. El cliente entiende rápido qué hacer y termina la reserva.',
    author: 'Peluquería boutique',
    role: 'Early adopter',
  },
  {
    quote:
      'Para el staff también fue mejor: una sola agenda y menos mensajes sueltos para coordinar horarios.',
    author: 'Centro de estética',
    role: 'Operación centralizada',
  },
]

const faqItems: FaqItem[] = [
  {
    question: '¿La app web reemplaza la app móvil?',
    answer:
      'No. La complementa. La app web abre un canal de entrada más directo para clientes, mientras toda la operación sigue sincronizada.',
  },
  {
    question: '¿Sirve aunque hoy tome turnos por WhatsApp?',
    answer:
      'Sí. Justamente ahí es donde más se nota el cambio: el cliente pasa de preguntar manualmente a reservar con autonomía.',
  },
  {
    question: '¿Puedo compartirla desde Instagram o Google?',
    answer:
      'Sí. El objetivo es que tu link de reserva viva donde hoy ya te descubren tus clientes.',
  },
  {
    question: '¿Cómo empiezo a usar Sabturno?',
    answer:
      'Sí. Dejanos tu email y te contactamos para activar tu cuenta y acompañarte en la configuración inicial.',
  },
]

const ctaHighlights: CtaHighlight[] = [
  {
    title: 'Onboarding personalizado',
    detail:
      'Te ayudamos a dejar lista la experiencia para que el cambio se note desde el primer día.',
  },
  {
    title: 'Foco en conversión real',
    detail: 'No es solo “tener un sistema”: es lograr que más visitas terminen reservando.',
  },
  {
    title: 'Preparado para crecer',
    detail: 'Sabturno ya nace pensando en multi-canal, equipo y operación ordenada.',
  },
]

const serviceSnapshots: ServiceSnapshot[] = [
  { service: 'Fade + barba', time: '10:15', client: 'Martín confirmó desde la app web' },
  { service: 'Color + brushing', time: '12:00', client: 'Julieta reprogramó sin llamar' },
  { service: 'Perfilado premium', time: '14:30', client: 'Camila reservó desde Instagram' },
]

const activeTab = ref<'main' | 'reset'>('main')
const isPreRegisterOpen = ref(false)
const showPreRegisterNotice = ref(false)
const mobileMenuOpen = ref(false)
const tokenInput = ref('')
const tokenExpiresInput = ref('')
const sampleToken = 'demo-reset-token-abc123'
const sampleExpires = new Date(Date.now() + 1000 * 60 * 30).toISOString()

function handleResetSuccess() {
  alert('Contraseña reseteada (simulado)')
}

function openPreRegister(location?: string) {
  mobileMenuOpen.value = false
  isPreRegisterOpen.value = true
  trackEvent('pre_register_open', location ? { location } : undefined)
}

function handlePreRegisterSuccess() {
  showPreRegisterNotice.value = true
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
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
  <div class="relative isolate overflow-x-clip bg-brand-night text-brand-ink">
    <div
      class="pointer-events-none absolute -left-40 -top-24 -z-20 h-[32rem] w-[32rem] rounded-full opacity-35 blur-[80px] [background:radial-gradient(circle,rgba(0,240,104,0.85)_0%,rgba(0,240,104,0)_70%)]"
    ></div>
    <div
      class="pointer-events-none absolute -right-40 top-72 -z-20 h-[32rem] w-[32rem] rounded-full opacity-35 blur-[80px] [background:radial-gradient(circle,rgba(67,206,162,0.42)_0%,rgba(67,206,162,0)_72%)]"
    ></div>
    <div
      class="pointer-events-none absolute inset-0 -z-30 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.8),transparent_85%)]"
    ></div>

    <PreRegisterModal
      :open="isPreRegisterOpen"
      @close="isPreRegisterOpen = false"
      @success="handlePreRegisterSuccess"
    />

    <PreRegisterNotice v-if="showPreRegisterNotice" @close="showPreRegisterNotice = false" />

    <HomeHeader
      :nav-items="navItems"
      :mobile-menu-open="mobileMenuOpen"
      @open-pre-register="openPreRegister"
      @close-mobile-menu="closeMobileMenu"
      @toggle-mobile-menu="mobileMenuOpen = !mobileMenuOpen"
    />

    <div v-if="activeTab === 'reset'" class="mx-auto max-w-3xl px-4 py-12">
      <PasswordReset
        :password-reset-token="tokenInput || sampleToken"
        :password-reset-token-expires="tokenExpiresInput || sampleExpires"
        @success="handleResetSuccess"
      />
    </div>

    <template v-else>
      <HomeHeroSection
        :hero-highlights="heroHighlights"
        :hero-metrics="heroMetrics"
        :service-snapshots="serviceSnapshots"
        @open-pre-register="openPreRegister"
      />

      <!-- Infinite Fluid Ticker Band across 100vw immediately below hero -->
      <HomeTickerBand />

      <!-- Full-Width Fluid Main Container -->
      <main class="flex w-full flex-col overflow-hidden pb-24">
        <!-- Mobile-Only Metrics Stream -->
        <div class="mx-auto w-full max-w-7xl px-4 pt-6 pb-2 sm:hidden">
          <div class="grid grid-cols-1 gap-3">
            <article
              v-for="(metric, index) in heroMetrics"
              :key="metric.label"
              class="rounded-2xl border border-white/15 bg-black/75 p-4 shadow-lg backdrop-blur-md"
            >
              <div class="flex items-center gap-2.5">
                <component
                  :is="metricIcons[index % metricIcons.length]"
                  class="h-5 w-5 text-brand-neon"
                  aria-hidden="true"
                />
                <p class="text-xl font-bold text-brand-neon">{{ metric.value }}</p>
              </div>
              <p class="mt-1 text-xs font-semibold text-brand-ink">{{ metric.label }}</p>
              <p class="mt-0.5 text-xs text-brand-ink/70">{{ metric.detail }}</p>
            </article>
          </div>
        </div>

        <HomeWebAppSection :web-moments="webMoments" />
        <HomeAudienceSection :audiences="audiences" />
        <HomeLaunchSection :launch-steps="launchSteps" />
        <HomePricingSection :features="includedFeatures" />
        <HomeTestimonialsSection :testimonials="testimonials" />
        <HomeFaqSection :faq-items="faqItems" />
        <HomeCtaSection :cta-highlights="ctaHighlights" @open-pre-register="openPreRegister" />
      </main>
    </template>

    <HomeFooter />
  </div>
</template>
