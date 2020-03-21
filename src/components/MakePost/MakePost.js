import React, { Component } from 'react'
import './MakePost.css'
export default class MakePost extends Component {
    render() {
        return (
            <div className="make-post">
                <h1 className="make-post-heading">Create Post</h1>
                <section className="make-post-form-box">
                    <form className="make-post-form">
                        <div className="make-post-input-box">
                            <div className="make-post-left">
                                <label name="make" className="make-post-label">Make</label>
                                <input type="text" className="make-post-input"></input>
                                <label name="model" className="make-post-label">Model</label>
                                <input type="text" className="make-post-input"></input>
                                <label name="year" className="make-post-label">Year</label>
                                <input type="text" className="make-post-input"></input>
                                <label name="mileage" className="make-post-input">Mileage</label>
                                <input type="text" className="make-post-input"></input>
                                <label name="description" className="make-post-label">Description</label>
                                <textarea className="make-post-description make-post-input"></textarea>
                            </div>
                            <div className="make-post-right">
                                <label name="price" className="make-post-label">Price</label>
                                <input type="text" className="make-post-input"></input>
                                <label name="commission" className="make-post-label">Commision</label>
                                <input className="make-post-input make-post-commission"></input>
                                <label name="location" className="make-post-label">Location</label>
                                <input className="make-post-input make-post-location" ></input>
                                <label name="description" className="make-post-label">Other Terms and Conditions</label>
                                <textarea className="make-post-terms-and-cond make-post-input"></textarea>
                                <label htmlFor="img" className="img make-post-label">Image Link:</label>
                                <input className="make-post-input make-post-image" ></input>
                            </div>
                        </div>
                        <button id="submit" type="submit" className="make-post-submit">Submit</button>
                    </form>
                </section> 
            </div>
        )
    }
}
