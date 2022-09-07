import React from "react";
import "../styles/MyTineraries.css"
import { useGetItinerariesUsersQuery } from "../features/actions/itinerariesAPI";
import Itinerary from "../components/Itinerary/Itinerary"
import { Link as LinkRouter } from 'react-router-dom'
const MyTineraries = () => {
    const id = "631258d85b6dd57b0bd6a913"
    const {
        data: itineraries
    } = useGetItinerariesUsersQuery(id)
    return (
        <>
            <div className="myTineraries-container">
                {itineraries ? <LinkRouter to={`/`} className="myTineraries-btn">Back to Home</LinkRouter>
                :<h1>Not Itineraries Yet...</h1>}
                {itineraries?.response.map((itinerary) => {
                    return (
                        <Itinerary data={ itinerary } key={itinerary._id} />
                    )
                })}
            <LinkRouter to={`/`} className="myTineraries-btn">Back to Home</LinkRouter>
            </div>
        </>
    )
}
export default MyTineraries