import '../section_four/section-four.css'
import frame from '../../assets/Frame.png'
import frame1 from '../../assets/Frame1.png'
function SectionFour(){
    return(
        <section className='section-four'>
            <div className='container-section-four'>
                <div className='title-container'>
                    <p>Vel pretium pellentesque enim morbi</p>
                    <p>Et aliquam eu feugiat vel egestas semper elementum. Bibendum eget massa .</p>
                </div>
                <div className='images-container-four'>
                    <div className='first-img'>
                        <img className='images-four' src={frame} alt="" />
                        <p>Enim ac sagittis tempus iaculis blandit. Tellus.</p>
                    </div>
                    <div className='second-img'>
                        <img className='images-four' src={frame1} alt="" />
                        <p>Ultricies erat sagittis est dictum leo est nibh a.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionFour