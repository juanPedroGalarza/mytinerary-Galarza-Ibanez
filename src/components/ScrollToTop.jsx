import { useEffect} from "react"
import {useLocation} from "react-router-dom"
import "../styles/ScrollToTop.css"
function ScrollToTop(props) {
    const location = useLocation()
    function scrollTop() {
        window.scrollTo(0,0)
    }
    useEffect(() => {
        scrollTop()
    },[location.pathname])
    return (
        <button onClick={scrollTop} className="ScrollToTop">{props.children}</button>
    )
}
export default ScrollToTop