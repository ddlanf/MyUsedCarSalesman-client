import React, { Component } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

export default class Login extends Component {


    render() {
        return (
                <div className="login-box">
                    <div className="login-header-box">
                     <h1 className="login-header">Log in</h1>
                    </div>
                    <form>
                        <label name="user-name" className="login-label">User Name/Email</label>
                        <input type="text" className="login-input"></input>
                        <label name="user-password" className="login-label">Password</label>
                        <input type="text" className="login-input"></input>
                        <input type="submit" className="login-submit"></input>
                    </form>
                    <p>New to MyUsedCarSalesman?
                        <span className="break">
                            <Link
                                className="login-link"
                                to='/register'
                                >
                                Register your account
                            </Link>
                       </span>
                    </p>
                    <p>
                        <Link
                            className="login-link"
                            to='/admin-login'
                            >
                         Admin Login
                        </Link>
                    </p>
                </div>
        )
    }
}
