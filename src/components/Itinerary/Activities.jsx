import "../../styles/itinerary/Activities.css"
import { useGetItineraryActivitiesQuery } from "../../features/actions/activitiesAPI"

export default function Activities(props) {

    let id = props.itinerary
    
    let {
        data: activities,
        }= useGetItineraryActivitiesQuery(id)

    const viewActivity = (activity) => {
        return (
            <div className="activities-item" key={activity.name} style={{ backgroundImage: `url(${activity.photo})` }}>
                <p className="activities-item-name">{activity.name}</p>
            </div>
        )
    }
    return (
        <>
        <div className="activities-container">
                    {activities?.response?.map(viewActivity)}
        </div>
        </>
    )
}