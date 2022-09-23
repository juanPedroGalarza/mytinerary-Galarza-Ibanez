import Carousel from "./Carousel"
import {useGetAllCitiesBaseQuery} from '../features/actions/citiesAPI'

function CitiesCarousel() {
 
    let {
        data: cities,
        } = useGetAllCitiesBaseQuery()


    return (
        <Carousel data={cities?.slice(0,12)} range={4} start={0} interval={10} />
    )
}
export default CitiesCarousel