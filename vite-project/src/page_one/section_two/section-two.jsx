import '../section_two/section-two.css'
import { ways } from '../../main'
function WayToTeach( {title, description, manager, production, technology, complex, eco, results, teach, resume, podrobn, news, photo, video, pressa, svyaz, recvizits, number} ){
    return(
        <>
        <div className='huita'>
            <div className='huita_2'>
                <p><strong>{title}</strong></p>
                <p>{description}</p>
                <p>{manager}</p>
                <p>{production}</p> 
                <p>{technology}</p> 
                <p>{complex}</p> 
                <p>{eco}</p> 
                <p>{results}</p> 
                <p>{teach}</p> 
                <p>{resume}</p>
                <p>{podrobn}</p>
                <p>{news}</p>
                <p>{photo}</p>
                <p>{video}</p>
                <p>{pressa}</p>
                <p>{svyaz}</p>
                <p>{recvizits}</p>
                </div>
                <div className='huita_3'>
                <p>{number}</p>  </div>
        </div>
        </>
    )
}
function SectionTwo(){
    return(
        <section className='container-ways'>
            <div className='main-container-ways'>
           {/* <WayToTeach {...ways[0]}/>
           <WayToTeach {...ways[1]}/>
           <WayToTeach {...ways[2]}/>
           <WayToTeach {...ways[3]}/>
           <WayToTeach {...ways[4]}/>
           <WayToTeach {...ways[5]}/> */}
           {ways.map(way => <WayToTeach {...way} />)}
           </div>
        </section>
    )
}
export default SectionTwo