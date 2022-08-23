import '../styles/Header.css'
import {Link as LinkRouter} from 'react-router-dom'

function Header() {
    return (
        <div className='Header-nav-div'>
            <div className='Header-items-div'>
                <img className='Header-logo' src='https://i.ibb.co/WfpYBpB/logomytinerary.png'></img>
                <p className='Header-p'>MyTinerary</p>
            </div>
            <nav className='Header-nav'>
                <LinkRouter to='/' className='Header-a'>Home</LinkRouter>
                <LinkRouter to='/cities' className='Header-a'>Cities</LinkRouter>
                <LinkRouter to='/*' className='Header-a'>Log In</LinkRouter>
                <LinkRouter to='/*' className='Header-a'>Sign Up</LinkRouter>
                <img className='Header-user' src="https://i.ibb.co/jgp9dqj/user2.png"/>
            </nav>
        </div>
    )
}

export default Header
