import React from 'react';
import "../styles/Hero.css";
import WebsiteLayout from '../layouts/WebsiteLayout';
import CitiesCarousel from '../components/CitiesCarousel';
const Hero = () => {
  return (
    <WebsiteLayout>
      <>
      <div className="Hero-main">
        <div className='Hero-background'></div>
        <h1 className='Hero-title'>MyTinerary</h1>
        <div className='Hero-description'>
          <div className='Hero-subtitle-container'>
            <p className='Hero-subtitle-1'>Find your perfect trip,</p>
            <p className='Hero-subtitle-2'>designed by insiders who knows and love their cities!</p>
          </div>
          <button type="button" className='Hero-button'>Let's go!</button>
        </div>
      </div>
      <CitiesCarousel />
      </>
    </WebsiteLayout>
  )
}

export default Hero