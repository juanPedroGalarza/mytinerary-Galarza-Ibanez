import "../styles/TableList.css"
import { Link as LinkRouter } from 'react-router-dom'

function TableList(props) {
    const city = props.data
   // console.log(city)
    const itemView = (item) => {
        return (
            <LinkRouter to={`/city/${item.title}`} className="TableList-item" style={{ backgroundImage: `url(${item.url})` }}>
                <p className="TableList-item-title">{item.title}</p>
                <p className="TableList-item-country">{item.country}</p>
            </LinkRouter>
        )
    }
    return (
        <div className="TableList-container">
            {props.data.map(itemView)}
        </div>
    )
}
export default TableList
