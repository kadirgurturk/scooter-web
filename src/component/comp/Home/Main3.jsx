import lefDown from "../../../assets/patterns/left-downward-arrow.svg"
import leftUp from "../../../assets/patterns/left-upward-arrow.svg"
import right from "../../../assets/patterns/right-arrow.svg"
import image1 from "../../../assets/images/telemetry.jpg"
import image2 from "../../../assets/images/near-you.jpg"
import image3 from "../../../assets/images/payments.jpg"
import circle from "../../../assets/patterns/circle.svg"
import { useAnimation,motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"


const variant = {
    visible: { opacity: 1,  transition: { duration: 1.2 } },
    hidden: { opacity: 0,  }
  };


export const Main3 = () =>{

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
        <motion.div ref={ref} className="main3">
            <div  className="main3_item">
                <motion.div  variants={variant} initial="hidden" animate={control} className="content">
                    <h4>Easy to use <br/> riding telemetry</h4>
                    <p>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                    <a>Learn More</a>
                </motion.div>
                <motion.div  variants={variant} initial="hidden" animate={control} className="ımage" style={{backgroundImage:`url(${image1})`}}></motion.div>
                <img className="leftdown" src={lefDown}/>
                <img className="circle" src={circle}/>
            </div>

            <div className="main3_item1">
                <motion.div  variants={variant} initial="hidden" animate={control} className="content">
                    <h4>Coming to a city <br/> near you</h4>
                    <p>Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
                    <a>Learn More</a>
                </motion.div>
                <motion.div  variants={variant} initial="hidden" animate={control} className="ımage" style={{backgroundImage:`url(${image2})`}}></motion.div>
                <img className="leftdown" src={right}/>
                <img className="circle" src={circle}/>
            </div>


            <div className="main3_item2">
                <motion.div  variants={variant} initial="hidden" animate={control} className="content">
                    <h4>Zero hassle <br/> payments</h4>
                    <p>Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
                    <a>Learn More</a>
                </motion.div>
                <motion.div  variants={variant} initial="hidden" animate={control} className="ımage" style={{backgroundImage:`url(${image3})`}}></motion.div>
                <img className="leftUp" src={lefDown}/>
                <img className="circle" src={circle}/>
            </div>
            

        </motion.div >
    )
}