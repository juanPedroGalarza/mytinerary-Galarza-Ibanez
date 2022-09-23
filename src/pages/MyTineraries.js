import React, { useEffect, useState } from "react";
import "../styles/MyTineraries.css"
import { useDeleteItineraryMutation, useGetItinerariesUsersMutation } from "../features/actions/itinerariesAPI";
import Itinerary from "../components/Itinerary/Itinerary"
import { Link as LinkRouter} from 'react-router-dom'
import { useSelector } from "react-redux";

const MyTineraries = () => {

    const [itineraries, setItineraries] = useState([])
    const [getItinerariesUsers,{
        data: resItineraries,
        isSuccess
    }] = useGetItinerariesUsersMutation()
    const user = useSelector(state => state.user.user)
    const [deleteItinerary, {data:resDel}] = useDeleteItineraryMutation()
    useEffect(() => {
        getItinerariesUsers()
    },[resDel, user])
    useEffect(() => {
        if (isSuccess) {
            setItineraries(resItineraries)
        }
    },[resItineraries])
    return (
        <div className="myTineraries-container">
            <div className='mytineraries-background'/>
            {itineraries.length ? <LinkRouter to={`/`} className="myTineraries-btn">Back to Home</LinkRouter>
            :<h1>Not Itineraries Yet...</h1>} :
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