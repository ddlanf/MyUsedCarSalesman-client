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
                            <label name="user-name" className="mini-login-label">User Name</label>
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
                            <button type="submit" className="mini-login-submit">Submit</button>
                       </form>
                            <p className="mini-login-register">
                                New to MyUsedCarSalesman?
                                <span className="auth-box-break">
                                    <Link
                                        to='/register'
                                        className="mini-login-link"
                                        >
                                        Register
                                    </Link>
                                </span>
                            </p>
                            <p className="mini-login-admin">
                                <Link
                                    to='/admin-login'
                                    className="mini-login-link"
                                    >
                                Admin Login
                                </Link>
                            </p>
                            
                    </div>
                    <div className="additional-info">
                        <p>MyUsedCarSalesman</p>
                        <p>All rights reserved</p>
                        <p>Created on 04/01/2020</p>
                        <p>By Daniel Laufenberg</p>
                        <p >
                            <a target="_blank" rel="noopener noreferrer" className="portfolio-link" href="https://ddlanf.github.io/Portfolio">
                             Portfolio
                            </a>
                        </p>
                        <div className="image-link-container"> 
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ddlanf">
                                <img className="github" alt="github" src={require('../../../Utils/myusecarsalesman_pics/github.png')} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-laufenberg/">
                                <img className="linkedIn" alt="linkedIn" src={require('../../../Utils/myusecarsalesman_pics/linkedIn.png')} />
                            </a> 
                         </div>        
                    </div>  
                </section>
                <section className="auth-boxes mobile">
                    <div className="additional-info-mobile">
                        <p>MyUsedCarSalesman</p>
                        <p>All rights reserved</p>
                        <p>Created on 04/01/2020</p>
                        <p>By Daniel Laufenberg</p>
                        <p ><a target="_blank" rel="noopener noreferrer" className="portfolio-link" href="https://ddlanf.github.io/Portfolio">Portfolio</a></p>
                        <div className="image-link-container-mobile"> 
                            <a  target="_blank" rel="noopener noreferrer" className="auth-box-mobile-link" href="https://github.com/ddlanf">Github</a>
                            <a  target="_blank" rel="noopener noreferrer" className="auth-box-mobile-link" href="https://www.linkedin.com/in/daniel-laufenberg">LinkedIn</a>
                        </div>        
                    </div>  
                </section>
            </>
        )
    }
}
