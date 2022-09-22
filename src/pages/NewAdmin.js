import { useState,useEffect, useRef } from "react"
import { useEditUserMutation } from "../features/actions/usersAPI"
import Alert from "../components/Alert"
import "../styles/NewAdmin.css"

function NewAdmin() {
const emailInput = useRef(null)
const [editUser, {data: newRole, error}] = useEditUserMutation()
const [showAlert, setShowAlert] = useState(false)


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
        <div className="newadmin-form">
            <div className='newadmin-background'/>
            <form  onSubmit={inputValue} >
            <input name="Email" type="email" placeholder="Insert email of the user" ref={emailInput} className="newadmin-input"/>
            <button type="submit" className="newadmin-btn"> Send </button>
            </form> 
            {showAlert ?
                <Alert res={newRole} err={error} stop={() => setShowAlert(false)} />
            : null}
        </div>
    )
}

export default NewAdmin

