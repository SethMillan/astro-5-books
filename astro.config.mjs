// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // NECESITAS AGREGAR LO DE ABAJO PARA PODER USAR EL CLIENT ROUTER
  // Habilitar el enrutador del cliente con prefetch
  experimental: {
    clientPrerender: true,
  },
  // Configuración del prefetch
  prefetch: {
    defaultStrategy: "viewport", // o 'hover' o 'tap'
  },
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({context: 'server',access: 'public'}),
      SCORE_API_ENDPOINT: envField.string({context:'server', access:'public'})
    },
  },
});
