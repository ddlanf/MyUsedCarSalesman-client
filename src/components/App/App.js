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

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App_header'>
            <Nav />
        </header>
        <main className='App_main'>
          <Switch>
            <Route
              exact 
              path={'/'}
              component={LandingPage}
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
              component={Login}
            />
            <Route
              exact 
              path={'/register'}
              component={Register}
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
              path={'/edit-post'}
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
      </div>
    )
  }
}
