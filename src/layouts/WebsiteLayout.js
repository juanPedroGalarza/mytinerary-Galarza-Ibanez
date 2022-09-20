import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


function WebsiteLayout(props) {
    const user = useSelector(state=>state.user.user)
    const initPages = [
        {linkTo:"/",name:"Home"},
        {linkTo:"/cities",name:"Cities"}
    ]
    const logged = useSelector(state => state.user.logged)
    const [pages, setPages] = useState(initPages)
    useEffect(() => {
        if (user.role) {
            setPages(initPages.concat([
                {linkTo:"/new-itinerary",name:"New Itinerary"}
            ]))
            if (user.role === "admin") {
                setPages(initPages.concat([
                {linkTo:"/new-itinerary",name:"New Itinerary"},
                {linkTo:"/new-city",name:"New City"},
                {linkTo:"/edit-city",name:"Edit City"}
                ]))
            }
        } else {
            setPages(initPages)
        }
    },[user])
    return (
        <div>
            <Header data={pages} />
            {props.children}
            <Footer data={pages}/>
        </div>
    )

}

export default WebsiteLayout