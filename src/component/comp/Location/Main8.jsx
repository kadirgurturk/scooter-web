import wCircle from "../../../assets/patterns/white-circles.svg"
import bckDesktop from "../../../assets/images/careers-locations-hero-desktop.jpg"


export const Main8 = () =>{
    return(

        <div className="main8" style={{backgroundImage:`url(${bckDesktop})`}}>
                <h2>Location</h2>
            <div className="circles">
                <img src={wCircle}/>
            </div>
        </div>

    )
}