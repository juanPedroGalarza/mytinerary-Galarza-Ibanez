import TableList from "../components/TableList"
import "../styles/CitiesPage.css"
import { useEffect, useState } from "react";
import citiesActions from "../features/actions/citiesActions";
import {useDispatch, useSelector} from "react-redux"


function CitiesPage() {
   // const [cities, setCities] = useState([])
    const [searchValue,setSearchValue] = useState("")
    const handleValue = (e) => {
        setSearchValue(e.target.value)
    }

    const dispatch = useDispatch();

    const cities = useSelector((state)=>state.citiesReducer.cities
    ) 
    useEffect(()=>{
        dispatch(citiesActions.getCities(searchValue))
    },[searchValue]) 

    // useEffect(() => {
    //     if (searchValue) {
    //         axios.get(`http://localhost:4000/cities/?city=${searchValue}`)
    //         .then(res => setCities(res.data.response))
    //         .catch(err => console.log(err))
    //     } else {
    //         axios.get("http://localhost:4000/cities")
    //         .then(res => setCities(res.data.response))
    //         .catch(err => console.log(err))
    //     }
    // },[searchValue]) 


    return (
        <div className="CitiesPage-main">
            <h1 className="CitiesPage-title">Cities</h1>
            <input type="search" placeholder="Search" name="city" onChange={handleValue} className="citiesPage-search" />
            <TableList data={cities} />
        </div>
    )
}

export default CitiesPage
