import '../styles/Footer.css'
import ActualDate from './ActualDate'
import {Link as LinkRouter} from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"
const Footer = (props) => {
    const pages = props.data
    const viewNav = (page) => {
        return (<LinkRouter to={page.linkTo} className='Footer-nav-a' key={page.name}>{page.name}</LinkRouter>)
    }
    return (
        <div className='Footer-container'>
            <div className='Footer-socialmedia'>
                <a href="https://www.instagram.com/mytinerary_/" className='Footer-mediaicon'>
                    <img className="Footer-icon-img" src='/img/instagram.png'></img></a>
                <a href="https://twitter.com/MytineraryApp" className='Footer-mediaicon'>
                    <img className="Footer-icon-img" src='/img/twitter.png'></img></a>
                <a href="https://www.youtube.com/watch?v=Jv4O_XeHPyA" className='Footer-mediaicon'>
                    <img className="Footer-icon-img" src='/img/youtube.png'></img></a>
            </div>
            <ActualDate />
            <div className="Footer-nav">
                {pages.map(viewNav)}
            </div>
            <div className="Footer-scroll">
                <ScrollToTop><img className="Footer-scroll-img" src="/img/up-arrow.png"></img></ScrollToTop>
            </div>
        </div>
    )
}


export default Footer
