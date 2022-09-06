import Input from "../components/Input"
import "../styles/NewCity.css"
import axios from "axios"
import { useState } from "react";
import apiurl from "../api";
function NewCity(props) {
    const inputArray =[
        {
            name: "City",
            type: "text",
            placeholder: "type the name of the city!",
            value: ""
        },
        {
            name: "Country",
            type: "text",
            placeholder: "Type the contry where the city is from!",
            value: ""
        },
        {
            name: "Photo",
            type: "url",
            placeholder: "Insert the image url of the city!",
            value: ""
        },
        {
            name: "Population",
            type: "number",
            placeholder: "Type the population of the city!",
            value: ""
        },
        {
            name: "Fundation",
            type: "date",
            placeholder: "Type the date of fundation of the city!",
            value: ""
        },
        {
            name: "Description",
            type: "text",
            placeholder: "Tell us about the city!",
            value: ""
        }
    ]
    const [valueSelect,setValueSelect] = useState(null)
    const handleValue = (e) => {
        setValueSelect(e.current.value)
    }
    const postCity = (arrayform) =>{
        let inputsForm = arrayform
        let data = inputsForm.reduce((values,input) => {
            values[input.name.toLowerCase()] = input.value
            return values
        },{})
        axios.post(`${apiurl}/cities` ,data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className="NewCity-main">
            <div className="NewCity-background"> </div>
            <h1 className="NewCity-title">NewCity</h1>
            <Input inputsData={inputArray} event={(arrayForm)=>postCity(arrayForm)} onChange={handleValue}classPage="NewCity"/>
        </div>
    )   
}
export default NewCity