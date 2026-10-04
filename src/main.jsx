import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { langFromPath } from './i18n/index.jsx'
// Шрифты с нашего домена (без Google Fonts CDN — RODO); latin-ext — польские буквы
import '@fontsource/bricolage-grotesque/latin-600.css'
import '@fontsource/bricolage-grotesque/latin-ext-600.css'
import '@fontsource/bricolage-grotesque/latin-800.css'
import '@fontsource/bricolage-grotesque/latin-ext-800.css'
import '@fontsource/figtree/latin-400.css'
import '@fontsource/figtree/latin-ext-400.css'
import '@fontsource/figtree/latin-600.css'
import '@fontsource/figtree/latin-ext-600.css'
import '@fontsource/caveat/latin-600.css'
import '@fontsource/caveat/latin-ext-600.css'
import './styles/variables.css'
import './styles/global.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App initialLang={langFromPath(location.pathname)} />
  </StrictMode>
)

// В продакшене HTML уже отрендерен заранее (scripts/prerender.js) — «оживляем» его
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
