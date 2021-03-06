import React, { Component } from 'react'
import './Headings.css'

export default class Headings extends Component {

    //This is just for demo purpose only
    state = { clicked : false }

    showDemo = () =>{
        this.setState({ clicked: true})
    }
    //ends here

    render() {
        return (
            <>
                {/*This is for demo purpose only*/
                    <div className="demo">
                        {this.state.clicked ? '' : <h1 onClick={this.showDemo} >Click here for instruction</h1>}
                        {this.state.clicked ? 
                        <div>
                        <h2>This is a demo</h2>
                        <p>To use the app, there are several different options</p>
                        <ol>
                            <li>Log in with with credentials <span className="demo-break">username: user1 <span className="demo-break"></span>password: user1_password</span></li>
                            <li>For admin login use <span className="demo-break"> admin name: admin <span className="demo-break"></span> password: admin_password</span></li>
                            <li>Register a new account</li>
                            <li>Click on "get started" to view posts without logging in</li>
                        </ol>
                        </div>: ''}
                    </div>}

               <section>
                    <div className="heading-box">
                        <h1 className="header-main">
                            The most effortless way to sell your vehicle, 
                            while maximizing your return
                        </h1>
                    </div>
                    <img 
                        className="heading-image money-and-car-image"
                        src={require('../../../Utils/myusecarsalesman_pics/moneyandcar.png')}
                        alt="money and car"
                    />
                    <div className="sub-text">
                        <p>
                            MyUsedCarSalesman helps you find an individual who is willing to do
                            all the complicated and tedious process of selling your old car. 
                        </p>
                    </div>
                </section>

                <section>
                    <div className="heading-box">
                        <h1 className="header-main">Forget the trade-in value!</h1>
                    </div>
                    <div className="sub-text">
                        <p>
                            Dealers will take your car off your hand for a lot less money than what your car is 
                            actually worth so that they get the most profit out of your vehicle.
                        </p>
                        <img 
                        className="heading-image dealer"
                        src={require('../../../Utils/myusecarsalesman_pics/dealer.png')}
                        alt="dealer"
                        />
                        <p>
                        In MyUsedCarSalesman, you decide how much value you will get out your vehicle.
                        </p>
                    </div>
                </section>

                <section>
                        <div className="heading-box">
                            <h1 className="header-main">Looking to earn some cash? <span className="landingpage-break">Become a seller!!</span> </h1>
                        </div>
                        <img 
                        className="heading-image cash"
                        src={require('../../../Utils/myusecarsalesman_pics/cash.png')}
                        alt="money"
                        />
                        <div className="sub-text">
                            <p>
                                <span className="new-para">
                                Anyone can become a seller on MyUsedCarSalesman! Once you have an account, simply accept any contracts posted by other users and get sellin'! 
                                </span>
                                No diploma, certification, nor prior sales experience necessary, let your results speak for itself.
                            </p>
                        </div>
                </section> 
            </>
        )
    }
}
