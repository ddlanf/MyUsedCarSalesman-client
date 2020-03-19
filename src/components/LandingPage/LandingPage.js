import React, { Component } from 'react'
import Hero from './Hero/Hero'
import Headings from './Headings/Headings'
import AuthBoxes from './AuthBoxes/AuthBoxes'
import './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <Hero/>
                <Headings/>
                <AuthBoxes/>
            </div>
        )
    }
}
