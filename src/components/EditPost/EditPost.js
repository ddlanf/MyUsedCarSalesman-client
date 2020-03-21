import React, { Component } from 'react'
import './EditPost.css'
export default class EditPost extends Component {
    render() {
        return (
            <div className="edit-post">
                <h1 className="edit-post-heading">Edit Post</h1>
                <section className="edit-post-form-box">
                    <form className="edit-post-form">
                        <div className="edit-post-input-box">
                            <div className="edit-post-left">
                                <label name="edit" className="edit-post-label">Make</label>
                                <input type="text" className="edit-post-input"></input>
                                <label name="model" className="edit-post-label">Model</label>
                                <input type="text" className="edit-post-input"></input>
                                <label name="year" className="edit-post-label">Year</label>
                                <input type="text" className="edit-post-input"></input>
                                <label name="mileage" className="edit-post-input">Mileage</label>
                                <input type="text" className="edit-post-input"></input>
                                <label name="description" className="edit-post-label">Description</label>
                                <textarea className="edit-post-description edit-post-input"></textarea>
                            </div>
                            <div className="edit-post-right">
                                <label name="price" className="edit-post-label">Price</label>
                                <input type="text" className="edit-post-input"></input>
                                <label name="commission" className="edit-post-label">Commision</label>
                                <input className="edit-post-input edit-post-commission"></input>
                                <label name="location" className="edit-post-label">Location</label>
                                <input className="edit-post-input edit-post-location" ></input>
                                <label name="description" className="edit-post-label">Other Terms and Conditions</label>
                                <textarea className="edit-post-terms-and-cond edit-post-input"></textarea>
                                <label htmlFor="img" className="img edit-post-label">Image Link:</label>
                                <input className="edit-post-input edit-post-image" ></input>
                            </div>
                        </div>
                        <button id="submit" type="submit" className="edit-post-submit">Submit</button>
                    </form>
                </section> 
            </div>
        )
    }
}
