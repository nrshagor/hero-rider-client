import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleHouse = () => {

    const [myPlan, setMyPlan] = useState({});

    const { id } = useParams();
    useEffect(() => {
        const url = `https://rocky-bayou-43088.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyPlan(data));
    }, [])
    console.log(id);
    console.log(myPlan);
    return (
        <>
            <div className="purchase-background">

                <div className="container py-5 ">
                    <div className="purchase-box py-5 ">
                        <div className="row ">
                            <div className="col-md-8 purchase-right">
                                <h2>Product info</h2>
                                <div className="card">
                                    <div className="products-img">
                                        <img src={myPlan.img} alt="" />
                                    </div>
                                    <div className="products-info">
                                        <h1>Brand Name: {myPlan.house}</h1>
                                        <p>Model: {myPlan.price}</p>
                                        <p><span>Trim: {myPlan.trim}</span> <span>Manufacture: {myPlan.manufacture}</span></p>
                                        <p>Description:{myPlan.description}</p>
                                        <p>Condition:{myPlan.condition}</p>
                                        <p> <span>Fuel{myPlan.fuel}</span> <span>Engine Capacity{myPlan.engineCapacity}</span></p>
                                        <p>K.M{myPlan.kmRun}</p>
                                        <p>Body Type{myPlan.bodyType}</p>
                                        <p>Price{myPlan.price}</p>
                                        <Link to="/products"><button className="btn btn-warning">View All</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 purchase-left">
                                <h2> Contact</h2>
                                <div className="card">
                                    <div className="products-img">
                                        <img src={myPlan.img} alt="" />
                                    </div>
                                    <div className="products-info">
                                        <h1>Brand Name: {myPlan.brand}</h1>
                                        <p>Model: {myPlan.model}</p>
                                        <p><span>Trim: {myPlan.trim}</span> <span>Manufacture: {myPlan.manufacture}</span></p>
                                        <p>Description:{myPlan.description}</p>
                                        <p>Condition:{myPlan.condition}</p>
                                        <p> <span>Fuel{myPlan.fuel}</span> <span>Engine Capacity{myPlan.engineCapacity}</span></p>
                                        <p>K.M{myPlan.kmRun}</p>
                                        <p>Body Type{myPlan.bodyType}</p>
                                        <p>Price{myPlan.price}</p>
                                        <Link to="/products"><button className="btn btn-warning">View All</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleHouse;