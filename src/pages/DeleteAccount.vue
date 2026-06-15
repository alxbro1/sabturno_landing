<script setup lang="ts">
import { RouterLink } from 'vue-router'

const developerName = 'Alexander Sauro'
const appName = 'Sabturno'
const supportEmail = 'alesauro30@gmail.com'
</script>

<template>
  <div class="bg-brand-night text-brand-ink min-h-screen">
    <div class="mx-auto max-w-4xl px-4 py-10">
      <div class="mb-6 flex items-start justify-between gap-4">
        <div>
          <p
            class="inline-flex items-center gap-2 rounded-full border border-brand-neon/40 bg-brand-neon/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-neon"
          >
            {{ appName }} · Eliminación de cuenta
          </p>
          <h1 class="mt-4 text-3xl font-semibold">Cómo solicitar la eliminación de tu cuenta</h1>
          <p class="mt-3 text-sm leading-7 text-brand-ink/70">
            Esta guía aplica a la app <strong>{{ appName }}</strong> (desarrollada por
            <strong>{{ developerName }}</strong
            >). Explica los pasos para solicitar la eliminación de tu cuenta y qué datos se eliminan
            o se conservan.
          </p>
        </div>

        <RouterLink
          to="/"
          class="rounded-full border border-brand-neon/30 bg-brand-muted/60 px-4 py-2 text-sm font-semibold text-brand-ink transition hover:border-brand-neon"
        >
          Volver
        </RouterLink>
      </div>

      <section class="rounded-fluid border border-brand-neon/20 bg-brand-card/80 p-6 shadow-card">
        <h2 class="text-xl font-semibold">Pasos en la aplicación</h2>
        <ol class="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-brand-ink/70">
          <li>
            Abrí <strong>{{ appName }}</strong> e iniciá sesión.
          </li>
          <li>Entrá a <strong>Perfil</strong> o <strong>Configuración</strong>.</li>
          <li>Seleccioná <strong>Cuenta</strong> → <strong>Eliminar cuenta</strong>.</li>
          <li>Leé el aviso, confirmá la acción y completá la verificación (si se solicita).</li>
        </ol>

        <div class="mt-6">
          <h3 class="text-lg font-semibold">Si no podés acceder a la app</h3>
          <p class="mt-2 text-sm leading-7 text-brand-ink/70">
            Podés solicitar la eliminación escribiendo a
            <a
              class="underline underline-offset-2 hover:text-brand-neon transition"
              :href="`mailto:${supportEmail}`"
              >{{ supportEmail }}</a
            >
            desde el correo asociado a tu cuenta, indicando “Eliminar cuenta {{ appName }}” en el
            asunto.
          </p>
        </div>
      </section>

      <section
        class="mt-6 rounded-fluid border border-brand-neon/20 bg-brand-card/80 p-6 shadow-card"
      >
        <h2 class="text-xl font-semibold">Capturas de pantalla (referencia)</h2>
        <p class="mt-2 text-sm leading-7 text-brand-ink/70">
          Las siguientes capturas muestran visualmente el flujo para solicitar la eliminación de
          cuenta.
        </p>

        <div class="mt-5 grid gap-4 md:grid-cols-3">
          <figure class="rounded-3xl border border-brand-neon/20 bg-brand-muted/60 p-3">
            <img
              src="/screenshots/eliminar-cuenta-1.jpeg"
              alt="Paso 1: ingresar a Perfil/Configuración en Sabturno"
              class="w-full rounded-2xl border border-brand-neon/20"
              loading="lazy"
            />
            <figcaption class="mt-3 text-xs text-brand-ink/60">Paso 1: Iniciar Sessión</figcaption>
          </figure>

          <figure class="rounded-3xl border border-brand-neon/20 bg-brand-muted/60 p-3">
            <img
              src="/screenshots/eliminar-cuenta-2.jpeg"
              alt="Paso 2: abrir sección Cuenta y tocar Eliminar cuenta"
              class="w-full rounded-2xl border border-brand-neon/20"
              loading="lazy"
            />
            <figcaption class="mt-3 text-xs text-brand-ink/60">
              Paso 2: Tab → Acceder al Perfil
            </figcaption>
          </figure>

          <figure class="rounded-3xl border border-brand-neon/20 bg-brand-muted/60 p-3">
            <img
              src="/screenshots/eliminar-cuenta-3.jpeg"
              alt="Paso 3: confirmar solicitud de eliminación de cuenta"
              class="w-full rounded-2xl border border-brand-neon/20"
              loading="lazy"
            />
            <figcaption class="mt-3 text-xs text-brand-ink/60">Paso 3: Eliminar Cuenta</figcaption>
          </figure>
        </div>
      </section>

      <section
        class="mt-6 rounded-fluid border border-brand-neon/20 bg-brand-card/80 p-6 shadow-card"
      >
        <h2 class="text-xl font-semibold">Datos que se eliminan y datos que se conservan</h2>
        <p class="mt-2 text-sm leading-7 text-brand-ink/70">
          Resumen orientativo basado en la política de privacidad vigente. Los plazos pueden variar
          si existen obligaciones legales o incidentes de seguridad.
        </p>

        <div class="mt-4 overflow-x-auto">
          <table class="w-full border-collapse text-left text-xs">
            <thead>
              <tr>
                <th class="border border-brand-neon/20 bg-brand-muted/60 px-3 py-2 text-brand-ink">
                  Tipo de dato
                </th>
                <th class="border border-brand-neon/20 bg-brand-muted/60 px-3 py-2 text-brand-ink">
                  Qué pasa al eliminar la cuenta
                </th>
                <th class="border border-brand-neon/20 bg-brand-muted/60 px-3 py-2 text-brand-ink">
                  Plazo estimado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">Contraseña</td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">Se elimina</td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Dentro de 24 horas
                </td>
              </tr>
              <tr>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Email y teléfono
                </td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Se eliminan (el email puede quedar parcialmente hasheado para prevenir recreación
                  abusiva)
                </td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Dentro de 24 horas
                </td>
              </tr>
              <tr>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Foto de perfil
                </td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">Se elimina</td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Dentro de 24 horas
                </td>
              </tr>
              <tr>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Preferencias / configuración
                </td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">Se eliminan</td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Dentro de 24 horas
                </td>
              </tr>
              <tr>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Historial de citas (detalle)
                </td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Se desvincula el perfil gradualmente
                </td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Hasta 60 días
                </td>
              </tr>
              <tr>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Logs técnicos / seguridad
                </td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Se conservan por seguridad y prevención de fraude
                </td>
                <td class="border border-brand-neon/20 px-3 py-2 text-brand-ink/70">
                  Hasta 90 días
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="mt-4 text-sm leading-7 text-brand-ink/70">
          Para más detalles, ver la
          <RouterLink
            to="/politica-de-privacidad"
            class="underline underline-offset-2 hover:text-brand-neon transition"
          >
            política de privacidad
          </RouterLink>
          y los
          <RouterLink
            to="/terminos-y-condiciones"
            class="underline underline-offset-2 hover:text-brand-neon transition"
          >
            términos y condiciones </RouterLink
          >.
        </p>
      </section>
    </div>
  </div>
</template>
