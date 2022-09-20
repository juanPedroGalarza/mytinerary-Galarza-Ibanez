import { useEffect, useState } from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import { useUserSignOutMutation } from '../../features/actions/usersAPI'
import "../../styles/profile/ProfileNavList.css"
import Alert from "../Alert";

function ProfileNavList(props) {
    const [open, setOpen] = useState(false)
    let [userSignOut, {data: resSignOut, error}] = useUserSignOutMutation()
    const user = props.user
    const [showAlert,setShowAlert] = useState(false)
    let logged;
    const loggout = () => {
        //console.log("loggout")
        logged =  JSON.parse(localStorage.getItem('user'))
        userSignOut(logged)
        setShowAlert(true)
        localStorage.removeItem('user');

    }
    const initProfile = [
        {linkTo:"/signin",name:"Sign In"},
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

    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            },5000)
        }
    },[resSignOut, error])

    return (
        <div className='profileNavList'>
            <img className='profileNavList-img' src={user? user.photo:"https://i.ibb.co/jgp9dqj/user2.png"} onClick={handleList} />
            {open ?
            <ul className='profileNavList-list'>
                {profile.map(viewProfile)}
            </ul>
                :null
            }
            {showAlert ?
                <Alert res={resSignOut}  />
            : null}
        </div>
    )
}
export default ProfileNavList