import Input from "../components/Input";
import "../styles/EditCity.css"
import axios from "axios"
import { useEffect, useRef, useState } from "react";
export default function EditCity() {
    const [cities, setCities] = useState([])
    const selectEl = useRef(null)
    const [valueSelect,setValueSelect] = useState(null)
    const [backgroundIamge,setBackgroundIamge] = useState(null)
    const inputArray = [
        {
            name: "City",
            type: "text",
            placeholder: "...",
            value: ""
        },
        {
            name: "Country",
            type: "text",
            placeholder: "...",
            value: ""
        },
        {
            name: "Photo",
            type: "url",
            placeholder: "...",
            value: ""
        },
        {
            name: "Population",
            type: "number",
            placeholder: "...",
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
            placeholder: "...",
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
        let inputsForm = arrayForm.filter(element => element.value)
        console.log(inputsForm)
    }
    useEffect(() => {
        axios.get("http://localhost:4000/cities")
            .then(res => {
                const fetchCities = res.data.response
                setCities(fetchCities)
                setValueSelect(fetchCities[0]._id)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        if (valueSelect) {
            axios.get(`http://localhost:4000/cities/${valueSelect}`)
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