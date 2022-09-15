import React, { useEffect, useState } from "react";
import "../styles/MyTineraries.css"
import { useGetItinerariesUsersQuery, useDeleteItineraryMutation } from "../features/actions/itinerariesAPI";
import Itinerary from "../components/Itinerary/Itinerary"
import { Link as LinkRouter } from 'react-router-dom'
const MyTineraries = () => {
    const [userId,setUserId] = useState("")
    const {
        data: itineraries
    } = useGetItinerariesUsersQuery(userId)
    useEffect(() => {
        setUserId(JSON.parse(localStorage.getItem("user"))?.id)
    },[])
    const [deleteItinerary] = useDeleteItineraryMutation()
    function delelteThisItinerary(id, itinerary) {
        deleteItinerary(id)
        itinerary.remove()
    }
    return (
        <div className="myTineraries-container">
            {itineraries?.length ? <LinkRouter to={`/`} className="myTineraries-btn">Back to Home</LinkRouter>
            :<h1>Not Itineraries Yet...</h1>}
            {itineraries?.map((itinerary) => {
                return (
                    <div className="myTineraries-item" key={itinerary._id}>
                        
                        <Itinerary data={itinerary}>
                        <button type="button" onClick={(e) => { delelteThisItinerary(itinerary._id,e.target.parentElement) }} >
                        Delete
                        </button>
                        </Itinerary>
                    </div>
                )
            })}
        <LinkRouter to={`/`} className="myTineraries-btn">Back to Home</LinkRouter>
        </div>
    )
}
export default MyTineraries