import { HashRouter } from "react-router-dom"
import App from "./App.jsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
          <App/>
     </HashRouter>
  </StrictMode>,
)
