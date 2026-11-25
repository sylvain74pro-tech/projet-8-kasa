// Monte React dans la div #root. BrowserRouter fournit le contexte de navigation à AppRouter.

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import AppRouter from './router/AppRouter.jsx'
import '../css/global.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
)
