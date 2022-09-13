import '../styles/SignInPage.css';
import Input from "../components/Input";
import { useUserSignInMutation } from "../features/actions/usersAPI";

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

    let [userSignIn] = useUserSignInMutation()
    const signUserForm =(arrayform) => {
        let data = arrayform.reduce((values,input)=>{
            values[input.name] = input.value
            return values
        }, {})
        data.from ="form"
        userSignIn(data)
    }


    return (
        <div className="signin-page-main">
            <Input inputsData={inputArray}  event={signUserForm} classPage="signin" />

        </div>
    )
}

export default SignIn