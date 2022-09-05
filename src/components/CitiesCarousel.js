import Carousel from "./Carousel"
import {useGetAllCitiesQuery} from '../features/actions/citiesAPI'

function CitiesCarousel() {
 
    const {
        data: cities,
        error,
        isLoading,
        isSuccess,
        isFailed,
    } = useGetAllCitiesQuery()


    return (
        <Carousel data={cities} range={4} start={0} interval={10} />
    )
}
export default CitiesCarousel