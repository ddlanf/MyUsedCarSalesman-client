import React, { Component } from 'react'

export default class UserPosts extends Component {

    findUserId(post){
        const { users } = this.props
        for(let i = 0; i < users.length; i++){
            if(users[i].user_name === post.user_name){
                return users[i].id
            }
        } 
    }

    renderUserPosts(){
        const { posts } = this.props
        const userTable = posts.map(post => {
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
                    <th>{this.findUserId(post)}</th>
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
