import React, { Component } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
export default class Register extends Component {

    constructor(props){
        super(props);
        this.state = { 
            first_name: '',
            last_name: '',
            user_name: '',
            password: '',
            email: ''
        }
    }

    registerUser = (ev) =>{
        ev.preventDefault()
        const { first_name, last_name, user_name, password, email} = this.state

        const user = { first_name, last_name, user_name, password, email }

        let validUser = true

        for(let [key, value] of Object.entries(user)){
            if(value == null || value === ''){
                this.setState({
                    error: `Please enter ${key.replace('_', ' ')}`
                })
                validUser = false
            }
            if(value.trim() !== value){
                this.setState({
                    error: `Inputs cannot contain space`
                })
                validUser = false
            }
        }

        if(validUser){

            AuthApiService.postUser(user)
                .then(message => {
                    AuthApiService.postLogin(user)
                    .then(message => {
                        this.props.history.push('/view-posts')
                        this.props.userLogIn()
                    })
                    .catch(res => {
                        this.setState({ error: res.error })
                    })
                })
                .catch(res => {
                    this.setState({ error: res.error })
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

    componentDidMount(){
        this.setState({ error: '' })
        this.props.userIsAtLoginOrRegister()
    }

    componentWillUnmount(){
        this.props.userIsNotAtLoginOrRegister()
    }

    render() {
        return (
            <>
            <div className="register-box">
                <h1 className="register-header">Register</h1>
                <form className="register-form" 
                    onSubmit={this.registerUser}
                    >
                    <label name="first-name" className="register-label">First Name</label>
                    {this.state.error ? (this.state.error.toLowerCase().includes("first name") ? <p className='register-error'>{this.state.error}</p> : '') : ''}
                    <input 
                        name="first_name" 
                        type="text" 
                        className="register-input"
                        onChange={this.handleInputChange}/>
                    <label name="last-name" className="register-label">Last Name</label>
                    {this.state.error ? (this.state.error.toLowerCase().includes("last name")  ? <p className='register-error'>{this.state.error}</p> : '') : ''}
                    <input 
                        name="last_name" 
                        type="text" 
                        className="register-input"
                        onChange={this.handleInputChange}/>
                    <label name="user-name" className="register-label">Username</label>
                    {this.state.error ? (this.state.error.toLowerCase().includes("user") ? <p className='register-error'>{this.state.error}</p> : '') : ''}
                    <input 
                        name="user_name" 
                        type="text" 
                        className="register-input"
                        onChange={this.handleInputChange}/>
                    <label name="password" className="register-label">Password</label>
                    {this.state.error ? (this.state.error.toLowerCase().includes("password") ? <p className='register-error'>{this.state.error}</p> : '') : ''}
                    <input 
                        name="password" 
                        type="password" 
                        className="register-input"
                        onChange={this.handleInputChange}/>
                    <label name="email" className="register-label">Email</label>
                    {this.state.error ? (this.state.error.toLowerCase().includes("email") ? <p className='register-error'>{this.state.error}</p> : '') : ''}
                    <input 
                        name="email" 
                        type="text" 
                        className="register-input"
                        onChange={this.handleInputChange}/>
                    {this.state.error ? (this.state.error.toLowerCase().includes("space") ? <p className='register-error'>{this.state.error}</p> : '') : ''}
                    <input 
                        type="submit" 
                        className="register-submit"/>
                </form>
                <h3 className="register-login-heading">
                        Returning User?
                        <span className="break">
                            <Link
                                className="register-login-link"
                                to='/login'
                                >
                                Log In
                            </Link>
                       </span>
                </h3>
            </div>
           
            </>
        )
    }
}
