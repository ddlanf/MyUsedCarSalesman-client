import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AdminLogin.css'

export default class AdminLogin extends Component {


    render() {
        return (
            <div className="admin-login-box">
                <h1 className="admin-login-header">Login</h1>
                <form className="admin-login-form">
                    <label name="user-name" className="admin-login-label">Admin Name</label>
                    <input type="text" className="admin-login-input"></input>
                    <label name="password" className="admin-login-label">Password</label>
                    <input type="text" className="admin-login-input"></input>
                    <input type="submit" className="admin-login-submit" ></input>
                </form>
                <Link
                    to="/login"
                    className="go-back"
                    >
                    Back
                </Link>
            </div>
        )
    }
}
