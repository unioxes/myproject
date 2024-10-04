import '../section_five/section-five.css'
import pictureOne from '../../assets/Rectangle 36.png'
import pictureSecond from '../../assets/Rectangle 37.png'
import pictureThird from '../../assets/Rectangle 38.png'

function SectionFive(){
    return(
        <section className='section-five'>
            <div className='container-sec-five'>
                <div className='title-five'>
                    <p>Новости компании</p>
                </div>
                <div className='container-slider'>
                    <div className='one-picture'>
                        <div className='container-picture'>
                            <div><img src={pictureOne} alt="" /></div>
                            <p>Est commodo nulla pulvinar amet dictumst. Tincidunt tincidunt interdum faucibus ipsum quis eleifend amet sit. Ac sociis sodales viverra viverra.</p>
                            <p>Tincidunt et ut phasellus euismod eget diam erat ultrices. Eu tristique diam lectus platea orci sed cras. Egestas lorem tincidunt pellentesque dolor vulputate lacus platea. Varius.</p>
                        </div>
                    </div>
                    <div className='second-picture'>
                        <div className='container-picture'>
                            <div><img src={pictureSecond} alt="" /></div>
                            <p>Est commodo nulla pulvinar amet dictumst. Tincidunt tincidunt interdum faucibus ipsum quis eleifend amet sit. Ac sociis sodales viverra viverra.</p>
                            <p>Tincidunt et ut phasellus euismod eget diam erat ultrices. Eu tristique diam lectus platea orci sed cras. Egestas lorem tincidunt pellentesque dolor vulputate lacus platea. Varius.</p>
                        </div>
                    </div>
                    <div className='third-picture'>
                        <div className='container-picture'>
                            <div><img src={pictureThird} alt="" /></div>
                            <p>Est commodo nulla pulvinar amet dictumst. Tincidunt tincidunt interdum faucibus ipsum quis eleifend amet sit. Ac sociis sodales viverra viverra.</p>
                            <p>Tincidunt et ut phasellus euismod eget diam erat ultrices. Eu tristique diam lectus platea orci sed cras. Egestas lorem tincidunt pellentesque dolor vulputate lacus platea. Varius.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFive