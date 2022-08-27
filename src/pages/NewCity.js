import Input from "../components/NewCity/Input"
import "../styles/NewCity.css"


function NewCity() {
    return (
        <div className="NewCity-main">
            <div className="NewCity-background"></div>
            <h1 className="NewCity-title">NewCity</h1>
            <Input />
        </div>
    )   
}
export default NewCity