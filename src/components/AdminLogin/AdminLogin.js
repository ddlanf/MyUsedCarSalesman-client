import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import './AdminLogin.css'

export default class AdminLogin extends Component {

    constructor(props){
        super(props);
        this.state = { 
            admin_name: '',
            password: ''
        }
    }

    loginAdmin = (ev) =>{
        ev.preventDefault()
        const admin = this.state

        AuthApiService.postAdminLogin(admin)
            .then(() => {
                this.props.history.push('/admin')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
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
    }

    render() {
        return (
            <div className="admin-login-box">
                <h1 className="admin-login-header">Admin Log in</h1>
                {this.state.error ? <p className='admin-login-error'>{this.state.error}</p> : ''}
                <form className="admin-login-form"
                    onSubmit={this.loginAdmin}
                    >
                     <label name="user-name" className="login-label">Admin Name</label>
                        <input 
                            type="text" 
                            className="admin-login-input"
                            name="admin_name"
                            onChange={this.handleInputChange}/>
                        <label name="user-password" className="admin-login-label">Password</label>
                        <input 
                            type="password" 
                            className="admin-login-input password"
                            name="password"
                            onChange={this.handleInputChange}/>
                    <button type="submit" className="admin-login-submit">Submit</button>
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
