
import { useRef, useEffect } from "react"
import * as jose from "jose"
import { useUserSignUpMutation } from "../../features/actions/usersAPI"


export default function GoogleSignUp() {
    const buttonDiv= useRef(null)
    //console.log(buttonDiv.current)
    let [newUser]= useUserSignUpMutation()


    async function handleCredentialResponse(response){
        let userObject = jose.decodeJwt(response.credential)
        console.log(userObject)
        let data ={
                name: userObject.given_name,
                lastName: userObject.family_name,
                photo: userObject.picture,
                country: "EnriGoblin",
                email: userObject.email,
                password: userObject.sub,
                role: 'user',
                from: 'google'
        }
        newUser(data)
    } 
    
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
