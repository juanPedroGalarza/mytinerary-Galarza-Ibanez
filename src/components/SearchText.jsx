
import { useState,useEffect, useRef } from "react";
import axios from "axios";



export default function SearchText() {
    const [cities, setCities] = useState([]);


        useEffect(()=> {
                axios.get("http://localhost:4000/cities")
                .then(res => {setCities(res.data.response)})
                },
            [] )

        const [q, setQ]= useState("")
        console.log(q)



        return (
        <div><input type="search" placeholder="Search" name="search-text-input" onChange={(e) => setQ(e.target.value)} /></div>
    )
}
