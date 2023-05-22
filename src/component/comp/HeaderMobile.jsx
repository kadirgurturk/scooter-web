import { useState } from "react"
import { Link } from "react-router-dom"
import close from "../../assets/icons/close.svg"
import hamburger from "../../assets/icons/hamburger.svg"


export const HeaderMobile = () =>{
    const [isClick, setClick] = useState(false)

    return(
        <nav className="headerMobile">
            <img className="close" src = {isClick ? close : hamburger} onClick={()=>{setClick(!isClick)}}></img>
            <h1 className="logo">
                scoot
            </h1>
           {isClick && <div className="sidebar">
            <ul>
                <li><Link to={"/"} >Home</Link></li>
                <li><Link to={"/about"} >About</Link></li>
                <li><Link to={"/carrer"} >Carrer</Link></li>
                <li><Link to={"/location"} >Location</Link></li>
                
           </ul>
           <a className="button">
                    Get Scootin
            </a>
            </div>}

           
        </nav>
    )
}