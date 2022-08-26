import { useState } from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import "../../styles/profile/ProfileNavList.css"
function ProfileNavList() {
    const [open,setOpen] = useState(false)
    const profile = [
        {linkTo:"/login",name:"Log In"},
        {linkTo:"/signup",name:"Sign Up"},
    ]
    const viewProfile = (item) => {
        return (
            <li className='ProfileNavList-item' key={item.name}>
                <LinkRouter to={item.linkTo} className="ProfileNavList-item-link">{item.name}</LinkRouter>
            </li>
        )
    }
    function handleList() {
        open? setOpen(false) : setOpen(true)
    }
    return (
        <div className='ProfileNavList'>
            <img className='ProfileNavList-img' src="https://i.ibb.co/jgp9dqj/user2.png" onClick={handleList} />
            {open ?
            <ul className='ProfileNavList-list'>
                {profile.map(viewProfile)}
            </ul>
                :null
            }
        </div>
    )
}
export default ProfileNavList