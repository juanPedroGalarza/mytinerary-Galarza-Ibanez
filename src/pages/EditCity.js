import Input from "../components/Input";
import "../styles/EditCity.css"
import axios from "axios"
import { useEffect, useRef, useState } from "react";
import apiurl from "../api";
export default function EditCity() {
    const [cities, setCities] = useState([])
    const selectEl = useRef(null)
    const [valueSelect,setValueSelect] = useState(null)
    const [backgroundIamge,setBackgroundIamge] = useState(null)
    const inputArray = [
        {
            name: "City",
            type: "text",
            placeholder: "Type the name of the city!",
            value: ""
        },
        {
            name: "Country",
            type: "text",
            placeholder: "Type the country where the city is from!",
            value: ""
        },
        {
            name: "Photo",
            type: "url",
            placeholder: "Insert the image url o the city!",
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
            placeholder: "...",
            value: ""
        },
        {
            name: "Description",
            type: "text",
            placeholder: "Tell us about the city!",
            value: ""
        }
    ]
    const viewOptions = city => {
        return (
            <option value={city._id} className="editCity-option" key={city._id}>{city.city}</option>
        )
    }
    const handleValue = () => {
        setValueSelect(selectEl.current.value)
    }
    const putCity = (arrayForm,e) => {
        let inputsForm = arrayForm.filter(element => element.value && element.name != "id")
        let data = inputsForm.reduce((values,input) => {
            values[input.name.toLowerCase()] = input.value
            return values
        },{})
        axios.put(`${apiurl}/cities/${valueSelect}`,data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get(`${apiurl}/cities`)
            .then(res => {
                const fetchCities = res.data.response
                setCities(fetchCities)
                setValueSelect(fetchCities[0]._id)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        if (valueSelect) {
            axios.get(`${apiurl}/cities/${valueSelect}`)
            .then(res => setBackgroundIamge(res.data.response.photo))
            .catch(err => console.log(err))
        }
    },[valueSelect])
    return (
        <div className="editCity-main" style={{ backgroundImage: `url(${backgroundIamge})` }}>
            <h1 className="editCity-title">Edit City</h1>
            <Input inputsData={inputArray} event={(arrayForm,e)=>putCity(arrayForm,e)} classPage="editCity">
                <select name="id" className="editCity-select" ref={selectEl} onChange={handleValue}>
                    {cities.map(viewOptions)}
                </select>
            </Input>
        </div>
    )
}