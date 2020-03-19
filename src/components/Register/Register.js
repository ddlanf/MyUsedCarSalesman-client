import React, { Component } from 'react'
import './Register.css'
export default class Register extends Component {
    render() {
        return (
            <div className="register-box">
                <h1 className="register-header">Register</h1>
                <form className="register-form">
                    <label name="first-name" className="register-label">First Name</label>
                    <input type="text" className="register-input"></input>
                    <label name="last-name" className="register-label">Last Name</label>
                    <input type="text" className="register-input"></input>
                    <label name="user-name" className="register-label">User Name</label>
                    <input type="text" className="register-input"></input>
                    <label name="password" className="register-label">Password</label>
                    <input type="text" className="register-input"></input>
                    <label name="email" className="register-label">Email</label>
                    <input type="text" className="register-input"></input>
                    <input type="submit" className="register-submit"/>
                </form>
            </div>
        )
    }
}
