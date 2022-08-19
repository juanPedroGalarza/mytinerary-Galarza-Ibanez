import React from 'react'
import '../styles/Header.css'

function Header() {
    return (
        <div className='Header-nav-div'>
            <div className='Header-items-div'>
                <img className='Header-logo' src='https://i.ibb.co/v4Vv3VZ/4112818-ai-2.png'></img>
                <p className='Header-p'>MyTinerary</p>
            </div>
            <nav className='Header-nav'>
                <a href="/#" className='Header-a'>Home</a>
                <a href="/#" className='Header-a'>Cities</a>
                <a href="/#" className='Header-a'>Sign Up</a>
                <img className='Header-user' src="https://img.icons8.com/ios/50/000000/username.png"/>
            </nav>
        </div>
    )
}

export default Header