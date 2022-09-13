
import { useRef, useEffect } from "react"
import * as jose from "jose"
import { useUserSignInMutation } from "../../features/actions/usersAPI"


export default function GoogleSignIn(props) {
    const buttonDiv= useRef(null)
    let [userSignIn,{data}]= useUserSignInMutation()
    

    async function handleCredentialResponse(response){
        let userObject = jose.decodeJwt(response.credential)
        let dataLogin = {
            email: userObject.email,
            password: userObject.sub,
            from: 'google'
        }
        userSignIn(dataLogin)
    } 
    useEffect(() => {
        if (data) {
            const isLogged = props.localUser(data.user)
            //isLogged se usara luego para verificar si ya esta logeado
        }
    },[data])
    useEffect(() =>{
        /*global google */
            google.accounts.id.initialize({
                client_id: "273414375096-cnn3h8j0u985jn49k0gsrp7cfjg00fm4.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                buttonDiv.current,
                { theme: "filled_black", size: "large", shape:"pill", text: "signup_with" }  // customization attributes
            );
        }, [])
        return (
            <div>
                <div ref={buttonDiv} ></div>
            </div>
        )
    }
