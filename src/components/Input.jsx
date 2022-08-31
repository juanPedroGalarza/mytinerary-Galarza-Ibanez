import { useRef } from "react"

export default function Input(props) {
    const inputArray = props.inputsData
    const formEl = useRef()
    const classPage = props.classPage
    const sendData = (e) => {
        e.preventDefault()
        props.event(Array.from(formEl.current),e)
        formEl.current.reset()
    }
    const formStructure = (item) =>{
        return (
            <label className={classPage + "-form-label"} key={item.name}>
            <p className={classPage + "-form-p"}>{item.name}</p>
                <input className={classPage + "-form-input"} placeholder={item.placeholder} type={item.type} name={item.name} defaultValue={item.value} />
            </label> 
        )
    }
    return (
        <>
            <form className={classPage + "-form"} id="newcity-form" onSubmit={sendData} ref={formEl}>
                {props.children}
                {inputArray.map(formStructure)}
                <button type="submit" className={classPage + "-form-button"}>Send</button>
            </form>
        </>
        )
}