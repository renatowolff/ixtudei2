import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" usa caminhos relativos, então funciona tanto em
// usuario.github.io/repositorio/ quanto em domínio próprio, sem precisar
// editar o nome do repositório aqui.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
