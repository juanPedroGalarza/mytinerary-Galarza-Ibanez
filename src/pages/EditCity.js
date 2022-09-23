import Input from "../components/Input";
import "../styles/EditCity.css"
import { useEditOneCityMutation, useGetAllCitiesBaseQuery, useGetACityMutation } from "../features/actions/citiesAPI";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "../components/Alert";

export default function EditCity() {
    const selectEl = useRef(null)
    let { data: cities } = useGetAllCitiesBaseQuery('')
    const [getACity, { data: city }] = useGetACityMutation()
    const [editOneCity, {data: editedCity,error}] = useEditOneCityMutation()
    const {id}= useParams()
    const [backgroundIamge,setBackgroundIamge] = useState(null)
    const [showAlert,setShowAlert] = useState(false)
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
            name: "Foundation",
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
    const handleCity = () => {
        getACity(selectEl.current.value)
    }
    const putCity = (arrayForm,e) => {
        let inputsForm = arrayForm.filter(element => element.value && element.name != "id")
        let dataCity = inputsForm.reduce((values,input) => {
            values[input.name.toLowerCase()] = input.value
            return values
        },{})
        editOneCity({id: city.response._id, data: dataCity})
        setShowAlert(true)
    }
    useEffect(() => {
        if (cities) {
            if (id) {
                getACity(id)
            } else {        
                getACity(cities?.response[0]._id)
            }
        }
        if (id) {
            selectEl.current.value = id
        }
    }, [cities])
    useEffect(() => {
        setBackgroundIamge(city?.response.photo)
    },[city])
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            },5000)
        }
    }, [editedCity,error])
    
    return (
        <div className="editCity-main" style={{ backgroundImage: `url(${backgroundIamge})` }}>
            <h1 className="editCity-title">Edit City</h1>
            <Input inputsData={inputArray} event={(arrayForm,e)=>putCity(arrayForm,e)} classPage="editCity">
                <select name="id" className="editCity-select" ref={selectEl} onChange={handleCity}>
                    {cities?.response.map(viewOptions)}
                </select>
            </Input>
            {showAlert ?
                <Alert res={editedCity} err={error} stop={() => setShowAlert(false)} />
            : null}
        </div>
    )
}