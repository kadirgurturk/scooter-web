import { Link } from "react-router-dom"
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import twitter from "../../assets/icons/twitter.svg"
import appstore from "../../assets/icons/app-store.svg"
import googlestore from "../../assets/icons/google-play.svg"
import semiCircle from "../../assets/patterns/semi-circles.svg"


export const Footer = () =>{
    return(
        <div className="footer">
            <div className="section-up">
                <img src={semiCircle} className="circles"/>
                <div className="banner">
                    <div className="title">Sign Up And <br/>
                            Scoot Of Today</div>
                    <div className="stores">
                        <img src={appstore} />
                        <img src={googlestore} />
                    </div>
                </div>
            </div>
            <div className="section-down">
                <div className="links">
                <ul>
                    <div className="logo">
                        scoot
                    </div>
            
                    <li><Link to={"/"} >About</Link></li>
                    <li><Link to={"/carrer"} >Carrer</Link></li>
                    <li><Link to={"/locaiton"} >Location</Link></li>
                </ul>
                </div>
                <div className="logos">
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={twitter} />
                </div>
            </div>
        </div>
    )
}