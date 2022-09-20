import '../styles/Header.css'
import { Link as LinkRouter } from 'react-router-dom'
import ProfileNavList from "../components/Profile/ProfileNavList"
import { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"
function Header(props) {
    const pages = props.data
    const [open,setOpen] = useState(false)
    const viewNav = (page) => {
        return (<LinkRouter to={page.linkTo} className='header-a' key={page.name}>{page.name}</LinkRouter>)
    }
    function toggleOpen() {
        open?
            setOpen(false)
            :setOpen(true)
    }
    const location = useLocation()
    useEffect(() => {
        setOpen(false)
    },[location.pathname])
    return (
        <div className='header-nav-div'>
            <div className='header-items-div'>
                <img className='header-logo' src='https://i.ibb.co/WfpYBpB/logomytinerary.png'></img>
                <p className='header-p'>MyTinerary</p>
            </div>
            <span onClick={toggleOpen} className="header-open-nav" ></span>
            <nav className='header-nav'>
                {pages.map(viewNav)}
                <ProfileNavList />
            </nav>
                <nav className={`header-nav-modal ${open? "active":null}`}>
                <span onClick={toggleOpen} className="header-close-nav"></span>
                {pages.map(viewNav)}
                <ProfileNavList />
                </nav>
        </div>
    )
}

export default Header
