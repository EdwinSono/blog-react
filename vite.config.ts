import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import pluginChecker from 'vite-plugin-checker';


// Add the paths you need as alias
const paths = [
  "assets",
  "components",
  "hooks",
  "pages",
  "styles",
  "utils",
]

/**
 * Function to create the aliases
 * @returns An array with the aliases
 */
const getAliases = () => paths.map(p => ({ find: `@${p}`, replacement: path.resolve(__dirname, `src/${p}`) }))

interface config {
  resolve: object;
  plugins: any[]
  [key: string]: any;
}

/**
 * Initial configuration for Vite
 */
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())  
  const config: config = {
    plugins: [
      react(),
      pluginChecker({ typescript: true }),
    ],
    resolve: {
      alias: getAliases(),
    }
  }
  
  console.log(`comando: ${command} y modo: ${mode}`);
  console.log("Variables de entorno:", env);

  if (mode === 'development') {
    config.server = {
      port: env.VITE_PORT,
    }
  }

  return config
})
