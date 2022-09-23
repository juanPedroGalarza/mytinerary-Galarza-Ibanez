import { useState, useRef, useEffect } from "react"
import "../../styles/itinerary/Comments.css"
import { useCreateCommentMutation, useGetItinerariesCommentMutation, useDeleteCommentMutation } from "../../features/actions/commentsAPI"
import Comment from "./Comment"
import { useSelector } from "react-redux"

export default function DisplayComments(props) {
    let id = props.itinerary
    const userId = useSelector(state=>state.user.user.id)
    const inputCommentPost = useRef()
    const [createComment, {data: resPost}] = useCreateCommentMutation()
    const [deleteComment, {data: resDel}] = useDeleteCommentMutation()
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const token = localStorage.getItem("token")
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
    let [getItinerariesComment, { data: resComments, isSuccess }] = useGetItinerariesCommentMutation(id)
    const [comments, setComments] = useState([])
    useEffect(() => {
        getItinerariesComment(id)
    }, [open, resPost, resDel])
    useEffect(() => {
        if (isSuccess) {   
            setComments(resComments)
        }
    },[resComments])
    const viewComment = (commentData) => {
        return (
            <Comment key={commentData._id} comment={commentData} userId={userId} delComment={deleteComment} token={token} />
        )
    }
    const createCommentForm = () => {
        const postComment = (e) => {
            e.preventDefault()
            let commentData = {
                comment: inputCommentPost.current.value,
                itinerary: id,
            }
            createComment({ comment:commentData,token })
            setOpen(true)
            setOpenEdit(false)
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
                                required/>
                    </div>
                        <button type="submit" className="comments-post-btn">Post</button>
                        <button type="button" className="comments-post-cancel"
                        onClick={handleOpenEdit}>Cancel</button>
                </form>
                    : <button className="comments-message-post" type="button" onClick={handleOpenEdit}>
                        Post a comment</button>}
            </>
        )
    }
    return (
        <>
        {comments.length?
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