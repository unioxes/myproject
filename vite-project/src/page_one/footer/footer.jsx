import '../footer/footer-style.css'
import Logo from '../../assets/logo.png'
function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <div className="ul-container">
                    <div className="container-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="one-ul">
                        <ul>
                            <li>О компании</li>
                            <li>Деятельность</li>
                            <li>Персонал</li>
                            <li>Клиенту</li>
                        </ul>
                    </div>
                    <div className="two-ul">
                        <ul>
                            <li>Акционеру и инвестору</li>
                            <li>Пресс-центр</li>
                            <li>Торги</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                    <div className="text-footer">
                        <p>Местонахождение</p>
                        <p>Ante quam egestas tristique a malesuada massa aliquam ultrices. Et tellus nec.</p>
                    </div>
                </div>
                <div className="bottom-text-footer">
                    <p>Dictum praesent dignissim pellentesque amet diam velit faucibus sed. Nec mattis posuere habitasse porta feugiat mattis enim. Quam interdum at penatibus amet elementum luctus.
                    Политика обработки персональных данных</p>
                    <p>Разработано: d-e-n.ru</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer