import round from '../../assets/Group 1.png'
import '../section_one/section-one.css'
function SectionOne(){
    return(
        <>
        <section className='section-one'>
<div className='section-one-container'>
    <div className='left-container'>
        <p>Quis et quam quam sem scelerisque odio. Diam hendrerit purus dui nisl scelerisque in pharetra molestie. Nunc leo.</p>
        <button className='podr'>Подробнее</button>
        <div className='buttons-slider-container'>
            <button className='buttons-slider'></button>
            <button className='buttons-slider'></button>
            <button className='buttons-slider'></button>
        </div>
    </div>
    <div className='right-container'>
        <img src={round} alt="" />
        <p>Nisi nulla ultrices amet cras tincidunt nec. Dolor magna.</p>
    </div>
</div>
</section>
        </>
    )
}
export default SectionOne