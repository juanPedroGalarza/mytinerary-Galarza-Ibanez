import { useState,useEffect, useRef } from "react"
import { useEditUserMutation } from "../features/actions/usersAPI"
import Alert from "../components/Alert"

import "../styles/NewAdmin.css"
import userEvent from "@testing-library/user-event"


function NewAdmin() {
const emailInput = useRef(null)
const [editUser, {data: newRole, error}] = useEditUserMutation()


useEffect(() => {


}, [error])
    

    const inputValue = (e) => {
        e.preventDefault()
        //console.log(emailInput.current.value)
        let email= emailInput.current.value
        let data ={
            email: email,
            role: "admin"
        }

        console.log(data)
        editUser(data)
        e.target.reset()
    }

    return (
        <div className="newadmin-form">
            <div className='newadmin-background'/>
            <form  onSubmit={inputValue} >
            <input name="Email" type="email" placeholder="Insert Email of the user" ref={emailInput} className="newadmin-input"/>
            <button type="submit" className="newadmin-btn"> Send </button>
            </form> 
        </div>
    )
}

export default NewAdmin

