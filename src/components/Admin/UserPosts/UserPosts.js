import React, { Component } from 'react'
import { dummyData } from '../../dummyData'

export default class UserPosts extends Component {

    renderUserPosts(){
        const { userPosts} = dummyData;

        const userTable = userPosts.map(post => {
            return (
                <tr 
                    key={post.id}
                    >
                    <th>{post.id}</th>
                    <th>{post.make}</th>
                    <th>{post.model}</th>
                    <th>{post.year}</th>
                    <th>{post.mileage}</th>
                    <th className="admin-paragraph">{post.description}</th>
                    <th>${post.price}</th>
                    <th className="admin-paragraph">{post.commission_amount}</th>
                    <th>{post.location}</th>
                    <th className="admin-paragraph">{post.other_terms_and_conditions}</th>
                    <th>{post.user_id}</th>
                </tr>
            )
        })

        return userTable;
    }

    
    render() {
        return (
            <div className="users-info posts">
                <h2>User Posts</h2>
                <table className="admin-table posts">
                    <thead>
                        <tr className="about-posts">
                            <th>ID</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Mileage</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Commission Amount</th>
                            <th>Location</th>
                            <th>Other terms and conditions</th>
                            <th>User ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserPosts()}
                    </tbody>
                </table>
            </div>
        )
    }
}
