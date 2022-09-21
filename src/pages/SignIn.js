import '../styles/SignInPage.css';
import Input from "../components/Input";
import { useUserSignInMutation } from "../features/actions/usersAPI";
import GoogleSignIn from '../components/Users/GoogleSignIn';
import { useEffect, useState } from 'react';
import Alert from "../components/Alert";
import { useDispatch } from 'react-redux';
import {logIn, setCredentials} from "../features/user/userSlice"
import { useNavigate } from 'react-router-dom';
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
    const dispatch = useDispatch()
    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate()
    let [userSignIn, {data: resSignIn, error}] = useUserSignInMutation()
    useEffect(() => {
        if (resSignIn) {
            dispatch(setCredentials(resSignIn.response))
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
    const stopAlert = () => {
        setShowAlert(false)
        dispatch(logIn())
        navigate("/")
    }
    useEffect(() => {
        if (showAlert && (resSignIn || error)) {
            setTimeout(() => {
                stopAlert()
            },5000)
        }
    },[resSignIn, error])


    return (
        <div className="signin-page-main">
            <Input inputsData={inputArray}  event={signUserForm} classPage="signin" />
            <GoogleSignIn />
            {showAlert ?
                <Alert res={resSignIn} err={error} stop={stopAlert} />
            : null}
        </div>
    )
}

export default SignIn
