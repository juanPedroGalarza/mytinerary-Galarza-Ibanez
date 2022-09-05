import Carousel from "./Carousel"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import citiesActions from "../features/actions/citiesActions"

function CitiesCarousel() {
    // const [cities,setCities] = useState([])
    
    // useEffect(() => {
    //     axios.get("http://localhost:4000/cities")
    //         .then(res => setCities(res.data.response.slice(0,12)))
    //         .catch(error=> console.log(error))
    // },[])

    const dispatch = useDispatch();
    const cities = useSelector((state)=>state.citiesReducer.cities
    ) 
    useEffect(()=>{
        dispatch(citiesActions.getCities())
    },[]) 

    return (
        <Carousel data={cities} range={4} start={0} interval={10} />
    )
}
export default CitiesCarousel