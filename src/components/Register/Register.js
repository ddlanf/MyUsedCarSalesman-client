import React, { Component } from 'react'
import './Register.css'
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
        const user = this.state

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

    render() {
        return (
            <>
            <div className="register-box">
                <h1 className="register-header">Register</h1>
                <form className="register-form" 
                    onSubmit={this.registerUser}
                    >
                    <label name="first-name" className="register-label">First Name</label>
                    <input 
                        name="first_name" 
                        type="text" 
                        className="register-input"
                        onChange={this.handleInputChange}/>
                    <label name="last-name" className="register-label">Last Name</label>
                    <input 
                        name="last_name" 
                        type="text" 
                        className="register-input"
                        onChange={this.handleInputChange}/>
                    <label name="user-name" className="register-label">User Name</label>
                    <input 
                        name="user_name" 
                        type="text" 
                        className="register-input"
                        onChange={this.handleInputChange}/>
                    <label name="password" className="register-label">Password</label>
                    <input 
                        name="password" 
                        type="password" 
                        className="register-input"
                        onChange={this.handleInputChange}/>
                    <label name="email" className="register-label">Email</label>
                    <input 
                        name="email" 
                        type="text" 
                        className="register-input"
                        onChange={this.handleInputChange}/>
                    <input 
                        type="submit" 
                        className="register-submit"/>
                </form>
                <p className="register-error">{this.state.error}</p>
            </div>
           
            </>
        )
    }
}
