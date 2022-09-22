import { useState,useEffect } from 'react'
import{ useLikeItineraryMutation} from '../../features/actions/itinerariesAPI'
import Alert from '../Alert'

function Likes(props) {
    
    let id = props.itinerary._id
    const [likes, setLikes] = useState([]
    )
    const [likeOrDislike, {data: resLike, error}] = useLikeItineraryMutation() 
    const [showAlert,setShowAlert] = useState(false)
    function handleLikes(e){

            likeOrDislike(id)
    }
    useEffect(() =>{
        if (resLike){
            let newState = resLike.response
            setLikes(newState)
            setShowAlert(true)
        }
    },[resLike])

    useEffect(() =>{
        if (props.itinerary){
            setLikes(props.itinerary.likes)
        }
    },[props.itinerary])

    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            },5000)
        }
    }, [resLike, error])
    
    return (
        <div>
            {showAlert ?
                <Alert res={resLike} err={error} stop={() => setShowAlert(false)}/>
            : null}
            <button onClick={handleLikes}>
            💞{likes.length}
            </button>
        </div>
    )
}

export default Likes