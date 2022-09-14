import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function WebsiteLayout(props) {
    const [user,setUser] = useState({})
    const initPages = [
        {linkTo:"/",name:"Home"},
        {linkTo:"/cities",name:"Cities"}
    ]
    const pathname = useLocation()
    const [pages, setPages] = useState(initPages)
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
        if (user) {
            setPages(initPages.concat([
                {linkTo:"/new-itinerary",name:"New Itinerary"}
            ]))
            if (user.role == "admin") {
                setPages(initPages.concat([
                {linkTo:"/new-itinerary",name:"New Itinerary"},
                {linkTo:"/new-city",name:"New City"},
                {linkTo:"/edit-city",name:"Edit City"}
                ]))
            }
        } else {
            setPages(initPages)
        }
    },[pathname])
    return (
        <div>
            <Header data={pages} user={user} />
            {props.children}
            <Footer data={pages}/>
        </div>
    )

}

export default WebsiteLayout