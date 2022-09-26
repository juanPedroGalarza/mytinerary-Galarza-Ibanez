import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import{ useLikeItineraryMutation} from '../../features/actions/itinerariesAPI'

import Alert from '../Alert'

function Likes(props) {
    const logged = useSelector(state => state.user.logged)
    const userMaterial = useSelector(state=> state.user.user)
    const [liked, setLiked] = useState(true)
    let id = props.itinerary._id
    const [likes, setLikes] = useState([])
    const [likeOrDislike, {data: resLike, error}] = useLikeItineraryMutation() 
    const [showAlert, setShowAlert] = useState(false)
    
    function handleLikes(){
            setShowAlert(true)
            likeOrDislike(id)
            likes.includes(userMaterial.id) ?
                setLiked(false):setLiked(true)
    }

    useEffect(() =>{
        if (resLike){
            let newState = resLike.response
            setLikes(newState)
        }
    },[resLike])
    useEffect(() => {
        if (likes && userMaterial.id) {
            likes.includes(userMaterial.id)? setLiked(true):setLiked(false)
        }
    },[likes, userMaterial])

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
            <button className='itinerary-likes' onClick={logged ? handleLikes : null}>
                <img
                    className={`itinerary-likes-img ${liked? 'liked':''}`}
                    src='/img/heart-button.png' />
                {likes.length}
            </button>
        </div>
    )
}

export default Likes