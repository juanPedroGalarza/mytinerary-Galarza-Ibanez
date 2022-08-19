import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='Footer-container'>
            <img src="https://i.ibb.co/w7pC1hn/4112818-ai-1.png" alt='vecteezy-set-of-abstract-logo-template-5354729-ai-1' className='Footer-logo'></img>
            <p className='Footer-p'>MyTinerary | 2022</p>
            <div className='Footer-socialmedia'>
                <a href="#" className='Footer-mediaicon'><img className="Footer-icon-img" src='https://i.ibb.co/QPb4PPN/icons8-twitter-128.png'></img></a>
                <a href="#" className='Footer-mediaicon'><img className="Footer-icon-img" src='https://i.ibb.co/jgqtdVD/icons8-youtube-128.png'></img></a>
                <a href="#" className='Footer-mediaicon'><img className="Footer-icon-img" src='https://i.ibb.co/jRj75Qd/icons8-instagram-128.png'></img></a>
            </div>
        </div>
    )
}


export default Footer

//changed stroke to '#D1A27B' and added some space in the footer p.