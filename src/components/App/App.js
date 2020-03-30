import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Admin from '../Admin/Admin'
import AdminLogin from '../AdminLogin/AdminLogin'
import EditPost from '../EditPost/EditPost'
import LandingPage from '../LandingPage/LandingPage'
import Login from '../Login/Login'
import MakePost from '../MakePost/MakePost'
import ViewMyPosts from '../ViewMyPosts/ViewMyPosts'
import Register from '../Register/Register'
import ViewPost from '../ViewPost/ViewPost'
import ViewPosts from '../ViewPosts/ViewPosts'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import './App.css'

export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      isUserLoggedIn: TokenService.hasAuthToken(),
      isUserAtLoginOrRegister: false
    }
  }

  userLogIn = () => {
    this.setState({
      isUserLoggedIn: true
    })
  }

  userLogOut = () =>{
    TokenService.clearAuthToken()

    this.setState({
      isUserLoggedIn: false
    })
  }

  userIsAtLoginOrRegister = () =>{
    this.setState({ isUserAtLoginOrRegister: true})
  }

  userIsNotAtLoginOrRegister = () =>{
    this.setState({ isUserAtLoginOrRegister: false})
  }

  verifyJwt = () => {
    if(TokenService.hasAuthToken()){
        AuthApiService.checkJWTtoken()
         .then(jwt =>{
           if(jwt.status === 'expired'){ this.userLogOut() }
         })
     } 
  }

  componentDidMount() {
    if(TokenService.hasAuthToken()){
      this.verifyJwt()
    }
    this.interval = setInterval(() => this.verifyJwt(), 18000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    
    return (
      <div className='App'>
        <header className='App_header'>
            <Nav 
              userLogOut={this.userLogOut}
              isUserLoggedIn={this.state.isUserLoggedIn}
              isUserAtLoginOrRegister={this.state.isUserAtLoginOrRegister}
            />
        </header>
        <main className='App_main'>
          <Switch>
            <Route
              exact 
              path={'/'}
              render={(props) => 
                        <LandingPage {...props} 
                            isUserLoggedIn={this.state.isUserLoggedIn} 
                            userLogIn={this.userLogIn}/>}
            />
            <Route
              exact 
              path={'/admin'}
              component={Admin}
            />
            <Route
              exact 
              path={'/admin-login'}
              component={AdminLogin}
            />
            <Route
              exact 
              path={'/login'}
              render={(props) => 
                        <Login {...props} 
                          isUserLoggedIn={this.state.isUserLoggedIn} 
                          userLogIn={this.userLogIn}
                          userIsAtLoginOrRegister={this.userIsAtLoginOrRegister}
                          userIsNotAtLoginOrRegister={this.userIsNotAtLoginOrRegister}
                          isUserAtLoginOrRegister={this.state.isUserAtLoginOrRegister}
                        />}
            />
            <Route
              exact 
              path={'/register'}
              render={(props) => 
                        <Register {...props} 
                          isUserLoggedIn={this.state.isUserLoggedIn} 
                          userLogIn={this.userLogIn}
                          userIsAtLoginOrRegister={this.userIsAtLoginOrRegister}
                          userIsNotAtLoginOrRegister={this.userIsNotAtLoginOrRegister}
                          isUserAtLoginOrRegister={this.state.isUserAtLoginOrRegister}
                        />}
            />
            <Route
              exact 
              path={'/view-posts'}
              component={ViewPosts}
            />
            <Route
              exact 
              path={'/view-posts/:postId'}
              component={ViewPost}
            />
            <Route
              exact 
              path={'/edit-post/:postId'}
              component={EditPost}
            />
            <Route
              exact 
              path={'/view-my-posts'}
              component={ViewMyPosts}
            />
             <Route
              exact 
              path={'/make-post'}
              component={MakePost}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
        <footer className='App_footer'>
             © 2020 MyUsedCarSalesman
        </footer>
      </div>
    )
  }
}
