import axios from "axios"
import { useEffect, useState } from "react"

import "../../styles/itinerary/Itinerary.css"
import Activities from "./Activities"
import Comments from "./Comments"
export default function Itinerary(props) {
    const itinerary = props.data
    const [user, setUser] = useState()
    useEffect(() => {
        if (itinerary) {
            axios.get(`http://localhost:4000/auth/631258d85b6dd57b0bd6a913`)
            .then(res => setUser(res.data.response))
            //de momento se va a usar el mismo usario para probar
            .catch(err=>{
                console.log(err)
            })
        }
    }, [itinerary])
    return (
        <div className="itinerary-container">
            <p className="itinerary-name">{itinerary.name}</p>
            {user?<div className="itinerary-user">
                <img src={user.photo} alt="user-photo" className="itinerary-user-photo"/>
                <p>{itinerary.user.name}</p>
                <p>{user.lastName}</p>
            </div> : null}
            {/* esto es para evitar un error de carga mientras el usuario no este en itinerary */}
            <div className="itinerary-body">
                <div className="itinerary-text">
                <p>♥{itinerary.likes.reduce((likes) => likes + 1,0) }</p>
                <p className="itinerary-duration">{itinerary.duration}hs</p>
                </div>
                <p className="itinerary-price">{"💵 ".repeat(itinerary.price)}</p>
                <p className="itinerary-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt necessitatibus perspiciatis exercitationem magnam dolorum dignissimos suscipit laboriosam! At itaque tempora fugit iure tempore quo similique optio deleniti dolores ex.
                </p>
                <p className="itinerary-tags">
                    {itinerary.tags.map(tag => "#" + tag + " ")}
                </p>
            </div>
            <Activities />
            <Comments />
        </div>
    )
}