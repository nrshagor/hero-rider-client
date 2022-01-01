import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hook/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [showMyOrder, setShowMyOrder] = useState([])
    useEffect(() => {
        const url = `https://nameless-inlet-63373.herokuapp.com/MyOrderInfo?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setShowMyOrder(data));
    }, [])
    return (
        <div>
            <h1>my order {showMyOrder.length}</h1>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>

                        <th>List</th>
                        <th>Product Name</th>
                        <th>Product ID</th>
                        <th>Product Price</th>
                        <th> Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showMyOrder.map((myorder) => (
                            <>
                                <tr key={myorder._id} >
                                    <td>1</td>
                                    <td>{myorder.brand}</td>
                                    <td>{myorder._id} </td>
                                    <td>{myorder.price} </td>
                                    <td>{myorder.status} </td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrder;