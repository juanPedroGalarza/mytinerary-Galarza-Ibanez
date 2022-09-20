import { useEffect, useState } from "react"
import { useModifyItineraryMutation } from "../../features/actions/itinerariesAPI"
import "../../styles/itinerary/Itinerary.css"
import Activities from "./Activities"
import Comments from "./Comments"


export default function Itinerary(props) {
    const [itinerary,setItinerary] = useState(props.data)
    const [userId, setUserId] = useState()
    const [openEditor,setOpenEditor] = useState(false)
    const [modifyItinerary, {data: resItinerary}] = useModifyItineraryMutation()
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setUserId(user.id)
        }
    }, [itinerary])
    function saveItinerary(e) {
        let dataItinerary = Array.from(e.target)
        dataItinerary = dataItinerary.filter((input) => input.value)
        dataItinerary = dataItinerary.reduce((values, input) => {
            if (input.name === "tags") {
                values[input.name] = input.value.split(" ")
            } else {
                values[input.name] = input.value
            }
            return values
        }, {})
        modifyItinerary({data:dataItinerary, id: props.data._id})
        setOpenEditor(false)
    }
    useEffect(() => {
        if (resItinerary) {
            setItinerary(resItinerary.response)
        }
    }, [resItinerary])
    
    return (
        <div className="itinerary-container">
            <p className="itinerary-title">{itinerary.name}</p>
            {itinerary.user?<div className="itinerary-user">
                <img src={props.data.user.photo} alt="user-pfp" className="itinerary-user-photo" />
                <p className="itinerary-user-name">{props.data.user.name}</p>
                <p className="itinerary-user-country">{props.data.user.country}</p>
            </div> : null}
            {/* esto es para evitar un error de carga mientras el usuario no este en itinerary */}
            {userId === props.data.user?._id && openEditor?
                <form className="itinerary-body" onSubmit={saveItinerary} >
                    <button type="submit" className="itinerary-submit">
                        Save</button>
                    <button type="button" className="itinerary-cancel" onClick={() => setOpenEditor(false)}>
                        Cancel</button>
                    {props.children}
                <input className="itinerary-name" name="name" type="text" defaultValue={itinerary.name} />
                <div className="itinerary-text">
                <p>♥{itinerary.likes.reduce((likes) => likes + 1,0) }</p>
                <input className="itinerary-duration-input" name="duration" type="number" defaultValue={itinerary.duration} />
                </div>
                <input className="itinerary-price-input"
                        type="number" name="price"
                        defaultValue={itinerary.price} min="1" max="5" step="1" />
                    <input className="itinerary-description-input"
                        type="text" name="description"
                        defaultValue={itinerary.description} />
                    <input className="itinerary-tags-input"
                    type="text" name="tags"
                        defaultValue={itinerary.tags?.join(" ")} />
                </form>
                : <div className="itinerary-body">
                    {userId === props.data.user?._id?<button type="button" className="itinerary-edit" onClick={()=>setOpenEditor(true)}>Edit</button>:null}
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
            }
            <Activities itinerary={itinerary._id} />
            <Comments itinerary={itinerary._id} userId={userId} />
        </div>
    )
}