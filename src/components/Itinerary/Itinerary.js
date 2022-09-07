import "../../styles/itinerary/Itinerary.css"
import Activities from "./Activities"
import Comments from "./Comments"
//import { useGetItinerariesUsersQuery } from "../../features/actions/itinerariesAPI"


export default function Itinerary(props) {
    const itinerary = props.data.response? props.data.response : props.data
    //const [user, setUser] = useState()

    // let {
    //     data: itineraries,
    //     error,
    //     isLoading,
    //     isSuccess,
    //     isfailed
    //     } = useGetItinerariesUsersQuery()

    return (
        <div className="itinerary-container">
            <p className="itinerary-name">{itinerary.name}</p>
            {itinerary.user?<div className="itinerary-user">
                <img src={itinerary.user.photo} alt="user-pfp" className="itinerary-user-photo" />
                <p>{itinerary.user.name}</p>
                <p>{itinerary.user.country}</p>
            </div> : null}
            {/* esto es para evitar un error de carga mientras el usuario no este en itinerary */}
            <div className="itinerary-body">
                <div className="itinerary-text">
                <p>♥{itinerary.likes.reduce((likes) => likes + 1,0) }</p>
                <p className="itinerary-duration">{itinerary.duration}hs</p>
                </div>
                <p className="itinerary-price">{"💵 ".repeat(itinerary.price)}</p>
                <p className="itinerary-description">
                {itinerary.description}
                </p>
                <p className="itinerary-tags">
                    {itinerary.tags.map(tag => "#" + tag + " ")}
                </p>
            </div>
            <Activities itinerary={itinerary._id} />
            <Comments itinerary={itinerary._id}/>
        </div>
    )
}