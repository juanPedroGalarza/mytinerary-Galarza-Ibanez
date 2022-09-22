import { useState,useEffect } from 'react'
import{ useLikeItineraryMutation} from '../../features/actions/itinerariesAPI'


function Likes(props) {
    
    let id = props.itinerary._id
    const [likes, setLikes] = useState([]
    )
    const [likeOrDislike, {data: resLike, error}] = useLikeItineraryMutation() 
    
    function handleLikes(e){
        
            likeOrDislike(id)
    }
    useEffect(() =>{
        if (resLike){
            let newState = resLike.response
            setLikes(newState)
        }
    },[resLike])

    useEffect(() =>{
        if (props.itinerary){
            setLikes(props.itinerary.likes)
        }
    },[props.itinerary])

    return (
        <div>
            <button onClick={handleLikes}>
            💞{likes.length}
            </button>
        </div>
    )
}

export default Likes