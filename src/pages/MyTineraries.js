import React, { useEffect, useState } from "react";
import "../styles/MyTineraries.css"
import { useDeleteItineraryMutation, useGetItinerariesUsersMutation } from "../features/actions/itinerariesAPI";
import Itinerary from "../components/Itinerary/Itinerary"
import { Link as LinkRouter, useLocation } from 'react-router-dom'
const MyTineraries = () => {
    const [userId, setUserId] = useState("")
    const [itineraries, setItineraries] = useState([])
    const location = useLocation()
    const [getItinerariesUsers,{
        data: resItineraries,
        isSuccess
    }] = useGetItinerariesUsersMutation(userId)
    const [deleteItinerary, {data:resDel}] = useDeleteItineraryMutation()
    useEffect(() => {
        setUserId(JSON.parse(localStorage.getItem("user"))?.id)
    }, [location.pathname])
    useEffect(() => {
        getItinerariesUsers(userId)
    },[resDel, userId])
    useEffect(() => {
        if (isSuccess) {
            setItineraries(resItineraries)
        }
    },[resItineraries])
    return (
        <div className="myTineraries-container">
            {itineraries.length ? <LinkRouter to={`/`} className="myTineraries-btn">Back to Home</LinkRouter>
            :<h1>Not Itineraries Yet...</h1>}
            {itineraries.map((itinerary) => {
                return (
                    <div className="myTineraries-item" key={itinerary._id}>
                        
                        <Itinerary data={itinerary}>
                        <button type="button" className="delete-itinerary-btn" onClick={(e) => { deleteItinerary(itinerary._id) }} >
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