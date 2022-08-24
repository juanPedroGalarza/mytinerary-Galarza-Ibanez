import {Link as LinkRouter} from 'react-router-dom'


function CTA(props) {
    const classCTA = props.classCTA
    const linkTo = props.linkTo
    return (
        <LinkRouter to={linkTo} className={classCTA}>
            {props.children}
        </LinkRouter>
    )
}

export default CTA