import GoogleSignUp from "../components/Users/GoogleSignUp";
import '../styles/SignUpPage.css';
import Input from "../components/Input";
import { useUserSignUpMutation } from "../features/actions/usersAPI";

function SignUp() {
    const inputArray =[
        
        {
            name: "name",
            type: "text",
            placeholder: "Write your name here!",
            value: ""
        },
        {
            name: "lastName",
            type: "text",
            placeholder: "Write your last name here!",
            value: ""
        },
        {
            name: "email",
            type: "email",
            placeholder: "Write your email here",
            value: ""
        },
        {
            name: "country",
            type: "text",
            placeholder: "Where are you from?",
            value: ""
        },
        {
            name: "password",
            type: "password",
            placeholder: "Insert your password",
            value: ""
        },
        {
            name: "photo",
            type: "url",
            placeholder: "Insert the image url for your profile picture!",
            value: ""
        },
    ]

    let [userSignUp] = useUserSignUpMutation()
    const signUserForm =(arrayform) => {
        let inputsForm = arrayform.filter(element => element.value)
        let data = inputsForm.reduce((values,input)=>{
            values[input.name] = input.value
            return values
        }, {})
        console.log(data)
        
        data.role = "user"
        data.from ="form"
        userSignUp(data)
    }


    return (
        <div className="signup-page-main">
            <Input inputsData={inputArray}  event={signUserForm} classPage="signup" />
            <GoogleSignUp  />

        </div>
    )
}

export default SignUp