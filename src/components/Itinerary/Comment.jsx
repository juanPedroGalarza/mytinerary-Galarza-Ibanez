import { useRef, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useModifyCommentMutation } from "../../features/actions/commentsAPI"
export default function Comment(props) {
    const token = props.token
    const userId = props.userId
    const delComment = props.delComment
    const [comment,setComment] = useState(props.comment)
    const [editComment, setEditComment] = useState(false)
    const [modifyComment,{data:editedComment}] = useModifyCommentMutation()
    const inputComment = useRef(null)
    const userRole = useSelector(state=>state.user.user.role)
    function saveComment() {
        modifyComment({
            data: {
                comment: inputComment.current.value,
            },
            id: comment._id,
            token
        })
    }
    useEffect(() => {
        if (editedComment) {
            setComment(editedComment)
        }
    },[editedComment])


    return (
        <>
            {editComment ?
                <form className="comments-item" 
                    onSubmit={() => {
                    saveComment()
                    setEditComment(false)
                }}>
                <div className="comments-user">
                    <img src={props.comment.user.photo} alt={props.comment.user.name} className="comments-user-photo"/>
                    <p>{ props.comment.user.name}</p>
                    <p>{ props.comment.user.lastname}</p>
                    <p>{ props.comment.user.mail}</p>
                </div>
                    <div className="comments-message">
                    <button type="submit" className="comments-save">
                        Save
                    </button>
                    <button type="button" className="comments-save-cancel"
                        onClick={()=>setEditComment(false)}>Cancel</button>
                    <input type="text"
                            name="comment"
                            defaultValue={comment.comment}
                            ref={inputComment} />
                </div>
                </form>
            :
            <div className="comments-item">
                    {props.comment.user ?
                <div className="comments-user">
                    <img src={props.comment.user.photo} alt={props.comment.user.name} className="comments-user-photo"/>
                    <p>{ props.comment.user.name}</p>
                    <p>{ props.comment.user.lastname}</p>
                    <p>{ props.comment.user.mail}</p>
                </div>
                    :null}
                <div className="comments-message">
                    {comment.date ?
                            <span className="comments-date">
                                {new Date(comment.date).toDateString()}
                            </span> : null}
                    {userId == props.comment?.user._id || userRole === 'admin' ?
                    <div className="comments-settings"> 
                        <div className="comments-edit"
                        onClick={() => setEditComment(true)}>
                        Edit
                        </div>
                        <div className="comments-delete"
                        onClick={() => delComment({id:comment._id,token})}>
                        Delete
                        </div>
                    </div>
                        : null}
                    <p>
                    {comment.comment}
                    </p>
                </div>
            </div>
        }
        </>
    )
}