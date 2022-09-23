import Carousel from "./Carousel"
import {useGetAllCitiesQuery} from '../features/actions/citiesAPI'

function CitiesCarousel() {
 
    let {
        data: cities,
        } = useGetAllCitiesQuery({name:'',order:''})


    return (
        <Carousel data={cities} range={4} start={0} interval={10} />
    )
}
export default CitiesCarousel