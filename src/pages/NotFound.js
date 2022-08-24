import React from "react";
import '../styles/NotFound.css'
import CTA from '../components/CTA';
export default function NotFound() {
    return (
        <div className='NotFound-div'>
            <h1 className='NotFound-h1'>404</h1>
            <div className='NotFound-div2'>
                <p className='NotFound-p'>Not Found</p>
                <CTA classCTA="NotFound-button" linkTo="/">Go back</CTA>
                <img  className='NotFound-img' src='https://i.ibb.co/vkTbNbw/shovel-1.png' />
            </div>
        </div>
    )
}
