import Nav from '../../page_one/header/nav'
import '../personal/personal-header.css'

import OnePic from '../../assets/1.png'
import TwoPic from '../../assets/2.png'
import ThreePic from '../../assets/3.png'
import FourPic from '../../assets/4.png'
import FivePic from '../../assets/5.png'
import '../../index'
import { sections } from '../../index'

function PersonalHeader(){
    const buttons = document.querySelectorAll('.sidebar div');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    buttons.forEach(div => {
        div.addEventListener('click', () => {
            // Удаление активного класса у всех кнопок
            buttons.forEach(div => div.classList.remove('active'));
            
            // Добавление активного класса текущей кнопке
            div.classList.add('active');
    
            // Обновление заголовка и текста
            const section = sections[div.id];
            title.textContent = section.title;
            description.textContent = section.description;
        });
    });
    return(
        <>
        <section className='nav-position'></section>
        <section>
            <div>
                <div className='sidebar'>
                    <div id="btn0">
                        <p>Персонал</p>
                        <img src={OnePic} alt="" />
                    </div>
                    <div id="btn1">
                        <p>Деятельность</p>
                        <img src={TwoPic} alt="" />
                    </div>
                        <div id="btn2">
                        <p>Акционерам</p>
                        <img src={ThreePic} alt="" />
                    </div>
                    <div id="btn3">
                        <p>Инвесторам</p>
                        <img src={FourPic} alt="" />
                    </div>
                    <div id="btn4">
                        <p>Контакты</p>
                        <img src={FivePic} alt="" />
                    </div>
                </div>
                <div>
                    <div className='content'>
                        <h2 id="title">Выберите раздел</h2>
                        <p id="description">Текст обновится при выборе соответствующей кнопки слева.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default PersonalHeader