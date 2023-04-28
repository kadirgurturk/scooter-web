import circle from "../../../assets/patterns/circle.svg"
import lefDown from "../../../assets/patterns/left-downward-arrow.svg"
import image1 from "../../../assets/images/join-us.jpg"


export const Main12 = () =>{
    return(
        <div className="main12">
            <div className="main12_item">
                <div className="content">
                    <h4>Easy to use <br/> riding telemetry</h4>
                    <p>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                    <a>Learn More</a>
                </div>
                <div className="ımage" style={{backgroundImage:`url(${image1})`}}></div>
                <img className="leftdown" src={lefDown}/>
                <img className="circle" src={circle}/>
            </div>
        </div>
    )
}