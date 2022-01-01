import React from 'react';
import { Link } from 'react-router-dom';
import pic01 from '../../Images/carDrive.jpg'
import pic02 from '../../Images/BikeRiding.jpg'
const CarPakeg = () => {
    return (
        <>
            <section>
                <div className="products">
                    <h1> services</h1>
                    <div className="card-body">
                        <div className="card">
                            <div className="products-img">
                                <img src={pic01} alt="" />
                            </div>
                            <div className="products-info">
                                <h1>Car Driving Lesson</h1>
                                <p>Price: 100 TK</p>
                                <div className='house-info'>

                                </div>
                                {/* <button className="btn btn-danger mx-2" onClick={() => handleDeleteProduct(product._id)}>Cancel</button> */}
                                <Link to="/payments"><button className="btn btn-warning">View All</button></Link>
                                {/* <Link to={`/singlehouse/${product._id}`}><button className="btn btn-warning">Read More</button></Link> */}
                            </div>
                        </div>
                        <div className="card">
                            <div className="products-img">
                                <img src={pic02} alt="" />
                            </div>
                            <div className="products-info">
                                <h1>Bike Driving Lesson</h1>
                                <p>Price: 200 TK</p>
                                <div className='house-info'>

                                </div>
                                {/* <button className="btn btn-danger mx-2" onClick={() => handleDeleteProduct(product._id)}>Cancel</button> */}
                                <Link to="/payments1"><button className="btn btn-warning">View All</button></Link>
                                {/* <Link to={`/singlehouse/${product._id}`}><button className="btn btn-warning">Read More</button></Link> */}
                            </div>
                        </div>


                    </div>
                </div>
            </section>



        </>
    );
};

export default CarPakeg;