import Details from "../components/Details"
import { useParams } from 'react-router-dom'
import "../styles/CitiesPage.css" 
import { useGetOneCityQuery } from "../features/actions/citiesAPI"
import { useEffect, useState } from "react"
function City() {
    const {id} = useParams()
    const { data: resCity} = useGetOneCityQuery(id)
    const [city, setCity] = useState({})

    useEffect(() => {
        resCity && setCity(resCity)
    }, [resCity])
    
    return (  
        <div className="CitiesPage-main">
            <Details data={city} cityId={id} />
        </div>
    )
}


export default City