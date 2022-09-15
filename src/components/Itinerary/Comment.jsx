import { useRef, useState, useEffect } from "react"
import { useModifyCommentMutation } from "../../features/actions/commentsAPI"
export default function Comment(props) {
    const userId = props.userId
    const [comment,setComment] = useState(props.comment)
    const [editComment, setEditComment] = useState(false)
    const [modifyComment,{data:editedComment}] = useModifyCommentMutation()
    const inputComment = useRef(null)
    function saveComment() {
        modifyComment({
            data: {
                comment: inputComment.current.value,
                date: new Date()
            },
            id: comment._id
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
                <form className="comments-item" key={comment._id}
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
            <div className="comments-item" key={comment._id}>
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
                                {comment.date.getDay}
                            </span> : null}
                    {userId == props.comment?.user._id ?
                    <div className="comments-edit"
                        onClick={() => setEditComment(true)}>
                        Edit
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