<script setup lang="ts">
import { ref } from 'vue'
import type { PricingPlan } from './types'

defineProps<{
  plans: PricingPlan[]
}>()

const billingCycle = ref<'monthly' | 'yearly'>('monthly')

function formatPrice(price: number | null): string {
  if (price === null) return 'Gratis'
  return `$${price.toLocaleString('es-AR')}`
}

function getDisplayPrice(plan: PricingPlan): string {
  if (billingCycle.value === 'monthly') {
    return formatPrice(plan.monthlyPrice)
  }
  return formatPrice(plan.yearlyPrice)
}

function getSuffix(plan: PricingPlan): string {
  if (plan.monthlyPrice === null) return ''
  return billingCycle.value === 'monthly' ? '/mes' : '/año'
}

function getSavings(plan: PricingPlan): string | null {
  if (plan.monthlyPrice === null || plan.yearlyPrice === null) return null
  if (billingCycle.value !== 'yearly') return null
  const monthlyCost = plan.monthlyPrice * 12
  const saved = monthlyCost - plan.yearlyPrice
  return `Ahorrás $${saved.toLocaleString('es-AR')} por año`
}
</script>

<template>
  <section id="precios" class="mt-16 lg:mt-24">
    <!-- Header -->
    <div class="text-center">
      <span class="badge">Precios</span>
      <h2 class="mt-5 text-3xl font-semibold tracking-tight text-brand-ink lg:text-5xl">
        Planes simples, sin sorpresas
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-base leading-7 text-brand-ink/70">
        Elegí el plan que mejor se adapte a tu negocio. Todos incluyen reservas online e
        integraciones de pago.
      </p>
    </div>

    <!-- Billing toggle -->
    <div class="mt-10 flex items-center justify-center gap-3">
      <span
        class="text-sm font-medium transition"
        :class="billingCycle === 'monthly' ? 'text-brand-ink' : 'text-brand-ink/50'"
      >
        Mensual
      </span>
      <button
        type="button"
        role="switch"
        :aria-checked="billingCycle === 'yearly'"
        aria-label="Cambiar ciclo de facturación"
        class="relative h-8 w-14 rounded-full border border-white/10 bg-brand-muted transition-colors"
        :class="billingCycle === 'yearly' ? 'bg-brand-neon/20' : ''"
        @click="billingCycle = billingCycle === 'monthly' ? 'yearly' : 'monthly'"
      >
        <span
          class="absolute top-1 left-1 h-6 w-6 rounded-full bg-brand-neon shadow-neon transition-transform duration-200"
          :class="billingCycle === 'yearly' ? 'translate-x-6' : ''"
        ></span>
      </button>
      <span
        class="text-sm font-medium transition"
        :class="billingCycle === 'yearly' ? 'text-brand-ink' : 'text-brand-ink/50'"
      >
        Anual
      </span>
      <span
        class="badge ml-1 text-[0.65rem]"
        :class="billingCycle === 'yearly' ? 'opacity-100' : 'opacity-60'"
      >
        2 meses gratis
      </span>
    </div>

    <!-- Plans grid -->
    <div class="mt-10 grid gap-5 lg:grid-cols-3">
      <article
        v-for="plan in plans"
        :key="plan.id"
        class="glass-panel card-hover relative flex flex-col overflow-hidden rounded-panel border p-6 shadow-card transition-all duration-200 lg:p-7"
        :class="
          plan.recommended
            ? 'border-brand-neon/40 shadow-neon/10'
            : 'border-white/10'
        "
      >
        <!-- Recommended badge -->
        <div
          v-if="plan.recommended"
          class="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-brand-neon/0 via-brand-neon to-brand-neon/0"
        ></div>
        <span
          v-if="plan.recommended"
          class="badge mb-4 self-start text-[0.65rem]"
        >
          Recomendado
        </span>
        <span v-else class="mb-4 h-6"></span>

        <!-- Plan name & description -->
        <h3 class="text-xl font-semibold text-brand-ink">{{ plan.name }}</h3>
        <p class="mt-1 text-sm text-brand-ink/60">{{ plan.description }}</p>

        <!-- Price -->
        <div class="mt-5">
          <span class="text-4xl font-bold tracking-tight text-brand-ink font-display">
            {{ getDisplayPrice(plan) }}
          </span>
          <span
            v-if="getSuffix(plan)"
            class="ml-1 text-sm text-brand-ink/50"
          >
            {{ getSuffix(plan) }}
          </span>
        </div>
        <p
          v-if="getSavings(plan)"
          class="mt-1 text-xs font-medium text-brand-neon"
        >
          {{ getSavings(plan) }}
        </p>

        <!-- Features list -->
        <ul class="mt-6 flex-1 space-y-3">
          <li
            v-for="feature in plan.features"
            :key="feature.label"
            class="flex items-start gap-3 text-sm"
          >
            <span
              class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
              :class="
                feature.plans[plan.id]
                  ? 'bg-brand-neon/15 text-brand-neon'
                  : 'bg-white/5 text-brand-ink/30'
              "
            >
              <svg
                v-if="feature.plans[plan.id]"
                class="h-3 w-3"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2 6L5 9L10 3"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg v-else class="h-3 w-3" viewBox="0 0 12 12" fill="none">
                <path
                  d="M3 3L9 9M9 3L3 9"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <span
              :class="
                feature.plans[plan.id]
                  ? 'text-brand-ink/80'
                  : 'text-brand-ink/40 line-through'
              "
            >
              {{ feature.label }}
              <span
                v-if="typeof feature.plans[plan.id] === 'string'"
                class="ml-1 text-xs text-brand-neon/80"
              >
                {{ feature.plans[plan.id] }}
              </span>
            </span>
          </li>
        </ul>

        <!-- CTA -->
        <a
          href="https://appweb.sabturno.com/register"
          rel="noopener noreferrer"
          class="mt-8 block w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-neon/50 focus-visible:outline-none"
          :class="
            plan.recommended
              ? 'bg-brand-neon text-brand-night hover:bg-brand-neon-hover'
              : 'border border-brand-neon/20 bg-brand-card text-brand-ink hover:border-brand-neon'
          "
        >
          {{ plan.ctaText }}
        </a>
      </article>
    </div>
  </section>
</template>
