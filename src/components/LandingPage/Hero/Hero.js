import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                 <Link
                    className="landing-page-get-started-link-mobile"
                    to='./view-posts'
                    >
                    Get Started
                 </Link>
                 
                 <Link
                    className="landing-page-get-started-link"
                    to='./view-posts'
                    >
                    Get Started
                 </Link>
                 <img 
                        className="salesman"
                        src={require('../../../Utils/myusecarsalesman_pics/repairman.png')}
                        alt="salesman"
                />
                 <img 
                        className="yellow-car"
                        src={require('../../../Utils/myusecarsalesman_pics/car-303614_1280_0.png')}
                        alt="yellow-car"
                />
            </div>
        )
    }
}
