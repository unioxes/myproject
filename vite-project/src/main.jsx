import App from "./App.jsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes} from 'react-router-dom'
import PersonalHeader from "./page_two/personal/personal-header.jsx"
import Footer from "./page_one/footer/footer.jsx"
import Nav from "./page_one/header/nav.jsx"

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <HashRouter>
      <Nav />
      <Routes>
          <Route index element = { <App />} />
          < Route path='/personal-header' element = {<PersonalHeader/>} />
        </Routes>
      <Footer/>
    </HashRouter>
  </StrictMode>,



)
