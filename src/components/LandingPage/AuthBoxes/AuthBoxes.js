import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AuthBoxes.css'
import AuthApiService from '../../../services/auth-api-service'
import PostContext from '../../../contexts/PostContext'

export default class AuthBoxes extends Component {
    
    static contextType = PostContext

    constructor(props){
        super(props);
        this.state = { 
            user_name: '',
            password: '',
            error: ''
        }
    }

    loginUser = (ev) =>{
        ev.preventDefault()
        const user = this.state
        AuthApiService.postLogin(user)
            .then(user => {
                this.props.history.push('/view-posts')
                this.props.userLogIn()
            })
            .catch(res => {
                this.context.setError(res.error)
                this.props.history.push('/login')
            })
    }

    handleInputChange = (event) =>{
        const { name } = event.target
        const { value } = event.target
        
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <>
               <section className="auth-boxes">
                    <div className="Login-register-admin">
                        <h2 className="mini-login-header">Login</h2>
                        <form
                                onSubmit={this.loginUser}
                            >
                            <label name="user-name" className="mini-login-label">User Name/Email</label>
                            <input 
                                type="text" 
                                className="mini-login-input"
                                name="user_name"
                                onChange={this.handleInputChange}/>
                            <label name="user-password" className="mini-login-label">Password</label>
                            <input 
                                type="password" 
                                className="mini-login-input"
                                name="password"
                                onChange={this.handleInputChange}/>
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
