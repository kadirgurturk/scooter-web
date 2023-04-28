import wCircle from "../../../assets/patterns/white-circles.svg"
import bckDesktop from "../../../assets/images/careers-locations-hero-desktop.jpg"


export const Main11 = () =>{
    return(
        <div className="main11" style={{backgroundImage:`url(${bckDesktop})`}}>
            <h2>Carrer</h2>
            <div className="circles">
                <img src={wCircle}/>
            </div>
</div>

    )
}