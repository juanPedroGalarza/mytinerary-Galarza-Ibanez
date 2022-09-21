import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link as LinkRouter} from 'react-router-dom'
import { useUserSignOutMutation } from '../../features/actions/usersAPI'
import "../../styles/profile/ProfileNavList.css"
import Alert from "../Alert";
import {logOut} from "../../features/user/userSlice"
function ProfileNavList() {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    let [userSignOut, {data: resSignOut, error}] = useUserSignOutMutation()
    const user = useSelector(state => state.user.user)
    const [showAlert,setShowAlert] = useState(false)
    const loggout = () => {
        userSignOut(user)
        setShowAlert(true)
        dispatch(logOut())
        localStorage.removeItem('token');
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
        if (user.role) {
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
    },[user])
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
    const stopAlert = () => {
        setShowAlert(false)
    }
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                stopAlert()
            },5000)
        }
    },[resSignOut, error])

    return (
        <div className='profileNavList'>
            <img className='profileNavList-img' src={user.photo || "https://i.ibb.co/jgp9dqj/user2.png"} onClick={handleList} />
            {open ?
            <ul className='profileNavList-list' onClick={()=>setOpen(false)}>
                {profile.map(viewProfile)}
            </ul>
                :null
            }
            {showAlert ?
                <Alert res={resSignOut} err={error} stop={stopAlert} />
            : null}
        </div>
    )
}
export default ProfileNavList