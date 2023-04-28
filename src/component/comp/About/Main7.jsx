import { useState } from "react";
import chevron from "../../../assets/icons/chevron.svg"

const assets1 = [
    {
        id:0,
        title:"How do I download the app?",
        text:"To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        status:false
    },
    {
        id:1,
        title:"Can I find a nearby Scoots?",
        text:"To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        status:false
    },

]

const assets2 = [
    {
        id:0,
        title:"Should I wear a helmet?",
        text:"To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        status:false
    },
    {
        id:1,
        title:"How about the rules & regulations??",
        text:"To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        status:false
    },
    {
        id:2,
        title:"Do I need a license to ride?",
        text:"To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        status:false
    },
    {
        id:3,
        title:"What if I damage my Scoot?",
        text:"To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        status:false
    },
]

export const Main7 = () =>{
    const [works,setWorks] = useState(assets1);
    const [drive,setDrive] = useState(assets2);

    const handleClick = (w) =>{
        
        setWorks(works => works.map(work => {
            if(w.id === work.id){
                work.status = !work.status;
            }
            return work;
        }))


    }

    
    const handleClick2 = (d) =>{
        
        setDrive(drive => drive.map(dri => {
            if(d.id === dri.id){
                dri.status = !dri.status;
            }
            return dri;
        }))


    }

    return(
        <div className="Main7">
           <div className="works">
          
                <h3 >How it works</h3>
            
                <div className="container container1">
                {works.map(work => {
                    return (
                        <div className="item" key={work.id}>
                            <div className="title">
                                <h4>{work.title}</h4>
                                <div onClick={()=>handleClick(work)}><img src={chevron}/></div>
                            </div>
                            {work.status && <div className="text">{work.text}</div>}
                        </div>
                    )
                })}
                </div>

           </div>

           
            
            <div className="works works2">
                <h3 >Safe driving</h3>
            
                <div className="container container2">
                {drive.map(dri => {
                    return (
                        <div className="item" key={dri.id}>
                            <div className="title">
                                <h4>{dri.title}</h4>
                                <div onClick={()=>handleClick2(dri)}><img src={chevron}/></div>
                            </div>
                            {dri.status && <div className="text">{dri.text}</div>}
                        </div>
                    )
                })}
                </div>
            </div>    
        </div>
    )
}