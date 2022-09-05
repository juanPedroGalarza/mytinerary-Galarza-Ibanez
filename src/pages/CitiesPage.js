import TableList from "../components/TableList"
import "../styles/CitiesPage.css"
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {citiesAPI, useGetAllCitiesQuery, useGetFilterCitiesQuery} from '../features/actions/citiesAPI'

function CitiesPage() {
    const [searchValue,setSearchValue] = useState("")
        const handleValue = (e) => {
            setSearchValue(e.target.value)
        }

    let {
        data: cities, 
        error,
        isLoading,
        isSuccess,
        isFailed,
        } = useGetAllCitiesQuery()
        
        let content;
            if (isLoading){
                cities = []
            } else if(isSuccess){
                cities = cities.response
            }else if (error){
                cities= []
                //console.log(error)
        }

    return (
        <div className="CitiesPage-main">
            <h1 className="CitiesPage-title">Cities</h1>
            <input type="search" placeholder="Search" name="city" onChange={handleValue} className="citiesPage-search" />
            <TableList data={cities} />
        </div>
    )
}

export default CitiesPage
