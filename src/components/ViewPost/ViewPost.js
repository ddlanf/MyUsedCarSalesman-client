import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { dummyData } from '../dummyData'
import './ViewPost.css'

class ViewPost extends Component {

    findCarIndex(){
        const { match } = this.props;
        const { userPosts } = dummyData;
        const clickedPost = userPosts.filter( post => {
            return match.params.postId === post.id
        })
        return clickedPost[0]
    }

    findUser = (car) => {
        const { userData } = dummyData;
        const user = userData.filter( index => {
            return index.id === car.user_id
        })
        return user[0].user_name
    }

    render() {

        const car = this.findCarIndex();
        const userName = this.findUser(car);

        return (
            <>
                <section className="view-post-box">
                    <h1 className="view-post-car-name">{car.make} {car.model} {car.year} </h1>
                    <h2 className="view-post-car-price">${car.price}</h2>
                    <img
                            className="view-post-image"
                            src={car.image.src[0]}
                            alt={car.image.alt}
                    />
                    <h3 className="view-post-car-commission">{car.commission_amount}</h3>
                    <ul className="view-post-info">
                        <li>Make:</li>
                        <li>
                            <div className="view-post-text-box">
                                {car.make}
                            </div>
                        </li>
                        <li>Model:</li>
                        <li>
                            <div className="view-post-text-box">
                                {car.model}
                            </div>
                        </li>            
                        <li>Year:</li>
                        <li>
                            <div className="view-post-text-box">
                                {car.year}
                            </div>
                        </li>            
                        <li>Mileage:</li>
                        <li>
                            <div className="view-post-text-box">
                                {car.mileage}
                            </div>
                        </li>            
                        <li>Description:</li>
                        <li>
                            <div className="view-post-text-box description">
                                {car.description}
                            </div>
                        </li>            
                        <li>Price:</li>
                        <li>
                            <div className="view-post-text-box">
                                ${car.price}
                            </div>
                        </li>
                        <li>Commission:</li>
                        <li>
                            <div className="view-post-text-box">
                                {car.commission_amount}
                            </div>
                        </li>
                        <li>Location:</li>
                        <li>
                            <div className="view-post-text-box">
                                {car.location}
                            </div>
                        </li>
                        <li>Othe terms and conditions:</li>
                        <li>
                            <div className="view-post-text-box terms-cond">
                                {car.other_terms_and_conditions}
                            </div>
                        </li>
                        <li>Posted By:</li>
                        <li>
                            <div className="view-post-text-box">
                                {userName}  
                            </div>
                        </li>
                        <li>
                            <button className="contact-button">Contact Seller</button>
                            <button className="contact-button">Take this offer</button>
                        </li>
                    </ul>
                </section>
            </>
        )
    }
}


export default withRouter(ViewPost)