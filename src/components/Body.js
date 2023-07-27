import React from 'react';
import heroImage from "../assets/ss.png";
import logo from "../assets/logo-00002.png";
import background from "../assets/output-onlinepngtools.png"
import "../styles/body.css"

const Body = () => {
  return (
    <div className='body'>
        <div className='hero'>
            <h1 className='slogan'>Powering<br/>Kick-Ass<br/>Professional<br/><span style={{color: "#C631F3"}}>Impact</span></h1>
            <img src={heroImage} className='hero-image' alt='hero'/>
        </div>
        <div className='other-stuff'>
        <img src={background} className='background2' alt='img'/>
            <div className='about'>
                <h1 className='about-heading'>Practice & Master Professional 
                    <span style={{color: "#C631F3"}}> Interactions</span>
                </h1>
                <img src={logo} alt='img'/>
                <p className='about-para'>An AI Mentor to Rehearse Responses to Real-life sales Situations Thru Immersive Simulations.</p>
            </div>
            <div className='info'>
                <h1 className='info-heading'>Professional 
                    <span style={{color: "#C631F3"}}> Impact</span>
                </h1>
                <ul>
                    <li className='list-items'>
                        <span className='item'>Simulations on Life impacting Professional Situations.</span>
                    </li>
                    <li className='list-items'>
                        <span className='item'>Completely Private On your device.</span>
                    </li>
                    <li className='list-items'>
                        <span className='item'>Real Time Analysis on sales skills demonstrated, with alternate suggestions.</span>
                    </li>
                    <li className='list-items'>
                        <span className='item'>Seek feedback, progressively improve, Rate/Challenge others.</span>
                    </li>
                    <li className='list-items'>
                        <span className='item'>Watch yourself evolve and become a Mentor leader.</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Body