import TableList from "../components/TableList"
import "../styles/CitiesPage.css"
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {useGetAllCitiesQuery} from '../features/actions/citiesAPI'

function CitiesPage() {
    const [searchValue,setSearchValue] = useState("")
        const handleValue = (e) => {
            setSearchValue(e.target.value)
        }

    const {
        data: cities, 
        error,
        isLoading,
        isSuccess,
        isFailed,
    } = useGetAllCitiesQuery()
        
    //console.log(cities)


    return (
        <div className="CitiesPage-main">
            <h1 className="CitiesPage-title">Cities</h1>
            <input type="search" placeholder="Search" name="city" onChange={handleValue} className="citiesPage-search" />
            <TableList data={cities} />
        </div>
    )
}

export default CitiesPage
