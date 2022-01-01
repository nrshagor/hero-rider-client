import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import pic01 from '../../Images/BikeRiding.jpg';
const stripePromise = loadStripe('pk_test_51KD8YjHhEXx7c1LjbkonGZUyk34RWIw29H07dfEa6co9O4FcWjT401KX4nOAnilAnf33BsZdNcaX1KwxLgBJTOIc00h7eF0VgK');


const Payment1 = () => {
    return (
        <div>
            <h1>Payment</h1>
            <section>
                <div className="products">
                    <h1> services</h1>
                    <div className="" >
                        <div className="card" style={{ alignItems: "normal" }}>
                            <div className="products-img">
                                <img src={pic01} alt="" />
                            </div>
                            <div className="products-info">
                                <h1>Bike Driving Lesson</h1>
                                <p>Price: 200 TK</p>
                                <div className='house-info'>

                                </div>
                                <Elements stripe={stripePromise}>
                                    <CheckOut
                                        price={200} />
                                </Elements>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    );
};

export default Payment1;