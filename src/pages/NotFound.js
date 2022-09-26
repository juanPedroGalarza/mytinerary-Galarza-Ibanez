import '../styles/NotFound.css'
import CallToAction from '../components/CallToAction';
export default function NotFound() {
    return (
        <div className='NotFound-div'>
            <h1 className='NotFound-h1'>404</h1>
            <div className='NotFound-div2'>
                <p className='NotFound-p'>Not Found</p>
                <CallToAction classCallToAction="NotFound-button" linkTo="/">Go back</CallToAction>
                <img  className='NotFound-img' src='/img/shovel.png' />
            </div>
        </div>
    )
}
