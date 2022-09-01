import Details from "../components/Details"
import { useParams } from 'react-router-dom'
import "../styles/CitiesPage.css" 
import { useEffect, useState } from "react"
import axios from "axios"

function City() {
    const {id} = useParams()
    const [name, setName] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:4000/cities/${id}`)
        .then(res => {setName(res.data.response) 
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    return (  
        <div className="CitiesPage-main">
            <Details data={name} cityId={id} />
        </div>
    )
}


export default City