import TableList from "../components/TableList"
import "../styles/CitiesPage.css"
import axios from "axios";
import { useEffect, useState } from "react";
import apiurl from "../api";

function CitiesPage() {
    const [cities, setCities] = useState([])
    const [searchValue,setSearchValue] = useState("")
    const handleValue = (e) => {
        setSearchValue(e.target.value)
    }
    useEffect(() => {
        if (searchValue) {
            axios.get(`${apiurl}/cities/?city=${searchValue}`)
            .then(res => setCities(res.data.response))
            .catch(err => console.log(err))
        } else {
            axios.get(`${apiurl}/cities`)
            .then(res => setCities(res.data.response))
            .catch(err => console.log(err))
        }
    },[searchValue])
    return (
        <div className="CitiesPage-main">
            <h1 className="CitiesPage-title">Cities</h1>
            <input type="search" placeholder="Search" name="city" onChange={handleValue} className="citiesPage-search" />
            <TableList data={cities} />
        </div>
    )
}

export default CitiesPage
