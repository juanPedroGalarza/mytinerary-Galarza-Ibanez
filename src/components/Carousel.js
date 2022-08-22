import "../styles/Carousel.css"
import Arrow from "./Carousel/Arrow";
import { useEffect, useState } from "react";
function Carousel(props) {
    let items = props.data
    let range = props.range
    let [start,setStart] = useState(props.start)
    let [end,setEnd] = useState(start + range)
    const interval = props.interval * 1000
    const [intervalId,setIntervalId] = useState(null)
    const itemView = (item) => (
        <div className="Carousel-item">
            <p className="Carousel-item-title">{item.title}</p>
            <img className="Carousel-item-image" src={item.url} alt={item.title}/>
        </div>
    )
    const slideView = (slideItems) => (
            <div className="Carousel-slide">
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
    },[end])
    return (
        <div className="Carousel-container">
            <h3 className="Carousel-title">Popular MYtineraries</h3>
            <div className="Carousel">
                <Arrow icon="<" click={ prev } />
                {slideView(items.slice(start, end))}
                <Arrow icon=">" click={ next }/>
            </div>
        </div>
 )   
}
export default Carousel