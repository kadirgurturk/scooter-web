import lefDown from "../../../assets/patterns/left-downward-arrow.svg"
import leftUp from "../../../assets/patterns/left-upward-arrow.svg"
import right from "../../../assets/patterns/right-arrow.svg"
import image1 from "../../../assets/images/telemetry.jpg"
import image2 from "../../../assets/images/near-you.jpg"
import image3 from "../../../assets/images/payments.jpg"
import circle from "../../../assets/patterns/circle.svg"

export const Main3 = () =>{
    return(
        <div className="main3">
            <div className="main3_item">
                <div className="content">
                    <h4>Easy to use <br/> riding telemetry</h4>
                    <p>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                    <a>Learn More</a>
                </div>
                <div className="ımage" style={{backgroundImage:`url(${image1})`}}></div>
                <img className="leftdown" src={lefDown}/>
                <img className="circle" src={circle}/>
            </div>

            <div className="main3_item1">
                <div className="content">
                    <h4>Coming to a city <br/> near you</h4>
                    <p>Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
                    <a>Learn More</a>
                </div>
                <div className="ımage" style={{backgroundImage:`url(${image2})`}}></div>
                <img className="leftdown" src={right}/>
                <img className="circle" src={circle}/>
            </div>


            <div className="main3_item2">
                <div className="content">
                    <h4>Zero hassle <br/> payments</h4>
                    <p>Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
                    <a>Learn More</a>
                </div>
                <div className="ımage" style={{backgroundImage:`url(${image3})`}}></div>
                <img className="leftUp" src={lefDown}/>
                <img className="circle" src={circle}/>
            </div>
            

        </div>
    )
}