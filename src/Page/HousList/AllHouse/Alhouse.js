import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllHouse.css'

const Alhouse = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);
    const handleDeleteProduct = id => {
        const proced = window.confirm('Are You sure you want to delete..?');
        if (proced) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingServices = products.filter(product => product._id !== id);
                        setProducts(remainingServices);
                    }
                })
        }
    }
    return (
        <>
            <section>
                <div className="products">
                    <h1>Our Latest Products</h1>
                    <div className="card-body">

                        {
                            products.map(product =>
                                <div key={product._id} className="card">
                                    <div className="products-img">
                                        <img src={product.img} alt="" />
                                    </div>
                                    <div className="products-info">
                                        <h1>{product.house}</h1>
                                        <p>Price: {product.Price} TK</p>
                                        <div className='house-info'>
                                            <p><i className="fas fa-bed"></i> {product.Bedrooms}<span> Bedrooms</span></p>
                                            <p><i className="fas fa-bath"></i> {product.Bathrooms}<span> Bathrooms</span></p>
                                            <p> <i className="fas fa-th"></i> {product.squre} <span>squre ft</span></p>
                                            <p>  <i className="fas fa-warehouse"></i> {product.Garage}<span> Garage</span></p>
                                        </div>
                                        <button className="btn btn-danger mx-2" onClick={() => handleDeleteProduct(product._id)}>Cancel</button>
                                        <Link to="/allhouse"><button className="btn btn-warning">View All</button></Link>
                                        <Link to={`/singlehouse/${product._id}`}><button className="btn btn-warning">Read More</button></Link>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>



        </>
    );
};

export default Alhouse;