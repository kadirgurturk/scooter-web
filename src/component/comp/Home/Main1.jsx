import logo1 from "../../../assets/images/home-hero-desktop.jpg"
import line from "../../../assets/patterns/line.svg"
import leftArrow from "../../../assets/patterns/right-arrow.svg"
import wCircle from "../../../assets/patterns/white-circles.svg"
import { useAnimation,motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"


const variant = {
    visible: { opacity: 1,  transition: { duration: .25 } },
    hidden: { opacity: 0,  }
  };

export const Main1 = ()=>{

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);
    


    return(
        <div className="main1" style={{backgroundImage:`url(${logo1})`}}>
            <img src={line} className="main1__line"/>
            <motion.div ref={ref} variants={variant} initial="hidden" animate={control} className="main1__content">
                <h1>Scooter sharing <br/> made simple</h1>
                <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                <a href="#">Get Scootin</a>
            </motion.div>
            <div className="main__left">
                <img src={leftArrow}/>
            </div>
            <motion.div ref={ref} variants={variant} initial="hidden" animate={control} className="circles">
                <img src={wCircle}/>
            </motion.div>
        </div>
    )
}