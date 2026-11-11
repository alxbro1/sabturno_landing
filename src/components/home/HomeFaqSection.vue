<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import type { FaqItem } from './types'

const props = defineProps<{
  faqItems?: FaqItem[]
}>()

const defaultFaqs: FaqItem[] = [
  {
    question: '¿Es realmente 100% gratis o hay costos ocultos?',
    answer:
      'Es 100% gratis. Todas las funciones de SabTurno están habilitadas desde el primer día: reservas web ilimitadas, cobro de señas, multi-profesional y panel de control. No hay suscripciones mensuales ni comisiones de plataforma.',
  },
  {
    question: '¿Mis clientes tienen que descargar alguna aplicación para reservar?',
    answer:
      'No. La app web funciona directo en el navegador de cualquier teléfono o computadora (Safari, Chrome, etc.). Tocan el link en tu Instagram o escanean tu QR y reservan en 30 segundos sin ocupar espacio ni crear contraseñas.',
  },
  {
    question: '¿Cómo cobro las señas y el dinero de los turnos?',
    answer:
      'Vinculás tu cuenta de Mercado Pago o datos de transferencia. Vos elegís si querés cobrar una seña fija (ej. $3.000), un porcentaje del servicio o el total. El dinero va directo a tu cuenta de Mercado Pago en el momento.',
  },
  {
    question: '¿Puedo agregar a todos los empleados o profesionales de mi equipo?',
    answer:
      'Sí, podés crear todos los profesionales que necesites sin límite. Cada uno puede tener sus propios servicios, horarios de atención y acceder a su agenda individual desde su propio teléfono.',
  },
  {
    question: '¿Qué pasa si hoy ya tomo turnos por WhatsApp o uso cuaderno?',
    answer:
      'La transición es inmediata: ponés tu link en la respuesta automática de WhatsApp Business y en tu perfil de Instagram. El cliente que te iba a preguntar "¿Tenés lugar el viernes?" entra al link, ve los horarios libres y reserva solo.',
  },
  {
    question: '¿Puedo bloquear horarios o días no laborables fácilmente?',
    answer:
      'Sí. Con un solo tap desde tu panel podés bloquear feriados, vacaciones, licencias o pausas de almuerzo para que ningún cliente pueda agendar en esos momentos.',
  },
]

const faqs = props.faqItems && props.faqItems.length > 0 ? props.faqItems : defaultFaqs
const openIndex = ref<number | null>(0)

function toggleFaq(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="relative w-full py-16 lg:py-24">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center">
        <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-neon">
          <QuestionMarkCircleIcon class="h-4 w-4" />
          <span>Preguntas Frecuentes</span>
        </span>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Todo lo que necesitás saber.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-white/70">
          Respuestas directas para que empieces con total tranquilidad y claridad.
        </p>
      </div>

      <!-- Accordion List -->
      <div class="mt-12 space-y-3.5">
        <div
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="overflow-hidden rounded-2xl border transition-colors duration-200"
          :class="openIndex === index ? 'border-brand-neon/40 bg-white/[0.04]' : 'border-white/10 bg-white/[0.02] hover:border-white/20'"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between p-5 text-left transition sm:p-6"
            :aria-expanded="openIndex === index"
            @click="toggleFaq(index)"
          >
            <span class="text-base font-bold text-white sm:text-lg">
              {{ faq.question }}
            </span>
            <span
              class="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-neon transition-transform duration-300"
              :class="{ 'rotate-180 bg-brand-neon/15 border-brand-neon/30': openIndex === index }"
            >
              <ChevronDownIcon class="h-4 w-4" />
            </span>
          </button>

          <!-- Collapsible Content -->
          <div
            v-show="openIndex === index"
            class="px-5 pb-6 text-sm leading-relaxed text-white/70 sm:px-6 sm:text-base border-t border-white/5 pt-3"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
