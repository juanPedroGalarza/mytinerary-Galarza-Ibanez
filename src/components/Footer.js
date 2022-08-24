import '../styles/Footer.css'
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
                <a href="https://www.instagram.com/mytinerary_/" className='Footer-mediaicon'><img className="Footer-icon-img" src='https://i.ibb.co/jhk8JH6/instagram2.png'></img></a>
                <a href="https://twitter.com/MytineraryApp" className='Footer-mediaicon'><img className="Footer-icon-img" src='https://i.ibb.co/6wxyJgN/twitter2.png'></img></a>
                <a href="https://www.youtube.com/watch?v=6PDmZnG8KsM" className='Footer-mediaicon'><img className="Footer-icon-img" src='https://i.ibb.co/FnkNTjS/youtube2.png'></img></a>
            </div>
            <p className='Footer-p'>MyTinerary | 2022</p>
            <div className="Footer-nav">
                {pages.map(viewNav)}
            </div>
            <div className="Footer-scroll">
                <ScrollToTop><img className="Footer-scroll-img" src="https://i.ibb.co/tLQFBzk/up-arrow2.png"></img></ScrollToTop>
            </div>
        </div>
    )
}


export default Footer
