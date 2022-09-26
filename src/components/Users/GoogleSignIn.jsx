
import { useRef, useEffect, useState } from "react"
import * as jose from "jose"
import { useUserSignInMutation } from "../../features/actions/usersAPI"
import Alert from "../Alert";
import { useDispatch } from 'react-redux';
import {logIn, setCredentials} from "../../features/user/userSlice"
import { useNavigate } from 'react-router-dom';
export default function GoogleSignIn(props) {
    const buttonDiv= useRef(null)
    let [userSignIn,{data: resSignIn, error}]= useUserSignInMutation()
    const [showAlert,setShowAlert] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stopAlert = () => {
        setShowAlert(false)
        if (resSignIn){
            dispatch(logIn())
            navigate("/")
            }
    }
    async function handleCredentialResponse(response){
        let userObject = jose.decodeJwt(response.credential)
        let dataLogin = {
            email: userObject.email,
            password: userObject.sub,
            from: 'google'
        }
        userSignIn(dataLogin)
        setShowAlert(true)
    } 
    useEffect(() => {
        if (resSignIn) {
            dispatch(setCredentials(resSignIn.response))
        }
    },[resSignIn])
    useEffect(() => {
        if (showAlert && (resSignIn || error)) {
            setTimeout(() => {
                stopAlert()
            },5000)
        }
    },[resSignIn, error])
    useEffect(() =>{
        /* global google */
            google.accounts.id.initialize({
                client_id: "273414375096-cnn3h8j0u985jn49k0gsrp7cfjg00fm4.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                buttonDiv.current,
                { theme: "filled_black", size: "large", shape:"pill", text: "signup_with" }
            );
        }, [])
        return (
            <div>
                <div ref={buttonDiv} ></div>
                {showAlert ?
                    <Alert res={resSignIn} err={error} stop={ stopAlert } />
            : null}
            </div>
        )
    }
