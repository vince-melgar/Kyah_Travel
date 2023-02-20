import React from 'react'
import './HeroStyle.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../images/Car.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>First Class Back Packers Travellers</h1>
                <h2>Book Now</h2>
                 <div className = "header-form">
                    <h2>Choose your Travel location:</h2>
                    <form className = "flex">
                        <input type = "text" className = "form-control" placeholder="Destination name"/>
                        <input type="date" className = "form-control" placeholder="Date"/>
                        <input type="number" className = "form-control" placeholder="Price (Php)"/>
                        <input type="submit" className = "btn" value = "Book Now"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero
