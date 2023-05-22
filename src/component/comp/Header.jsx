import { Link } from "react-router-dom"
import close from "../../assets/icons/close.svg"
import { HeaderMobile } from "./HeaderMobile";
import { useState,useEffect } from "react"



export const Header = () =>{
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        function handleResize() {
          if (window.innerWidth < 720) {
            setIsMobile(true);
          } else {
            setIsMobile(false);
          }
        }
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      if(isMobile){
        return <HeaderMobile/>
      }

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