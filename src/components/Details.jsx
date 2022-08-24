import "../styles/TableList.css"

function Details(props) {
    const city = props.data

    const printCard = (item) => {
        return (
            <div  className="TableList-item" style={{ backgroundImage: `url(${item.url})` }}>
            <p className="TableList-item-title">{item.title}</p>
            <p className="TableList-item-country">{item.country}</p>
            </div>
        )
    }
    return (
        <div className="TableList-container">
        { printCard(city)}
        </div>
    )

}

export default Details