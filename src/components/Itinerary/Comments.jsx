import { useState } from "react"
import "../../styles/itinerary/Comments.css"
import { useGetItinerariesCommentQuery } from "../../features/actions/commentsAPI"

export default function Comments(props) {
    let id = props.itinerary

    let{
        data: comments,
        error,
        isLoading,
        isSuccess,
        }= useGetItinerariesCommentQuery(id)

    if (isLoading){
        comments= []
    } else if(isSuccess){
        comments = comments.response
    }

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        open ?
        setOpen(false)
        :setOpen(true)
    }
    const viewComment = (comment) => {
        return (
            <div className="comments-item" key={comment.user.name}>
                <div className="comments-user">
                    <img src={comment.user.photo} alt={comment.user.name} className="comments-user-photo"/>
                    <p>{ comment.user.name}</p>
                    <p>{ comment.user.lastName}</p>
                    <p>{ comment.user.mail}</p>
                </div>
                <div className="comments-message">
                    <p>
                        {comment.comment}
                    </p>
                </div>
            </div>
        )
    }
    return (
        <>
        {comments.length?
        <button className="comments-button" type="button" onClick={handleOpen}>
            {open? "Close ":""}
            Comments
        </button> : <p>There are not comments here...</p> }
            {open ?
        <div className="comments-container">
                {comments?.map(viewComment)}
        </div>
                :null
            }
        </>
    )
}