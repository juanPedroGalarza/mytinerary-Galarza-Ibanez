import TableList from "../components/TableList"
import "../styles/CitiesPage.css"
import { useState, useRef } from "react";
import { useGetAllCitiesQuery} from '../features/actions/citiesAPI'

function CitiesPage() {
    const [searchValue,setSearchValue] = useState()
    const search = useRef('')
        const handleValue = (e) => {
            // setSearchValue(e.target.value)
            //console.log(search?.current.value)
            setSearchValue(search.current.value)
        }
        
    let {
        data: cities, 
        error,
        isLoading,
        isSuccess,
        isFailed,
        } = useGetAllCitiesQuery(search.current? search.current.value : '')

        let content;
            if (isLoading){
                cities = []
            } else if(isSuccess){
                cities = cities.response
            }else if (isFailed){
                cities= []
                // console.log(error)
        } 
        
    return (
        <div className="CitiesPage-main">
            <h1 className="CitiesPage-title">Cities</h1>
            <input type="search" placeholder="Search" name="city" ref={search} onChange={handleValue} className="citiesPage-search" />
            <TableList data={cities} />
        </div>
    )
}

export default CitiesPage
