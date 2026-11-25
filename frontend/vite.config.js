// Active le plugin React de Vite, qui transforme le JSX lors du développement et de la compilation.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({ plugins: [react()] })
