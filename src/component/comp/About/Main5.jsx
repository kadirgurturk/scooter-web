import circle from "../../../assets/patterns/circle.svg"
import right from "../../../assets/patterns/right-arrow.svg"
import leftUp from "../../../assets/patterns/left-upward-arrow.svg"
import image1 from "../../../assets/images/digital-era.jpg"
import image2 from "../../../assets/images/better-living.jpg"


export const Main5 = () =>{
    return(
        <div className="main5">
            <div className="main5_item">
                <div className="content">
                    <h4>Mobility for the <br/>digital era</h4>
                    <p>Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>

                </div>
                <div className="ımage" style={{backgroundImage:`url(${image1})`}}></div>
                <img className="leftdown" src={leftUp}/>
                <img className="circle" src={circle}/>
            </div>

            <div className="main5_item1">
                <div className="content">
                    <h4>Better urban <br/> living</h4>
                    <p>We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>

                </div>
                <div className="ımage" style={{backgroundImage:`url(${image2})`}}></div>
                <img className="leftdown" src={right}/>
                <img className="circle" src={circle}/>
            </div>

        </div>
    )
}