import React, { Component } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import PostContext from '../../contexts/PostContext'

export default class Login extends Component {

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
        const { user_name, password } = this.state
        const returningUser = { user_name, password }

        let validUser = true
        for(let [key, value] of Object.entries(returningUser)){
            if(value == null || value === ''){
               this.context.setError(`please enter ${key.replace('_', ' ')}`)
               validUser = false
            }
        }

        if(validUser){
            this.context.clearError()
            AuthApiService.postLogin(returningUser)
                .then(user => {
                    this.props.history.push('/view-posts')
                    this.props.userLogIn()
                })
                .catch(res => {
                    this.context.setError(res.error)
                })
        }
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
                <div className="login-box">
                    <div className="login-header-box">
                     <h1 className="login-header">Log in</h1>
                    </div>
                    <form
                        onSubmit={this.loginUser}
                        >
                        <label name="user-name" className="login-label">User Name/Email</label>
                        <input 
                            type="text" 
                            className="login-input"
                            name="user_name"
                            onChange={this.handleInputChange}/>
                        <label name="user-password" className="login-label">Password</label>
                        <input 
                            type="password" 
                            className="login-input"
                            name="password"
                            onChange={this.handleInputChange}/>
                        <input type="submit" className="login-submit"></input>
                    </form>
                    {<p className='login-error'>{this.context.error}</p>}
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
