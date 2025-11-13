// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Configuración optimizada para desarrollo y despliegue
export default defineConfig({
    plugins: [react()],
    base: "", // 👈 importante: vacío para que cargue desde la carpeta actual
    server: {
        port: 5173, // puedes cambiar el puerto si lo deseas
        open: true, // abre automáticamente el navegador
    },
});
