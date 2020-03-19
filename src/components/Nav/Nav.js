import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

//Set it to not logged in for now
let isUserLoggedIn = false;

export default class Nav extends Component {
   
   logOut = () => {
        isUserLoggedIn = false
    }

    rendorRightNavBar(){
     
        const rightNavBar = isUserLoggedIn ? 
            (<div className="right-nav">
                <Link 
                    className="my-posts-link"
                    to='/my-posts'
                    >
                    My Posts
                </Link>
                <Link   
                    className="log-out-link"
                    to="/view-posts"
                    onClick={() => this.logout}
                    >
                    Log out
                </Link>
            </div>)
            :
            (<div className="right-nav">
            <Link 
                className="nav-link login-link"
                to='/login'  
                >
                Log in
            </Link>
            <Link 
                className="nav-link register-link"
                to='/register'
                >
                Register
            </Link>
        </div>);

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
                            className='nav-link'
                            to='/view-posts'
                            >
                            MyUsedCarSalesman
                        </Link>
                    </div>
                    {this.rendorRightNavBar()}
                </nav>
        )
    }
}
