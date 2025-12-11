<script setup lang="ts">
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
  'Agenda inteligente y centralizada',
  'Recordatorios automáticos al cliente',
  'Datos accionables para cada servicio',
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
        description: 'Sincronizá barberxs, estilistas y cabinas en una sola vista con permisos personalizados.',
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
    title: 'Onboarding acompañado',
    detail: 'Un especialista Sabturno migra tu agenda y entrena al equipo en vivo.',
  },
  {
    title: 'Soporte en español',
    detail: 'Slack y WhatsApp para dueñxs y managers sin bots impersonales.',
  },
  {
    title: 'Actualizaciones continuas',
    detail: 'Lanzamos mejoras cada sprint con roadmap abierto a tu feedback.',
  },
]
</script>

<template>
  <div class="bg-brand-sand text-brand-ink">
    <header class="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 lg:px-0">
      <div class="flex items-center gap-3">
        <div class="h-11 w-11 rounded-2xl bg-brand-night/90 text-center text-lg font-semibold text-white shadow-glow">
          ST
        </div>
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-brand-night/70">sabturno</p>
          <p class="text-sm text-brand-night/60">turnos sin fricción</p>
        </div>
      </div>
      <nav class="hidden gap-6 text-sm font-medium text-brand-night/70 md:flex">
        <a href="#features">Funciones</a>
        <a href="#workflow">Cómo funciona</a>
        <a href="#contact">Contacto</a>
      </nav>
      <button class="hidden rounded-full bg-brand-night px-5 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-brand-coral md:block">
        Solicitar demo
      </button>
    </header>

    <main class="mx-auto max-w-6xl space-y-24 px-4 pb-24 lg:px-0">
      <section id="hero" class="glass-panel relative mt-4 overflow-hidden">
        <div class="absolute inset-0 bg-grid-soft opacity-40"></div>
        <div class="relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div class="space-y-8">
            <span class="badge">Locales + Clientes en un mismo pulso</span>
            <div class="space-y-4">
              <h1 class="text-4xl font-semibold text-brand-night sm:text-5xl">
                Turnos y operaciones para salones que quieren crecer sin caos
              </h1>
              <p class="text-lg text-brand-night/70">
                Sabturno conecta barberías, peluquerías y centros de estética con su comunidad. Automatizá la agenda,
                alineá al equipo y sorprende con experiencias memorables.
              </p>
            </div>
            <div class="flex flex-wrap gap-3">
              <button class="rounded-full bg-brand-coral px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-night">
                Agendar llamada
              </button>
              <button class="rounded-full border border-brand-night/15 bg-white/70 px-6 py-3 text-sm font-semibold text-brand-night transition hover:-translate-y-0.5">
                Ver caso de uso
              </button>
            </div>
            <ul class="flex flex-wrap gap-3">
              <li v-for="benefit in heroBenefits" :key="benefit" class="stat-chip">
                {{ benefit }}
              </li>
            </ul>
          </div>
          <div class="hero-card">
            <div class="mb-6 flex items-center justify-between text-sm text-brand-night/60">
              <span>Agenda Hoy</span>
              <span>Sabturno OS</span>
            </div>
            <div class="space-y-4">
              <div v-for="slot in 3" :key="slot" class="rounded-2xl border border-brand-night/10 bg-white/90 px-4 py-3 shadow-card">
                <div class="flex items-center justify-between text-sm">
                  <p class="font-semibold text-brand-night">Color + Brushing</p>
                  <span class="text-brand-night/60">{{ 10 + slot }}:{{ slot % 2 ? '15' : '45' }} hs</span>
                </div>
                <p class="text-xs text-brand-night/60">Cliente confirmado · Sucursal Palermo</p>
              </div>
              <div class="mt-8 grid gap-4 sm:grid-cols-3">
                <div v-for="metric in stats" :key="metric.label" class="rounded-2xl border border-brand-night/10 bg-white/90 px-4 py-3 text-center">
                  <p class="text-2xl font-semibold text-brand-night">{{ metric.value }}</p>
                  <p class="text-xs text-brand-night/60">{{ metric.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="space-y-12">
        <div class="mx-auto max-w-3xl text-center">
          <p class="badge">Diseñado para ambos lados del mostrador</p>
          <h2 class="mt-6 text-4xl font-semibold">Una sola plataforma para coordinar servicios, comunidad y negocio</h2>
          <p class="mt-4 text-base text-brand-night/70">
            Estandarizá procesos sin perder el toque humano: workflows claros para managers y una app amable para tus clientes fieles.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <article v-for="column in featureColumns" :key="column.title" class="glass-panel h-full">
            <header class="mb-6 flex items-center justify-between">
              <div>
                <p class="text-sm uppercase tracking-wide text-brand-night/60">{{ column.focus }}</p>
                <h3 class="text-2xl font-semibold text-brand-night">{{ column.title }}</h3>
              </div>
              <span class="rounded-full border border-brand-night/10 px-3 py-1 text-xs font-semibold text-brand-night/70">
                {{ column.tagline }}
              </span>
            </header>
            <ul class="space-y-5">
              <li v-for="item in column.items" :key="item.title" class="rounded-2xl border border-brand-night/10 bg-white/80 px-4 py-4">
                <h4 class="text-lg font-semibold text-brand-night">{{ item.title }}</h4>
                <p class="mt-1 text-sm text-brand-night/70">{{ item.description }}</p>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="workflow" class="glass-panel space-y-10">
        <div class="space-y-3">
          <p class="badge">Implementación express</p>
          <div class="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 class="text-3xl font-semibold text-brand-night">Tu operación lista en tres hitos claros</h2>
              <p class="text-base text-brand-night/70">Sin hojas de cálculo ni llamadas eternas: todo vive en Sabturno.</p>
            </div>
            <div class="text-sm text-brand-night/60">Tiempo promedio de puesta en marcha: 5 días</div>
          </div>
        </div>
        <ol class="grid gap-6 md:grid-cols-3">
          <li v-for="(step, index) in workflow" :key="step.title" class="rounded-3xl border border-brand-night/10 bg-white/80 p-5">
            <span class="text-xs font-semibold uppercase tracking-[0.3em] text-brand-night/40">0{{ index + 1 }}</span>
            <h3 class="mt-4 text-xl font-semibold text-brand-night">{{ step.title }}</h3>
            <p class="mt-2 text-sm text-brand-night/70">{{ step.description }}</p>
            <p class="mt-4 text-sm font-semibold text-brand-coral">{{ step.result }}</p>
          </li>
        </ol>
      </section>

      <section id="contact" class="glass-panel">
        <div class="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div class="space-y-4">
            <p class="badge">Crezcamos juntos</p>
            <h2 class="text-3xl font-semibold text-brand-night">Agenda una demo personalizada de Sabturno</h2>
            <p class="text-base text-brand-night/70">
              Entendemos las horas pico, las cancelaciones de último minuto y la necesidad de mantener motivado al equipo. Mostranos tu operación y
              armamos una implementación a medida.
            </p>
            <div class="grid gap-4 sm:grid-cols-3">
              <div v-for="stat in stats" :key="stat.label" class="rounded-2xl border border-brand-night/10 bg-white/90 px-4 py-3 text-center">
                <p class="text-xl font-semibold text-brand-night">{{ stat.value }}</p>
                <p class="text-xs text-brand-night/60">{{ stat.label }}</p>
              </div>
            </div>
          </div>
          <div class="rounded-3xl border border-brand-night/10 bg-white/90 p-6 shadow-card">
            <div class="space-y-5">
              <div class="rounded-2xl border border-brand-night/10 bg-brand-cloud/50 p-4">
                <p class="text-sm font-semibold text-brand-night">Disponible</p>
                <p class="text-2xl font-semibold text-brand-night">Agenda Demo</p>
                <p class="text-sm text-brand-night/70">Seleccioná un horario y recibí acceso a la app piloto.</p>
              </div>
              <ul class="space-y-4">
                <li v-for="highlight in ctaHighlights" :key="highlight.title" class="rounded-2xl border border-brand-night/10 bg-white px-4 py-3">
                  <p class="text-sm font-semibold text-brand-night">{{ highlight.title }}</p>
                  <p class="text-sm text-brand-night/60">{{ highlight.detail }}</p>
                </li>
              </ul>
              <button class="w-full rounded-full bg-brand-night py-3 text-sm font-semibold text-white transition hover:bg-brand-coral">Hablar con Sabturno</button>
              <p class="text-center text-xs text-brand-night/60">Respuesta en menos de 24 hs · hola@sabturno.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
