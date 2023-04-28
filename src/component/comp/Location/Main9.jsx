import logo1 from "../../../assets/images/world-map-desktop.png"
import triangle from "../../../assets/patterns/triangle.svg"


const cities=[
    {
        id:"l",
        name:"Londra"
    },
    {
        id:"n",
        name:"New York"
    },
    {
        id:"y",
        name:"Yokohoma"
    },
    {
        id:"j",
        name:"Jakarta"
    },
    {
        id:"c",
        name:"Çanakkale"
    },
]

export const Main9 = () =>{
    return(
        <div className="main9" style={{backgroundImage:`url(${logo1})`}}>
            {cities.map(city => {
                return(
                    <div className={`city ${city.id}`}   key={city.id}>
                        <div>{city.name}</div>
                        <img src={triangle} />
                    </div>
                )
            })}
        </div>
    )
}