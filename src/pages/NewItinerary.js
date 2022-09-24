import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Alert from "../components/Alert";
import Input from "../components/Input";
import { useGetAllCitiesBaseQuery} from "../features/actions/citiesAPI";
import { usePostItineraryMutation} from "../features/actions/itinerariesAPI";
import '../styles/NewItinerary.css'

export default function NewTinerary(props) {
    const selectEl = useRef(null);
    const [showAlert,setShowAlert] = useState(false)
    let { data: cities } = useGetAllCitiesBaseQuery('')
    const [newItinerary, {data: resNewItinerary, error}] = usePostItineraryMutation()
    const [cityId, setCityId] = useState()
    const {id}= useParams()
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
    const [loggedUser, setLoggedUser] = useState()
    const viewOptions = city =>{
        return (
            <option value={city._id} className="newtinerary-option" key={city._id}>{city.city}</option>
        )
    }

    const handleCity = () => {
    setCityId(selectEl.current.value)
    //console.log(selectEl.current.value)

    }
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setLoggedUser(user.id)
        }
    }, [loggedUser] )

    const putItinerary = (arrayform,e) => {
        let inputsForm = arrayform.filter(element => element.value)
        let itineraryData = inputsForm.reduce((values,input) => {
            values[input.name.toLowerCase()] = input.value
            return values
    
        },{})
        itineraryData.city = cityId
        let sendTags = itineraryData.tags.split(" ")
        itineraryData.tags = sendTags
        itineraryData.likes= []
        itineraryData.user = loggedUser
        newItinerary(itineraryData)
        setShowAlert(true)
    }

    useEffect(() => {
        if(selectEl.current.value){
            setCityId(selectEl.current.value)
        }
        if (id) {
            selectEl.current.value = id
        }
    }, [cities])

    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            },5000)
        }
    }, [resNewItinerary,error])
    

    return (
        <div className="newitinerary-main">
            <h1 className="newitinerary-title">New Itinerary</h1>
            <Input inputsData={inputArray} classPage="newitinerary" event={(arrayForm)=>putItinerary(arrayForm)}>
            <select name="city" className="newitineraries-select" ref={selectEl} onChange={handleCity} >
                    {cities?.map(viewOptions)}
                </select>
            </Input>
            {showAlert ?
                <Alert res={resNewItinerary} err={error} stop={() => setShowAlert(false)} />
            : null}
        </div>  
    )
}

