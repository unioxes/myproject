import Nav from '../header/nav.jsx'
import SectionOne from '../section_one/section-one.jsx'
import '../header/nav-styles.css'
import '../section_one/section-one.css'
function Container(){
    return(
        <>
        <header>
            <Nav/>
            <SectionOne/>
        </header>
        
        </>
    )
}
export default Container