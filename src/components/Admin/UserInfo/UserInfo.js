import React, { Component } from 'react'
import { dummyData } from '../../dummyData'

export default class UserInfo extends Component {

    renderUserInfo(){
        const { userData } = dummyData;
        
        const userTable = userData.map(user => {
            return (
                <tr 
                    key={user.id}
                    >
                    <th>{user.id}</th>
                    <th>{user.user_name}</th>
                    <th>{user.password}</th>
                    <th>{user.first_name}</th>
                    <th>{user.last_name}</th>
                    <th>{user.email}</th>
                    <th>{user.date_created}</th>
                    <th>
                        <button className="admin-block">
                            Block
                        </button>
                    </th>
                    <th>
                        <button className="admin-delete">
                            Delete
                        </button>
                    </th>
                </tr>
            )
        })

        return userTable
    }


    render() {
        return (
        <div className="users-info users">
            <h2>User Info</h2>
            <table className="admin-table users">
                <thead>
                    <tr className="about-users">
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Date Created</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderUserInfo()}
                </tbody>
            </table>
        </div>
        )
    }
}
