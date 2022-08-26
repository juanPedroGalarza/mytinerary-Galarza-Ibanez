import "../../styles/Arrow.css"
function Arrow(props) {
    if (!props.icon) {
        throw new Error("an icon is *necesario*")
    }
    if (!props.click) {
        throw new Error("a function click is *necesario*")
    }
    return (
        <button onClick={props.click} className="Arrow-button">{ props.icon }</button>
    )
}
export default Arrow