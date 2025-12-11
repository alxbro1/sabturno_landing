# Sabturno Landing

Landing page creada con Vue 3 + Vite para comunicar la propuesta de Sabturno, la plataforma que conecta locales de belleza con sus clientes.

## Stack principal

- Vue 3 con TypeScript (`src/App.vue`, `src/main.ts`).
- Vite como bundler y servidor de desarrollo.
- Tailwind CSS con theme personalizado (`tailwind.config.js`, `src/style.css`).
- ESLint + Prettier para asegurar estilo consistente (`.eslintrc.cjs`, `.prettierrc`).

## Puesta en marcha

1. Instalar dependencias: `npm install`.
2. Servidor de desarrollo: `npm run dev` y abrir la URL indicada por Vite.
3. Linter: `npm run lint` para revisar reglas de calidad.
4. Formateo automático: `npm run format`.
5. Build de producción: `npm run build` genera artefactos en `dist/`; validar con `npm run preview`.

## Contenido destacado

- **Hero + métricas**: texto localizado para locales y clientes, tarjetas con KPIs dinámicos (`heroBenefits` y `stats`).
- **Funciones**: columnas diferenciadas para operaciones de locales y experiencia de clientes (`featureColumns`).
- **Workflow**: pasos claros de implementación (`workflow`).
- **CTA**: bloque final con highlights de onboarding, soporte y roadmap (`ctaHighlights`).

## Personalización rápida

- Editar la información comercial en `src/App.vue` según evolucione la app móvil.
- Ajustar paleta, sombras o fuentes desde `tailwind.config.js` y `src/style.css`.
- Agregar más secciones reutilizando las utilidades `glass-panel`, `badge`, `stat-chip` definidas en la hoja de estilos.

## Próximos pasos sugeridos

- Integrar formularios reales o endpoints para las acciones de “Agendar llamada / Hablar con Sabturno”.
- Conectar analíticas o herramientas de marketing una vez desplegada la landing.
