import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import{ useLikeItineraryMutation} from '../../features/actions/itinerariesAPI'

import Alert from '../Alert'

function Likes(props) {
    const logged = useSelector(state => state.user.logged)
    const userMaterial = useSelector(state=> state.user.user)
    const [liked, setLiked] = useState(false)
    let id = props.itinerary._id
    const [likes, setLikes] = useState([]
    )
    const [likeOrDislike, {data: resLike, error}] = useLikeItineraryMutation() 
    const [showAlert,setShowAlert] = useState(false)
    function handleLikes(e){
            setShowAlert(true)
            likeOrDislike(id)
            liked? setLiked(false) : setLiked(true)
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
            likes.includes(userMaterial.id) || !logged? setLiked(true) 
            : setLiked(false)

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
            <button onClick={logged? handleLikes : null}>
            {liked? 
            '🖤' :'🤍'
            } {likes.length}
            </button>
        </div>
    )
}

export default Likes