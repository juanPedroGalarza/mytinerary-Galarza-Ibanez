import TableList from "../components/TableList"
import "../styles/CitiesPage.css"
import { useState, useRef, useEffect } from "react";
import { useGetAllCitiesQuery, useGetAllCitiesBaseQuery} from '../features/actions/citiesAPI'

function CitiesPage() {
    const [searchValue, setSearchValue] = useState("")
    const [orderValue, setOrderValue] = useState("")
    const [selectedCountry, setselectedCountry] = useState("")
    const [country, setCountry] = useState([])
    const orderEl = useRef(null)
    const searchEl = useRef(null)
    const countryEl= useRef(null)

    const handleValue = () => {
        setSearchValue(searchEl.current.value)
    }
    const handleOrder = () => {
        setOrderValue(orderEl.current.value)
    }
        
    const handleSearchValue = () => {
        setselectedCountry(countryEl.current.value)
    }
    let { data: citiesBase, isSuccess } = useGetAllCitiesBaseQuery()

    let { data: cities} = useGetAllCitiesQuery({
        name: searchValue,
        order: orderValue,
        country: selectedCountry,
    })

    useEffect(() => {
        handleSearchValue()
        handleValue()
        handleOrder()
    },[])

    useEffect(() => {
        console.log(citiesBase)
        if (isSuccess){
            let dataCountry = new Set(citiesBase.map(city=>city.country))
            dataCountry?
            setCountry([...dataCountry])
            : setCountry([])
        }

    }, [citiesBase])
        
            const viewOptions = country => {
                return(
                    <option value={country} className="country-option" key={country}>{country}</option>)
            }


    return (
        <div className="CitiesPage-main">
            <h1 className="CitiesPage-title">Cities</h1>
            <input type="search" placeholder="Search" name="city" ref={searchEl} onChange={handleValue} className="citiesPage-search" />
            <select ref={orderEl} className="citiesPage-order" name="order" onChange={handleOrder} defaultValue="none">
                <option value="none" className="citiespage-select">⇚ Select an order ⇛</option>
                <optgroup label="Alphabetic">
                    <option value="a-z"> a ≫ Z </option>
                    <option value="z-a"> z ≪ A </option>
                </optgroup>
                <optgroup label="Population">
                    <option value="up">Lower to highest</option>
                    <option value="down">Highest to lower</option>
                </optgroup>
                <optgroup label="Foundation">
                    <option value="new"> Newest to oldest</option>
                    <option value="old"> Oldest to Newest</option>
                </optgroup>
            </select>
            <select defaultValue="none" ref={countryEl} onChange={handleSearchValue} >
            <option value="none" className="citiespage-select"> Country ↪</option>
            { country?.map(viewOptions)}
            </select>
            <TableList data={cities} />
        </div>
    )
}

export default CitiesPage
