import { useState } from "react"
import "../../styles/itinerary/Comments.css"
export default function Comments(props) {
    const comments = [
        {
            message: "🐙",
            user: {
                name: "Armando",
                surName: "Paredes",
                photo: "https://www.armandoparedes.com/static/950228c2b7910e69bb75c4688e5b8c5b/0ac58/laureles-1.jpg"
            }
        },
        {
            message: "🐙",
            user: {
                name: "Richard jr",
                surName: "Galeano",
                photo: "https://i.pinimg.com/736x/c4/02/bd/c402bdca03a9e237d3368984547e2bdf.jpg"
            }
        },
        {
            message: "🐙",
            user: {
                name: "Rigoberto",
                surName: "De la Fuente",
                photo: "https://www.tonica.la/__export/1600634330723/sites/debate/img/2020/09/20/kirito-regresarx-en-una-nueva-adaptacixn-al-anime-.jpg_1902800913.jpg"
            }
        },
    ]
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
                    <p>{ comment.user.surName}</p>
                    <p>{ comment.user.mail}</p>
                </div>
                <div className="comments-message">
                    <p>
                        {comment.message}
                    </p>
                </div>
            </div>
        )
    }
    return (
        <>
        <button className="comments-button" type="button" onClick={handleOpen}>
            {open? "Close ":""}
            Comments
        </button>
            {open ?
        <div className="comments-container">
                {comments.map(viewComment)}
        </div>
                :null
            }
        </>
    )
}