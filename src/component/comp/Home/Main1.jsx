import logo1 from "../../../assets/images/home-hero-desktop.jpg"
import line from "../../../assets/patterns/line.svg"
import leftArrow from "../../../assets/patterns/right-arrow.svg"
import wCircle from "../../../assets/patterns/white-circles.svg"


export const Main1 = ()=>{
    return(
        <div className="main1" style={{backgroundImage:`url(${logo1})`}}>
            <img src={line} className="main1__line"/>
            <div className="main1__content">
                <h1>Scooter sharing <br/> made simple</h1>
                <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                <a href="#">Get Scootin</a>
            </div>
            <div className="main__left">
                <img src={leftArrow}/>
            </div>
            <div className="circles">
                <img src={wCircle}/>
            </div>
        </div>
    )
}