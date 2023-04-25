import wCircle from "../../../assets/patterns/white-circles.svg"
import bckDesktop from "../../../assets/images/about-hero-desktop.jpg"

export const Main4 = () =>{
    return(
        <div className="main4" style={{backgroundImage:`url(${bckDesktop})`}}>
            <h2>About</h2>
            <div className="circles">
                <img src={wCircle}/>
            </div>
        </div>
    )
}