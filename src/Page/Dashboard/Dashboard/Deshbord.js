import React from 'react';
import { Container, Navbar, Nav, Offcanvas, Col, Row, Tab } from 'react-bootstrap';
import { Link, useRouteMatch, Route, Routes, useMatch, BrowserRouter, Outlet } from 'react-router-dom';

import AdminRoute from '../../LoginAndRegistration/AdminRoute/AdminRoute';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../MyOrder/MyOrder';
import OrderProducts from '../OrderProducts/OrderProducts';

import './Dashbord.css'
import Payment from './Payment/Payment';
import useAuth from '../../../Hook/useAuth';
const Deshbord = () => {

    const { admin, user } = useAuth();
    return (
        <>
            <div>
                <Container fluid className="p-5">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="my-order">
                        <Row xs={1} sm={1} md={2} lg={2} xl={2}>
                            <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                                <div className="bg-light dashbord-left rounded-3 py-4 border" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>
                                    <Nav variant="light" className="flex-column dash-nav">
                                        <Nav.Link as={Link} to='/dashbord' >Dashbord</Nav.Link>{""}

                                        {
                                            admin && <> <Nav.Link as={Link} to='makeAdmin'>Make Admin</Nav.Link>

                                            </>
                                        }
                                        <Nav.Link as={Link} to="alluser">All User</Nav.Link>
                                        {/*<Nav.Link as={Link} to="myorder">My Order</Nav.Link>
                                         <Nav.Link as={Link} to="addProduct">Add Product</Nav.Link>
                                        <Nav.Link as={Link} to="editProduct">Edit Product</Nav.Link> */}


                                    </Nav>

                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={8} lg={9} xl={9}>
                                <div className="bg-light rounded-3 px-2 py-4 border">
                                    <h1>{user.displayName}</h1>
                                    <Outlet />
                                </div>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        </>
    );
};

export default Deshbord;