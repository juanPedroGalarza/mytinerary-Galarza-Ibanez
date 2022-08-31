import { useRef } from "react"

export default function Input(props) {
    const inputArray = props.inputsData
    const formEl = useRef()

    const sendData = (e) => {
        props.event(e,Array.from(formEl.current))
    }
    const formStructure = (item) =>{
        return (
            <label className="NewCity-form-label" key={item.name}>
            <p className="NewCity-form-p">{item.name}</p>
                <input className="NewCity-form-input" placeholder={item.placeholder} type={item.type} name={item.name} defaultValue={item.value} />
            </label> 
        )
    }
    return (
        <>
            <form className="NewCity-form" id="newcity-form" onSubmit={sendData} ref={formEl}>
                {inputArray.map(formStructure)}
                <button type="submit" className="NewCity-form-button">Send</button>
            </form>
        </>
        )
}