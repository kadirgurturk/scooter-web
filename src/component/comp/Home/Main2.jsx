import ride from "../../../assets/icons/ride.svg"
import scooter from "../../../assets/icons/scooter.svg"
import chevron from "../../../assets/icons/hamburger.svg"
import { useAnimation,motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"


const variant = {
    visible: { opacity: 1, rotate:360  ,transition: { duration: 1 } },
    hidden: { opacity: 0, rotate:0 }
  };


export const Main2 = ()=>{

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
        <div className="main2">
            <div className="main2__line">

            </div>
            <div className="main2__container">
                <div className="ıtem">
                    <motion.div ref={ref} variants={variant} initial="hidden" animate={control} className="vehicle"><img src={scooter}/></motion.div>
                    <div className="context">
                        <h4>Locate with app</h4>
                        <p>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.</p>
                    </div>
                </div>

                <div className="ıtem">
                    <motion.div ref={ref} variants={variant} initial="hidden" animate={control} className="vehicle"><img src={scooter}/></motion.div>
                    <div className="context">
                        <h4>Pick your scooter</h4>
                        <p>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
                    </div>
                </div>

                <div className="ıtem">
                    <motion.div ref={ref} variants={variant} initial="hidden" animate={control} className="vehicle"><img src={ride}/></motion.div>
                    <div className="context">
                        <h4>Enjoy the ride</h4>
                        <p>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}