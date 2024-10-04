import '../section_three/section-three.css'
import about_img from '../../assets/about__img.png'
function SectionThree(){
    return(
        <section className='section-three'>
            <div className='container-section-three'>
                <div className='buttons-container'>
                    <p>Lectus nisi sed id dictum. Adipiscing</p>
                    <p>Commodo faucibus justo turpis id lectus ac fringilla scelerisque accumsan. Fames lectus nibh non ultrices id ut sed praesent in. Ac tristique nunc pellentesque odio. Blandit scelerisque dolor molestie egestas nunc nunc sit. Fermentum at pharetra odio risus malesuada diam laoreet eleifend vulputate. Enim molestie lorem nec ipsum nunc sit commodo non. Euismod rhoncus ut amet diam porta nisi tempus. Posuere suspendisse suscipit dolor enim. A lectus convallis quis elementum. Vitae pretium nunc venenatis felis.</p>
                    <p>Urna orci blandit imperdiet feugiat scelerisque dui at velit ac. Sollicitudin placerat in viverra amet in praesent vestibulum. Suscipit interdum odio pellentesque diam et.</p>
                    <div className='main-buttons-container'>
                        <button>aaaddd@test.ru</button>
                        <button>dvs@test.ru</button>
                    </div>
                </div>
                <div className='img-container'>
                    <img src={about_img} alt="" />
                </div>
            </div>
        </section>
    )
}
export default SectionThree