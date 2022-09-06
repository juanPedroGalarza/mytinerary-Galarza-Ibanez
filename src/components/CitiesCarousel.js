import Carousel from "./Carousel"
import axios from "axios"
import { useEffect, useState } from "react"
import apiurl from "../api"
function CitiesCarousel() {
    const [cities,setCities] = useState([])
    useEffect(() => {
        axios.get(`${apiurl}/cities`)
            .then(res => setCities(res.data.response.slice(0,12)))
            .catch(error=> console.log(error))
    },[])
    return (
        <Carousel data={cities} range={4} start={0} interval={10} />
    )
}
export default CitiesCarousel