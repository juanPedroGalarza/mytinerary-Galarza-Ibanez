import "../styles/Carousel.css"
import Arrow from "./Carousel/Arrow";
import { useEffect, useState } from "react";
import { Link as LinkRouter } from 'react-router-dom'
function Carousel(props) {
    let items = props.data
    let range = props.range
    let [start, setStart] = useState(props.start)
    let [end, setEnd] = useState(start + range)
    const interval = props.interval * 1000
    const [intervalId, setIntervalId] = useState(null)
    const itemView = (item) => (
        <LinkRouter to={`/city/${item.city}`} className="carousel-item" key={item.country}>  <p className="carousel-item-title">{item.city}</p>
            <img className="carousel-item-image" src={item.photo} alt={item.title} />
        </LinkRouter>
    )
    const slideView = (slideItems) => (
        <div className="carousel-slide">
            {slideItems.map(itemView)}
        </div>
    )
    function next() {
        if (end <= items.length - range) {
            setStart(start + range)
            setEnd(end + range)
            return
        }
        setStart(0)
        setEnd(range)
    }
    function prev() {
        if (start > 0) {
            setStart(start - range)
            setEnd(end - range)
            return
        }
        setStart(items.length - range)
        setEnd(items.length)
    }
    useEffect(() => {
        let id = setInterval(next, interval)
        setIntervalId(id)
        return () => clearInterval(intervalId)
    }, [end])
    return (
        <div className="carousel-container">
            <h3 className="carousel-title">Popular Cities</h3>
            <div className="carousel">
                <Arrow icon="<" click={prev} />
                {slideView(items.slice(start, end))}
                <Arrow icon=">" click={next} />
            </div>
        </div>
    )
}
export default Carousel