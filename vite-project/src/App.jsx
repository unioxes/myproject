import './index.css'
import SectionTwo from './page_one/section_two/section-two.jsx'
import SectionThree from './page_one/section_three/section-three.jsx'
import SectionFour from './page_one/section_four/section-four.jsx'
import SectionFive from './page_one/section_five/section-five.jsx'
import Footer from './page_one/footer/footer.jsx'
import Container from './page_one/container_for_nav_and_header/container.jsx'
function App() {
 

  return (
    <>
          <Container />
          <SectionTwo/>
          <SectionThree />
          <SectionFour />
          <SectionFive/>
    </>
    
    
  )
  
}

export default App
