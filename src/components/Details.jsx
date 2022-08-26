import "../styles/CityDetails.css"
import { Link as LinkRouter } from 'react-router-dom'

function Details(props) {
    const city = props.data
    const printCard = (item) => {
        return (
            <>
                <div className="Details-item" style={{ backgroundImage: `url(${item.url})` }}>
                    <p className="Details-item-title">{item.title}</p>
                    <p className="Details-item-country">{item.country}</p>
                </div>
                <div className="Details-p-div">
                        <p className="Details-p" >{item.description}</p>
                        <h3 className="Details-subtitle"> We don't have any itineraries here right now..</h3>
                </div>
                <div className="Details-btns">
                        <LinkRouter to={`/`} className="Details-btn">Back to Home</LinkRouter>
                        <LinkRouter to={`/cities`}className="Details-btn">Back to Cities</LinkRouter>
                </div>
            </>
        )
    }
    return (
        <div className="Details-container">
            {printCard(city)}
        </div>
    )

}

export default Details