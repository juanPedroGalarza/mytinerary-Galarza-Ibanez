import '../styles/Hero.css'
import {Link as LinkRouter} from 'react-router-dom'


function CTA(){
    return (
        <div>
            <LinkRouter to='/cities' className='Hero-button'>Let's go!</LinkRouter>
        </div>
    )
}

export default CTA