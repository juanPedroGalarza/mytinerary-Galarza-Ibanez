import "../styles/Carousel.css"
function Carousel(props) {
    let items = props.data
    let range = props.range
    let start = props.start - props.range
    let end = start + range
    const slidesCont = Math.ceil(items.length / 4)
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
    return (
        <div className="Carousel-container">
            <h3 className="Carousel-title">Popular MYtineraries</h3>
            <div className="Carousel">
                {slideView(items.slice(start += range, end += range))}
                {slideView(items.slice(start += range, end += range))}
                {slideView(items.slice(start += range, end += range))}
            </div>
        </div>
 )   
}
export default Carousel