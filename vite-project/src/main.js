export const nav_text = [
    {
        search: 'Быстрый поиск по сайту',
        language_ru: 'Ru',
        language_en: 'En',
    },
    {
        about_company: 'О компании',
        deyat: 'Деятельность',
        pers: 'Персонал',
        client: 'Клиенту',
        invest: 'Акционеру и инвестору',
        press: 'Пресс-центр',
        torg: 'Торги',
        contact: 'Контакты',
    },
]
export const ways = [
    {
        title: 'О компании',
        description: 'О нас ',
        manager: 'Руководство ',
        number: '01'
    },
    {
        title: 'Деятельность ',
        production: 'Продукция ',
        technology: 'Технология ',
        complex: 'Сырьевой комплекс ',
        eco: 'Экология ',
        results: 'Результаты спецоценки ',
        number: '02'
    },
    {
        title: 'Персонал ',
        teach: 'Подготовка и обучение персонала ',
        resume: 'Отправить резюме ',
        number: '03'
    },
    {
        title: 'Акционеру и инвестору ',
        podrobn: 'Подробнее ',
        number: '04'
    },
    {
        title: 'Пресс центр ',
        news: 'Новости ',
        photo: 'Фотогалерея ',
        video: 'Видеогалерея ',
        pressa: 'Корпоративная пресса ',
        number: '05'
    },
    {
        title: 'Контакты ',
        svyaz: 'Как с нами связаться ',
        recvizits: 'Реквизиты ',
        number: '06'
    }
]

const buttons = document.querySelectorAll('.sidebar div');
const title = document.getElementById('title');
const description = document.getElementById('description');

// Данные для замены текста
const sections = {
    btn0: {
        title: 'huinya',
        description: 'escho huinya'
    },
    btn1: {
        title: 'Деятельность компании',
        description: 'Информация о деятельности компании, включающая проекты и инициативы, а также будущие планы развития.'
    },
    btn2: {
        title: 'Акционерам',
        description: 'Актуальная информация для акционеров, включая отчеты, собрания и дивидендную политику.'
    },
    btn3: {
        title: 'Инвесторам',
        description: 'Раздел для инвесторов с ключевыми показателями, стратегическими планами и инвестиционными возможностями.'
    },
    btn4: {
        title: 'Контакты',
        description: 'Свяжитесь с нами для получения дополнительной информации или вопросов по нашим услугам.'
    }
};

// Добавление события на клик для каждой кнопки
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
