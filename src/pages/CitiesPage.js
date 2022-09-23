import TableList from "../components/TableList"
import "../styles/CitiesPage.css"
import { useState, useRef, useEffect } from "react";
import { useGetAllCitiesQuery} from '../features/actions/citiesAPI'

function CitiesPage() {
    const [searchValue, setSearchValue] = useState("")
    const [orderValue, setOrderValue] = useState("")
    const orderEl = useRef(null)
    const searchEl = useRef(null)
    const handleValue = () => {
        setSearchValue(searchEl.current.value)
    }
    const handleOrder = () => {
        setOrderValue(orderEl.current.value)
    }
        
    let { data: cities,} = useGetAllCitiesQuery({
        name: searchValue,
        order: orderValue
    })
    useEffect(() => {
        handleValue()
        handleOrder()
    },[])
    return (
        <div className="CitiesPage-main">
            <h1 className="CitiesPage-title">Cities</h1>
            <input type="search" placeholder="Search" name="city" ref={searchEl} onChange={handleValue} className="citiesPage-search" />
            <select ref={orderEl} className="citiesPage-order" name="order" onChange={handleOrder} defaultValue="none">
                <option value="none">-- select an order --</option>
                <optgroup label="Alphabetic">
                    <option value="a-z">a···z</option>
                    <option value="z-a">z···a</option>
                </optgroup>
                <optgroup label="Population">
                    <option value="up">lower to highest</option>
                    <option value="down">highest to lower</option>
                </optgroup>
            </select>
            <TableList data={cities} />
        </div>
    )
}

export default CitiesPage
