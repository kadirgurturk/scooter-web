

const jobs = [
    {
        id:0,
        name:"General Manager",
        location:"Jakarta, Indonesia"
    },
    {
        id:1,
        name:"UI/UX Designer",
        location:"Yokohama, Japan "
    },
    {
        id:2,
        name:"Blog Content Copywriter",
        location:"New York, United States"
    },
    {
        id:3,
        name:"Graphic Designer",
        location:"New York, United States"
    },
    {
        id:4,
        name:"Fleet Supervisor",
        location:"Jakarta, Indonesia"
    },
    {
        id:5,
        name:"UX Analyst",
        location:"London, United Kingdom"
    },
]

export const Main13 = () =>{
    return(
        <div className="main13">
            {jobs.map(job => {
                return(
                    <div className="item" key={job.id}>
                        <div className="content">
                            <h4>{job.name}</h4>
                            <p>{job.location}</p>
                        </div>
                        <a>Apply Now</a>
                    </div>
                )
            })}
        </div>
    )
}