import "../styles/TableList.css"
function TableList(props) {
    const items = props.data
    const itemView = (item) =>{
        return (
            <div className="TableList-item">
                <p className="TableList-item-title">{item.title}</p>
                <img src={item.url} alt={item.title} className="TableList-item-img" />
            </div>
        )
    }
    return (
        <div className="TableList-container">
            {items.map(itemView)}
        </div>
    )
}
export default TableList