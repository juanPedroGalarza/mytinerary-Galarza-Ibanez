import {Link as LinkRouter} from 'react-router-dom'


function CallToAction(props) {
    const classCallToAction = props.classCallToAction
    const linkTo = props.linkTo
    return (
        <LinkRouter to={linkTo} className={classCallToAction}>
            {props.children}
        </LinkRouter>
    )
}

export default CallToAction