import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'
import UserInfo from './UserInfo/UserInfo'
import UserPosts from './UserPosts/UserPosts'
import UserComplaintsAndReports from './UserComplaintsAndReports/UserComplaintsAndReports'
import UserService from '../../services/users-api-service'
import PostService from '../../services/posts-api-service'
import ReportApiService from '../../services/report-api-service'
export default class Admin extends Component {

    constructor(props){
        super(props)
        this.state ={
            users:[],
            posts: [],
            reports:[]
        }
    }
    
    componentDidMount(){
        UserService.getUsers()
            .then(users => this.setState({users}))
        PostService.getPosts()
            .then(posts => this.setState({posts}))
        ReportApiService.getReports()
            .then(reports => this.setState({reports}))
    }

    updateUsers = () => {
        UserService.getUsers()
            .then(users => this.setState({users}))
    }

    updatePosts = () => {
        PostService.getPosts()
            .then(posts => this.setState({posts}))
    }

    adminExit = () =>{
        this.props.userLogOut()
    }

    render() {
        return (
            <div className="admin-background">
                <div className="admin">
                    <h1 className="admin-header">Admin Info</h1>
                    <section className="admin-info">   
                        <UserInfo users={this.state.users} updateUsers={this.updateUsers}/>
                    </section>

                    <section className="admin-info">
                        <UserComplaintsAndReports reports={this.state.reports}/>
                    </section>

                    <section className="admin-info">
                        <UserPosts
                            users={this.state.users} 
                            posts={this.state.posts}
                            updatePosts={this.updatePosts}
                            />
                    </section>
                    <Link
                        to={'/view-posts'}
                        >
                        <button
                            className='admin-return'
                            onClick={this.adminExit}
                            >
                            Return
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}
