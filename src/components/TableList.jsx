import "../styles/TableList.css"
function TableList(props) {
    const city = props.data
    console.log(props.data)
    const itemView = (item) =>{
        return (
            <div className="TableList-item" style={{backgroundImage:`url(${item.url})`}}>
                <p className="TableList-item-title">{item.title}</p>
                <p className="TableList-item-country">{item.country}</p>
            </div>
        )
    }
    return (
        <div className="TableList-container">
            {props.data?.map(itemView)}
        </div>
    )
}
export default TableList
