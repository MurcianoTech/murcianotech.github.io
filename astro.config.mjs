// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    server: {
      host: true, // Esto le dice a Astro que escuche en todas las interfaces de red, incluyendo tu IP local.
      port: 3000, // Puedes mantener el puerto por defecto o cambiarlo si lo deseas
    },
    // ... otras configuraciones ...
});
