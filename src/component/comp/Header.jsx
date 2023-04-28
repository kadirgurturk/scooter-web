import { Link } from "react-router-dom"


export const Header = () =>{
    return(
        <nav className="header">
            <h1 className="logo">
                scoot
            </h1>
           <ul>
                <li><Link to={"/"} >Home</Link></li>
                <li><Link to={"/about"} >About</Link></li>
                <li><Link to={"/carrer"} >Carrer</Link></li>
                <li><Link to={"/location"} >Location</Link></li>
                <a className="button">
                    Get Scootin
                </a>
           </ul>
        </nav>
    )
}