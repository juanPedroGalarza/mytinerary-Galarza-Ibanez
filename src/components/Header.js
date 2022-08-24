import '../styles/Header.css'
import { Link as LinkRouter } from 'react-router-dom'
import ProfileNavList from "../components/Profile/ProfileNavList"
import { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"
function Header(props) {
    const pages = props.data
    const [open,setOpen] = useState(false)
    const viewNav = (page) => {
        return (<LinkRouter to={page.linkTo} className='Header-a'>{page.name}</LinkRouter>)
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
        <div className='Header-nav-div'>
            <div className='Header-items-div'>
                <img className='Header-logo' src='https://i.ibb.co/WfpYBpB/logomytinerary.png'></img>
                <p className='Header-p'>MyTinerary</p>
            </div>
            <span onClick={toggleOpen} className="Header-open-nav"></span>
            <nav className='Header-nav'>
                {pages.map(viewNav)}
                <ProfileNavList />
            </nav>
            {open ?
                <nav className='Header-nav-modal'>
                <span onClick={toggleOpen} className="Header-close-nav"></span>
                {pages.map(viewNav)}
                <ProfileNavList />
                </nav>
                :null
            }
            
        </div>
    )
}

export default Header
