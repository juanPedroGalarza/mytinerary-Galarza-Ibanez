import { useEditUserMutation, useGetUserQuery } from "../features/actions/usersAPI"
import { useState,useEffect, useRef } from "react"
import '../styles/profile/MyProfile.css'
import { useParams } from "react-router-dom"
import Alert from "../components/Alert"

export default function MyProfile() {
    const {id} = useParams()
    let {
        data: userdata,
    } = useGetUserQuery(id)

    const [userATM, setUserATM] = useState('')
    const [openEditor,setOpenEditor] = useState(false)
    const [editUser, {data: resUser, error}] = useEditUserMutation()
    const [showAlert,setShowAlert] = useState(false)

    function saveUserData(e){
        e.preventDefault()
        let newUserData = Array.from(e.target)
            newUserData = newUserData.filter((input) => input.value)
            newUserData = newUserData.reduce((values, input) => {
                values[input.name.toLowerCase()] = input.value

            return values
        }, {})

        editUser({...newUserData, email: userATM.email })
        setOpenEditor(false)
        setShowAlert(true)
    }

    useEffect(() => {
        if(userdata){
            setUserATM(userdata.response)
        }
    }, [userdata])

    useEffect(() => {
        if (resUser) {
            setUserATM(resUser.response)

            
        }
    }, [resUser])
    
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            },5000)
        }
    }, [resUser, error])

    return (
            <div className="profile-main">
                <div className="profile-background" />
                <h2 className="profile-username"> {userATM.name} Profile
                </h2>
            <div className="profile-container">
                {openEditor? null
    
                : <><img src={userATM.photo}                  className="profile-picture" />
                    <div className="profile-names">
                    <p className="profile-p">{userATM.name}</p>
                    <p className="profile-p">{userATM.lastname}</p>
                    </div>
                    <p className="profile-p">{userATM.country}</p>
                        <div> 
                </div></> }
        {openEditor?
            <form className="profile-form" onSubmit={saveUserData}>
                <input type="text" name="Name" defaultValue={userATM.name}  className="profile-input"/>
                <input type="text" name="Lastname" defaultValue={userATM.lastname} className="profile-input" />
                <input type="text" name="Country" defaultValue={userATM.country}  className="profile-input"/>
                <input type="url" name="Photo" defaultValue={userATM.photo} className="profile-input" />
                <button type="submit" className="profile-btn">
                    Save
                </button>
                <button type="button" className="profile-btn" onClick={() => setOpenEditor(false)}>
                        Cancel
                </button>    
            </form>
                : <button type="button" className="profile-btn" onClick={()=>setOpenEditor(true)}>
                Edit
            </button>}
            </div> 
            {showAlert ?
                <Alert res={resUser} err={error} stop={() => setShowAlert(false)}/>
            : null}
        </div>
    
    )
}
