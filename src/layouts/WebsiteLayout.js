import Header from "../components/Header";
import Footer from "../components/Footer";


function WebsiteLayout(props) {
    const pages = [
        {linkTo:"/",name:"Home"},
        {linkTo:"/cities",name:"Cities"},
        {linkTo:"/new-city",name:"New City"},
        {linkTo:"/edit-city",name:"Edit City"},
    ]
    return (
        <div>
            <Header data={pages}/>
            {props.children}
            <Footer data={pages}/>
        </div>
    )

}

export default WebsiteLayout