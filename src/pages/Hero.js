import React from 'react';
import "../styles/Hero.css";
import CitiesCarousel from '../components/CitiesCarousel';
import CallToAction from '../components/CallToAction';
const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <div className='hero-background'/>
        <h1 className='hero-title'>MyTinerary</h1>
        <div className='hero-description'>
          <div className='hero-subtitle-container'>
            <p className='hero-subtitle-1'>Find your perfect trip,</p>
            <p className='hero-subtitle-2'>designed by insiders who knows and love their cities!</p>
          </div>
          <CallToAction classCallToAction="hero-button" linkTo="cities">Let's go!</CallToAction>
        </div>
      </div>
      <CitiesCarousel />
    </>
  )
}

export default Hero