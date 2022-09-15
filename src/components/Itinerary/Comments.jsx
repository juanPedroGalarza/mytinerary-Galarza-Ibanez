import { useState, useRef, useEffect } from "react"
import "../../styles/itinerary/Comments.css"
import { useCreateCommentMutation, useGetItinerariesCommentMutation } from "../../features/actions/commentsAPI"
import Comment from "./Comment"

export default function Comments(props) {
    let id = props.itinerary
    const userId = props.userId
    const inputCommentPost = useRef()
    const [createComment] = useCreateCommentMutation()
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const handleOpen = () => {
        open ?
        setOpen(false)
        :setOpen(true)
    }
    const handleOpenEdit = () => {
        openEdit ?
        setOpenEdit(false)
        :setOpenEdit(true)
    }
    let [getItinerariesComment,{data: comments}]= useGetItinerariesCommentMutation(id)
    useEffect(() => {
        if (!open) {   
            getItinerariesComment(id)
        }
    },[open,openEdit])
    const viewComment = (commentData) => {
        return (
            <Comment comment={commentData} userId={userId} />
        )
    }
    const createCommentForm = () => {
        const postComment = (e) => {
            e.preventDefault()
            let commentData = {
                comment: inputCommentPost.current.value,
                user: userId,
                itinerary: id,
                date: new Date()
            }
            createComment(commentData)
            handleOpenEdit()
        }
        return (
            <>
                {openEdit ?
                <form className="comments-post"
                onSubmit={postComment}>
                    <div className="comments-message">
                        <input type="text"
                                name="comment"
                                ref={inputCommentPost}
                                required="true"/>
                    </div>
                        <button type="submit" className="comments-post-btn">Post</button>
                        <button type="button" className="comments-post-cancel"
                        onClick={handleOpenEdit}>Cancel</button>
                </form>
                    : <button type="button" onClick={handleOpenEdit}>
                        Post a comment</button>}
            </>
        )
    }
    return (
        <>
        {comments?.length?
        <button className="comments-button" type="button" onClick={handleOpen}>
            {open? "Close ":""}
            Comments
        </button> : <p className="no-comments">There are not comments here...</p> }
            {open ?
        <div className="comments-container">
                    {comments?.map(viewComment)}
                    {userId ? createCommentForm() :
                    <p>Sign up for post a comment</p>}
        </div>
                :
                userId ? createCommentForm() :
                    <p>Sign up for post a comment</p>
            }
        </>
    )
}