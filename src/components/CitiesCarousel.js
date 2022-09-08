import Carousel from "./Carousel"
import {useGetAllCitiesQuery} from '../features/actions/citiesAPI'

function CitiesCarousel() {
 
    let {
        data: cities,
        error,
        isLoading,
        isSuccess,
        isFailed,
        } = useGetAllCitiesQuery('')
        
        if (isLoading){
            cities = []
        } else if(isSuccess){
            cities = cities.response
        }else if (error){
            cities= []
            console.log(error)
    }


    return (
        <Carousel data={cities} range={4} start={0} interval={10} />
    )
}
export default CitiesCarousel