import { useState } from "react"
import "../../styles/itinerary/Activities.css"
export default function Activities(props) {
    const activities = [
        {
            name: "Act1",
            photo: "https://imagenes.elpais.com/resizer/pKpsAzeO1aqa2M1a-6AIp_ZbxH0=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/VXSEYFTVUFDGPJH6BZFVCGH6OU.jpg",
        },
        {
            name: "Act2",
            photo: "https://imagenes.elpais.com/resizer/pKpsAzeO1aqa2M1a-6AIp_ZbxH0=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/VXSEYFTVUFDGPJH6BZFVCGH6OU.jpg",
        },
        {
            name: "Act3",
            photo: "https://imagenes.elpais.com/resizer/pKpsAzeO1aqa2M1a-6AIp_ZbxH0=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/VXSEYFTVUFDGPJH6BZFVCGH6OU.jpg",
        }
    ]
   // const [open,setOpen] = useState(false)
    const viewActivity = (activity) => {
        return (
            <div className="activities-item" key={activity.name} style={{ backgroundImage: `url(${activity.photo})` }}>
                <p className="activities-item-name">{activity.name}</p>
            </div>
        )
    }
    // const handleOpen=()=>{
    //     open ?
    //     setOpen(false)
    //     :setOpen(true)
    // }
    return (
        <>
        <div className="activities-container">
                    {activities.map(viewActivity)}
        </div>
        </>
    )
}