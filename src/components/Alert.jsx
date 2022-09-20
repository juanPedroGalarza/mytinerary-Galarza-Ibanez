import { useEffect } from "react"
import { useState } from "react"
import "../styles/Alert.css"
function Alert(props) {
    let [message,setMessage] = useState("")
    let [load,setLoad] = useState("")
    let [wrong,setWrong] = useState("")
    
    useEffect(() => {
        if (props.err) {
            setMessage(props.err.data.message)
            setWrong("wrong ")
        } else {
            setMessage(props.res?.message)
            if (!props.res?.success) {
                setWrong("wrong ")
            } else {
                setWrong("")
            }
        }
        setLoad("load ")
    }, [props.res,props.err])
    return (
        <div className={`alert-container ${load} ${wrong}`}>
            <p className={`alert-text ${load} ${wrong}`}>{message}</p>
            <span className={`alert-close ${load} ${wrong}`}>X</span>
        </div>
    )
}

export default Alert