import '../styles/SignInPage.css';
import Input from "../components/Input";
import { useUserSignInMutation } from "../features/actions/usersAPI";
import GoogleSignIn from '../components/Users/GoogleSignIn';
import { useEffect } from 'react';
function SignIn() {
    const inputArray =[
        {
            name: "email",
            type: "email",
            placeholder: "Write your email here",
            value: ""
        },
        {
            name: "password",
            type: "password",
            placeholder: "Insert your password",
            value: ""
        }
    ]

    let [userSignIn, {data}] = useUserSignInMutation()
    function localUser(dataUser) {
        if (localStorage.getItem("user")) {
            return true
        }
        localStorage.setItem("user", JSON.stringify(dataUser))
        return false

    }
    useEffect(() => {
        if (data) {
            const isLogged = localUser(data.user)
            //isLogged se usara luego para verificar si ya esta logeado
        }
    },[data])
    const signUserForm =(arrayform) => {
        let inputsForm = arrayform.filter(element => element.value)
        let data = inputsForm.reduce((values,input)=>{
            values[input.name] = input.value
            return values
        }, {})
        data.from ="form"
        userSignIn(data)
    }


    return (
        <div className="signin-page-main">
            <Input inputsData={inputArray}  event={signUserForm} classPage="signin" />
            <GoogleSignIn localUser={localUser} />
        </div>
    )
}

export default SignIn
