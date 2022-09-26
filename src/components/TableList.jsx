import "../styles/TableList.css"
import { Link as LinkRouter } from 'react-router-dom'

function TableList(props) {
    const cities = props.data
    
    const itemView = (item) => {
        return (
            <LinkRouter to={`/city/${item._id}`} className="TableList-item" key={item._id} style={{ backgroundImage: `url(${item.photo})` }}>
                <p className="TableList-item-title">{item.city}</p>
                <p className="TableList-item-country">{item.country}</p>
            </LinkRouter>
        )
    }
    return (
        <div className="TableList-container">
        {cities?.map(itemView)}
        </div>
    )
}
export default TableList
