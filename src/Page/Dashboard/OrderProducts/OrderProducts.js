import React, { useEffect, useRef, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import useAuth from '../../../Hook/useAuth';
import './OrderProduct.css'
const OrderProducts = () => {
    const { user } = useAuth();
    const statusRef = useRef();
    const idRef = useRef();
    const [showOrder, setShowOrder] = useState([])
    useEffect(() => {
        const url = `https://nameless-inlet-63373.herokuapp.com/CustomerInfo`
        fetch(url)
            .then(res => res.json())
            .then(data => setShowOrder(data));
    }, [])
    const handleStatusChange = e => {
        // const status = statusRef.current.value;
        const id = idRef.current.value;
        const bal = { id };
        const proced = window.confirm('Are You sure you want to Approved..?');
        if (proced) {


            fetch('https://nameless-inlet-63373.herokuapp.com/CustomerInfo/status', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bal)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert('Approved successfully');
                        const remainingServices = showOrder.filter(product => product._id !== id);
                        setShowOrder(remainingServices);
                    }
                })
        }
        e.preventDefault()
    }
    const handleDeleteProduct = id => {
        const proced = window.confirm('Are You sure you want to delete..?');
        if (proced) {
            const url = `https://nameless-inlet-63373.herokuapp.com/CustomerInfo/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingServices = showOrder.filter(product => product._id !== id);
                        setShowOrder(remainingServices);
                    }
                })
        }
    }
    return (
        <div>
            <h1>All Order Products</h1>
            <Table responsive striped bordered hover >
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showOrder.map((order) => (
                            <>
                                <tr key={order._id}>
                                    <td>{order.brand}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.email}</td>
                                    <td>{order.price}</td>
                                    <td >{order?.status == 'approved' ? <button className="approved" disabled value="approved" ref={statusRef} onClick={handleStatusChange}>{order.status}
                                        <Form.Control ref={idRef} hidden value={order._id} type="text" placeholder="Enter title" /></button>
                                        :
                                        <button className="status" value="approved" ref={statusRef} onClick={handleStatusChange}>{order.status}
                                            <Form.Control ref={idRef} hidden value={order._id} type="text" placeholder="Enter title" /></button>
                                    }
                                    </td>
                                    <td><button className="btn btn-danger mx-2" onClick={() => handleDeleteProduct(order._id)}>Cancel</button></td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default OrderProducts;