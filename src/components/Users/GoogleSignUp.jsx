
import { useRef, useEffect } from "react"
import * as jose from "jose"


export default function GoogleSignUp() {
    const buttonDiv= useRef(null)
    //console.log(buttonDiv.current)

    async function handleCredentialResponse(response){
        let userObject = jose.decodeJwt(response.credential)
        console.log(userObject)


        // let data ={
        //     name: userObject.name,
        //         lastName: userObject.lastName,
        //         photo: userObject.photo,
        //         country: userObject.country,
        //         email: userObject.email,
        //         password: userObject.password,
        //         role: 'user',
        //         from: 'google'
        // }
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
                <div ref={buttonDiv}></div>

            </div>
        )
    }
