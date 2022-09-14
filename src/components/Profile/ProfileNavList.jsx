import { useEffect, useState } from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import "../../styles/profile/ProfileNavList.css"
function ProfileNavList(props) {
    const [open, setOpen] = useState(false)
    const user = props.user
    const loggout = () => {
        console.log("loggout")
        //aca iria el mutation de signOut
    }
    const initProfile = [
        {linkTo:"/signin",name:"Log In"},
        {linkTo:"/signup",name:"Sign Up"},
    ]
    const loggedProfile = [
        {linkTo:"/",name:"Sign Out",action:loggout},
        {linkTo:"/mytineraries",name:"MyTineraries"}
    ]
    const [profile,setProfile] = useState(initProfile)
    useEffect(() => {
        if (user) {
            setProfile(loggedProfile)
            if (user.role == "admin") {
                setProfile(loggedProfile.concat([{
                    linkTo: "/new-admin",
                    name: "New Admin"
                }]))
            }
        } else {
            setProfile(initProfile)
        }
    },[open])
    const viewProfile = (item) => {
        return (
            <li className='profileNavList-item'
                key={item.name}
                onClick={item.action} >
                <LinkRouter
                    to={item.linkTo}
                    className="profileNavList-item-link">
                    {item.name}
                </LinkRouter>
            </li>
        )
    }
    function handleList() {
        open? setOpen(false) : setOpen(true)
    }
    return (
        <div className='profileNavList'>
            <img className='profileNavList-img' src={user? user.photo:"https://i.ibb.co/jgp9dqj/user2.png"} onClick={handleList} />
            {open ?
            <ul className='profileNavList-list'>
                {profile.map(viewProfile)}
            </ul>
                :null
            }
        </div>
    )
}
export default ProfileNavList