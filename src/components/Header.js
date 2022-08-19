import React from 'react'
import '../styles/Header.css'

function Header() {
    return (
        <div className='Header-nav-div'>
            <div className='Header-items-div'>
                <img className='Header-logo' src='https://i.ibb.co/QD20Hpm/vecteezy-set-of-abstract-logo-template-5354729-ai-1.png'></img>
                <p className='Header-p'>MyTinerary</p>
            </div>
            <nav className='Header-nav'>
                <a href="/#" className='Header-a'>Home</a>
                <a href="/#" className='Header-a'>Cities</a>
                <a href="/#" className='Header-a'>Sign Up</a>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D1A27B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
            </nav>
        </div>
    )
}

export default Header