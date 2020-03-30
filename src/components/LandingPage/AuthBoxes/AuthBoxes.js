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

    //This is just for demo purposes
    state = { clicked : false }

    showDemo = () =>{
        this.setState({ clicked: true})
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
                            <input type="submit" className="mini-login-submit"></input>
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
                        <p ><a target="_blank" rel="noopener noreferrer" className="portfolio-link" href="https://ddlanf.github.io/Portfolio">Portfolio</a></p>
                        <div className="image-link-container"> 
                            <a  href="https://github.com/ddlanf">
                                <img className="github" alt="github" rel="noopener noreferrer" target="_blank" src={require('../../../Utils/myusecarsalesman_pics/github.png')} />
                            </a>
                            <a  href="https://www.linkedin.com/in/daniel-laufenberg/">
                                <img className="linkedIn" alt="linkedIn" rel="noopener noreferrer" target="_blank" src={require('../../../Utils/myusecarsalesman_pics/linkedIn.png')} />
                            </a> 
                         </div>        
                   </div>  
                </section>
                {/*This is the demo section*/}
                <div className="demo">
                    {this.state.clicked ? '' : <h1 onClick={this.showDemo}>Click here for instruction</h1>}
                    {this.state.clicked ? 
                    <div>
                    <h2>This is a demo</h2>
                    <p>To use the app, there are several different options</p>
                    <ol>
                        <li>Log in with with credentials <span className="demo-break">username: user1 <span className="demo-break"></span>password: user1_password</span></li>
                        <li>For admin login use <span className="demo-break"> admin name: admin <span className="demo-break"></span> password: admin_password</span></li>
                        <li>Register a new account</li>
                        <li>Click on "get started" to view posts without logging in</li>
                    </ol>
                    </div>: ''}
                </div>
            </>
        )
    }
}
