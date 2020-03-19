import React, { Component } from 'react'
import './Admin.css'
import UserInfo from './UserInfo/UserInfo'
import UserPosts from './UserPosts/UserPosts'
import UserComplaintsAndReports from './UserComplaintsAndReports/UserComplaintsAndReports'
export default class Admin extends Component {

    render() {
        return (
            <div className="admin">

                <h1 className="admin-header">Admin Info</h1>
                <section className="admin-info">   
                    <UserInfo/>
                </section>

                <section className="admin-info">
                    <UserComplaintsAndReports/>
                </section>

                <section className="admin-info">
                     <UserPosts/>
                </section>
            </div>
        )
    }
}
