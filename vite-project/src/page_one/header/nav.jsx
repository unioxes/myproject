import '../header/nav-styles.css'
import logo from '../../assets/logo.png'
import { nav_text } from '../../main'
import {Link} from 'react-router-dom'
function Nav(){
    return(
        <>
        <nav>
            <div className='top-nav'>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className='search-container'>
                    <p className='search'>{nav_text[0].search}</p>
                    <input type="text" />
                    <img src="" alt="" />
                </div>
                <div className='languages'>
                    <p className='language'>{nav_text[0].language_ru}</p>
                    <p className='language'>{nav_text[0].language_en}</p>
                </div>
            </div>
            <div className='bottom-nav'>
                <ul className='text-nav'>
                    <li><Link to={'/'}>{nav_text[1].about_company}</Link></li>
                    <li><Link to={'/'}>{nav_text[1].deyat}</Link></li>
                    <li><Link to={'/'}>{nav_text[1].pers}</Link></li>
                    <li><Link to={'/'}>{nav_text[1].client}</Link></li>
                    <li><Link to={'/'}>{nav_text[1].invest}</Link></li>
                    <li><Link to={'/'}>{nav_text[1].press}</Link></li>
                    <li><Link to={'/'}>{nav_text[1].torg}</Link></li>
                    <li><Link to={'/'}>{nav_text[1].contact}</Link></li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Nav