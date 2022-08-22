import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='Footer-container'>
            <div className='Footer-socialmedia'>
                <a href="#" className='Footer-mediaicon'><img className="Footer-icon-img" src='https://i.ibb.co/jhk8JH6/instagram2.png'></img></a>
                <a href="#" className='Footer-mediaicon'><img className="Footer-icon-img" src='https://i.ibb.co/6wxyJgN/twitter2.png'></img></a>
                <a href="#" className='Footer-mediaicon'><img className="Footer-icon-img" src='https://i.ibb.co/FnkNTjS/youtube2.png'></img></a>
            </div>
            <p className='Footer-p'>MyTinerary | 2022</p>
            <div className="Footer-nav">
                <a href="#" className="Footer-nav-a">Home</a>
                <a href="#" className="Footer-nav-a">Cities</a>
            </div>
            <div className="Footer-scroll">
                <a href="#"><img className="Footer-scroll-img" src="https://i.ibb.co/tLQFBzk/up-arrow2.png"></img></a>
            </div>
        </div>
    )
}


export default Footer
