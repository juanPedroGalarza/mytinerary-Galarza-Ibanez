import TableList from "../components/TableList"
import "../styles/CitiesPage.css"
import axios from "axios";
import { useEffect, useState } from "react";


function CitiesPage() {

const [cities, setCities] = useState([])

useEffect(()=> {
        axios.get("http://localhost:4000/cities")
        .then(res => setCities(res.data.response))
},[])

    return (
        <div className="CitiesPage-main">
            <h1 className="CitiesPage-title">Cities</h1>
            <TableList data={cities} />
        </div>
    )
}

export default CitiesPage
