import React from 'react'
import '../styles/Header.css'

function Header() {
    return (
        <div className='Header-nav-div'>
            <div className='Header-items-div'>
                <img className='Header-logo' src='https://i.ibb.co/WfpYBpB/logomytinerary.png'></img>
                <p className='Header-p'>MyTinerary</p>
            </div>
            <nav className='Header-nav'>
                <a href="/#" className='Header-a'>Home</a>
                <a href="/#" className='Header-a'>Cities</a>
                <a href="/#" className='Header-a'>Sign Up</a>
                <img className='Header-user' src="https://i.ibb.co/jgp9dqj/user2.png"/>
            </nav>
        </div>
    )
}

export default Header