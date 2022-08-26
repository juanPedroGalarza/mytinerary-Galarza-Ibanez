import '../styles/UnderConstruction.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ConstructionLayout(props) {

    return (
        <div>
            <Header />
            {props.children}
            <div className='Under-construction-div'>
                <h1 className='Under-construction-h1'>Coming Soon!</h1>
                <div className='Under-construction-div2'>
                    <p className='Under-construction-p'>We are still working on it... </p>
                    <img  className='UnderC-img' src='https://i.ibb.co/vkTbNbw/shovel-1.png' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ConstructionLayout