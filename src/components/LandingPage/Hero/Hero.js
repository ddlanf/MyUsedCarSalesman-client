import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                 <Link
                    className="landing-page-link"
                    to='./view-posts'
                    >
                    <div className="get-started">Get Started</div>
                 </Link>
            </div>
        )
    }
}
