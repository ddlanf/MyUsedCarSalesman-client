import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostContext from '../../contexts/PostContext'
import './Nav.css'

export default class Nav extends Component {

    static contextType = PostContext

    rendorLogOutNavBar(){
    
        const rightNavBar = 
        (<div className="right-nav">
            <Link 
                className="nav-link login-link"
                to='/login'  
                >
                Log in
            </Link>
            <Link 
                className="nav-link register-link"
                to='/register'>
                Register
            </Link>
        </div>);

        return rightNavBar;   
    }

    rendorLoginNavBar(){
        const rightNavBar = 
            (<div className="right-nav">
                <Link 
                    className="my-posts-link nav-link"
                    to='/view-my-posts'
                    >
                    My Posts
                </Link>
                <Link   
                    className="log-out-link nav-link"
                    to="/view-posts"
                    onClick={this.props.userLogOut}
                    >
                    Log out
                </Link>
            </div>)
        return rightNavBar;   
    }

    render() {

        return (
                <nav
                    className='nav-bar'
                    >
                    <div
                        className="left-nav"    
                        >
                        <Link
                            className='nav-link main'
                            to='/view-posts'
                            >
                            MyUsedCarSalesman
                        </Link>
                    </div>
                    {this.props.isUserAtLoginOrRegister ?
                        '' : this.props.isUserLoggedIn ? this.rendorLoginNavBar() : this.rendorLogOutNavBar()}
                </nav>
        )
    }
}
