import { useState,useEffect, useRef } from "react"
import { useEditUserMutation } from "../features/actions/usersAPI"
import Alert from "../components/Alert"
import "../styles/NewAdmin.css"
import { useSelector } from "react-redux"


function NewAdmin() {
const emailInput = useRef(null)
const [editUser, {data: newRole, error}] = useEditUserMutation()
const [showAlert, setShowAlert] = useState(false)
const logged = useSelector(state=>state.user.user)

useEffect(() => {
    if (showAlert) {
        setTimeout(() => {
            setShowAlert(false)
        },5000)
    }
},[newRole, error])
    

    const inputValue = (e) => {
        e.preventDefault()
        let email= emailInput.current.value
        let data ={
            email: email,
            role: "admin"
            }
        editUser(data)
        e.target.reset()
        setShowAlert(true)
    }

    return (
        <> 
        <div className="newadmin-main">
            <h1 className="newadmin-title"> New Admin</h1>
                <div className='newadmin-background'/>
                <div className="newadmin-div">
                <h2 className="newadmin-h2"> Wich user would you like to add to our staff?</h2>
                <form  onSubmit={inputValue} className="newadmin-form">
                <input name="Email" type="email" placeholder="Insert email of the user" ref={emailInput} className="newadmin-input"/>
                <button type="submit" className="newadmin-btn"> Send </button>
                </form> 
                {showAlert ?
                    <Alert res={newRole} err={error} stop={() => setShowAlert(false)} />
                : null}
            </div>
        </div>
        </>
    )
}

export default NewAdmin

