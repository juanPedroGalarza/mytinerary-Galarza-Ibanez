import Input from "../components/Input"
import "../styles/NewCity.css"
import {usePostOneCityMutation} from "../features/actions/citiesAPI"
function NewCity() {
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
            name: "Foundation",
            type: "date",
            placeholder: "Type the date of foundation of the city!",
            value: ""
        },
        {
            name: "Description",
            type: "text",
            placeholder: "Tell us about the city!",
            value: ""
        }
    ]
    let [postOneCity] = usePostOneCityMutation()
    const postCity = (arrayform) =>{
        let inputsForm = arrayform
        let data = inputsForm.reduce((values,input) => {
            values[input.name.toLowerCase()] = input.value
            return values
        }, {})
        postOneCity(data)
    }
    return (
        <div className="NewCity-main">
            <div className="NewCity-background"> </div>
            <h1 className="NewCity-title">NewCity</h1>
            <Input inputsData={inputArray} event={(arrayForm)=>postCity(arrayForm)} classPage="NewCity"/>
        </div>
    )   
}
export default NewCity