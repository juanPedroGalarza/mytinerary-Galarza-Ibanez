import React from "react";
import WebsiteLayout from "../layouts/WebsiteLayout";
import '../styles/UnderConstruction.css'

export default function UnderConstruction() {
    return (
        <WebsiteLayout>
            <div className='Under-construction-div'>
                <h1 className='Under-construction-h1'>Coming Soon!</h1>
                <div className='Under-construction-div2'>
                    <p className='Under-construction-p'>We are still working on it... </p>
                    <img  className='UnderC-img' src='https://i.ibb.co/vkTbNbw/shovel-1.png' />
                </div>
            </div>
        </WebsiteLayout>
    )
}
