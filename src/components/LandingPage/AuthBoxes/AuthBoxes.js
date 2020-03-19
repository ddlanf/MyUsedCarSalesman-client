import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AuthBoxes.css'
export default class AuthBoxes extends Component {
    render() {
        return (
            <>
               <section className="auth-boxes">
                    <div className="Login-register-admin">
                        <h2 className="mini-login-header">Login</h2>
                        <form>
                            <label name="user-name" className="mini-login-label">User Name/Email</label>
                            <input type="text" className="mini-login-input"></input>
                            <label name="password" className="mini-login-label">Password</label>
                            <input type="text" className="mini-login-input"></input>
                            <input type="submit" className="mini-login-submit"></input>
                        </form>
                            <p className="mini-login-register">
                                New to MyUsedCarSalesman?
                                <span className="auth-box-break">
                                    <Link
                                        to='/register'
                                        className="landing-page-link"
                                        >
                                        Register your account
                                    </Link>
                                </span>
                            </p>
                            <p className="mini-login-admin">
                                <Link
                                    to='/admin-login'
                                    className="landing-page-link"
                                    >
                                Admin Login
                                </Link>
                            </p>
                    </div>
                    <div className="additional-info">
                        <p>MyUsedCarSalesman</p>
                        <p>All rights reserved</p>
                        <p>Created on xx/xx/20xx</p>
                        <p>By Daniel Laufenberg</p>
                        <p>Github Link LinkedIn Link</p>
                    </div>
                </section>  
            </>
        )
    }
}
