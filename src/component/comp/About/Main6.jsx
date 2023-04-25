import image1 from "../../../assets/images/our-tech.jpg"
import image2 from "../../../assets/images/our-community.jpg"
import image3 from "../../../assets/images/our-integrity.jpg"


export const Main6 = () =>{
    const assets = [
        {
            id:1,
            title:"Our tech",
            text:"We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
            img: image1
        },
        {
            id:2,
            title:"Our integrity",
            text:"We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
            img: image2
        },
        {
            id:3,
            title:"Our community",
            text:"We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
            img: image3
        }

    ]
    return(
        <div className="Main6">
            {assets.map(asset => {
                return(
                    <div className="item" key={asset.id}>
                        <div className="mainImage" style={{backgroundImage:`url(${asset.img})`}}></div>
                        <div className="circle"><div>0{asset.id}</div></div>
                        <h4 className="title">
                            {asset.title}
                        </h4>
                        <p>{asset.text}</p>
                    </div>
                )
            })}
        </div>
    )
}