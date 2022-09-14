import { useState, useRef } from "react";
import Input from "../components/Input";
import { useGetAllCitiesQuery } from "../features/actions/citiesAPI";
import { usePostItineraryMutation} from "../features/actions/itinerariesAPI";
import '../styles/NewItinerary.css'

export default function NewTinerary() {
    const selectEl = useRef(null);
    let { data: cities } = useGetAllCitiesQuery('')
    const [newItinerary] = usePostItineraryMutation()
    const [cityId, setCityId] = useState()
    const inputArray =[
        {
            name: "Name",
            type: "text",
            placeholder: "Choose a title for you itinerary!",
            value: ""
        },
        {
            name: "Description",
            type: "text",
            placeholder: "Tell us about it!",
            value: ""
        },
        {
            name: "Price",
            type: "number",
            placeholder: "Estimate the cost!",
            value: ""
        },
        {
            name: "Tags",
            type: "text",
            placeholder: "Dont forget to add tags!",
            value: ""
        },
        {
            name: "Duration",
            type: "number",
            placeholder: "Whats the duration of the itinerary?",
            value: ""
        },
    ]

    const viewOptions = city =>{
        return (
            <option value={city._id} className="newtinerary-option" key={city._id}>{city.city}</option>
        )
    }

    const handleCity = () => {
    setCityId(selectEl.current.value)
    //console.log(selectEl.current.value)
    }

    const putItinerary = (arrayform,e) => {
        let inputsForm = arrayform.filter(element => element.value)
        let itineraryData = inputsForm.reduce((values,input) => {
            values[input.name.toLowerCase()] = input.value
            return values
        },{})
        itineraryData.city = cityId
        itineraryData.likes= []
        itineraryData.user = '631e05052b99af3aa1792c59'
        newItinerary(itineraryData)
        console.log(itineraryData)
    }


    return (
        <div className="newitinerary-main">
            <h1 className="newitinerary-title">New Itinerary</h1>
            <Input inputsData={inputArray} classPage="newitinerary" event={(arrayForm)=>putItinerary(arrayForm)}>
            <select name="city" className="newitineraries-select" ref={selectEl} onChange={handleCity} >
                    {cities?.response.map(viewOptions)}
                </select>
            </Input>
        </div>  
    )
}

