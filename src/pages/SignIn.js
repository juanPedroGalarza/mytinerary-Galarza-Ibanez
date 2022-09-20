import '../styles/SignInPage.css';
import Input from "../components/Input";
import { useUserSignInMutation } from "../features/actions/usersAPI";
import GoogleSignIn from '../components/Users/GoogleSignIn';
import { useEffect, useState } from 'react';
import Alert from "../components/Alert";

function SignIn() {
    const inputArray =[
        {
            name: "Email",
            type: "email",
            placeholder: "Write your email here",
            value: ""
        },
        {
            name: "Password",
            type: "password",
            placeholder: "Insert your password",
            value: ""
        }
    ]
    const [showAlert,setShowAlert] = useState(false)
    let [userSignIn, {data: resSignIn, error}] = useUserSignInMutation()
    function localUser(dataUser) {
        if (localStorage.getItem("user")) {
            return true
        }
        localStorage.setItem("user", JSON.stringify(dataUser))
        return false
    }
    useEffect(() => {
        if (resSignIn) {
            const isLogged = localUser(resSignIn.response.user)
            //isLogged se usara luego para verificar si ya esta logeado
        }
    },[resSignIn])
    const signUserForm =(arrayform) => {
        let inputsForm = arrayform.filter(element => element.value)
        let data = inputsForm.reduce((values,input)=>{
            values[input.name.toLowerCase()] = input.value
            return values
        }, {})
        data.from ="form"
        userSignIn(data)
        setShowAlert(true)
    }
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            },5000)
        }
    },[resSignIn, error])


    return (
        <div className="signin-page-main">
            <Input inputsData={inputArray}  event={signUserForm} classPage="signin" />
            <GoogleSignIn localUser={localUser} />
            {showAlert ?
                <Alert res={resSignIn} err={error} />
            : null}
        </div>
    )
}

export default SignIn
