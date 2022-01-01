import React, { useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Registation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser, faAt, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../Hook/useAuth';
const Learner = () => {
    const userType = "learner";
    const [loginData, setLoginData] = useState({});
    const [licence, setlicence] = useState(null);
    const location = useLocation();
    const history = useNavigate();
    const { user, authError, registerUser, signInWithGogle, isLoading } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
        // const formData = new FormData();
        // formData.append('licence', licence);
        // fetch('', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log('Success:', result);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
    }
    const handleloginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name,
            loginData.age, loginData.phone, loginData.address,
            loginData.licence, loginData.area, loginData.nidpic,
            loginData.profilepic, loginData.carinfo, loginData.typeofvecale, userType, history);
        console.log(registerUser);
        e.preventDefult();

    }

    const handleGoogleSignIn = () => {
        signInWithGogle();
    }
    return (
        <>
            <div className="registration-background">

                <div className="container">
                    <div className="registration-box">
                        <div className="row">
                            <div className="col-md-6 registration-left">
                                <h1>Lesson Learner Registation Form</h1>

                                <Link to="/registerd"><Button variant="text">
                                    Join as a rider
                                </Button></Link>
                                {!isLoading &&
                                    <>
                                        <Form onSubmit={handleloginSubmit} className="my-5">

                                            <Form.Group className="mb-3">
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><FontAwesomeIcon icon={faFileSignature} /></InputGroup.Text>
                                                    <Form.Control type="text" name="name" onBlur={handleOnChange} placeholder="Enter Your Name" />

                                                </InputGroup>
                                            </Form.Group>

                                            <Form.Group className="mb-3" >
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                                    <Form.Control type="email" name="email" onBlur={handleOnChange} placeholder="Enter email" />

                                                </InputGroup>
                                            </Form.Group>
                                            <Row className="mb-2">
                                                <Form.Group as={Col} className="col-12 col-lg-6" >

                                                    <Form.Control type="text" name="age" onBlur={handleOnChange} placeholder="Age" />
                                                </Form.Group>
                                                <Form.Group as={Col} className="col-12 col-lg-6" >
                                                    <Form.Control type="text" name="phone" onBlur={handleOnChange} placeholder="Phone Number" />
                                                </Form.Group>
                                            </Row>
                                            <Form.Group className="mb-3" >
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                                    <Form.Control type="text" name="address" onBlur={handleOnChange} placeholder="Address" />
                                                </InputGroup>
                                            </Form.Group>
                                            {/* <Form.Group controlId="formFile" className="mb-3">
                                                <Form.Label>Driving Licence Picture</Form.Label>
                                                <Form.Control name="licence" onBlur={e => setlicence(e.target.files)} accept='image/*' type="file" />
                                            </Form.Group> */}

                                            <Form.Group className="mb-3" >
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                                    <Form.Control type="text" name="nidpic" onBlur={handleOnChange} placeholder="nidpic" />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                                    <Form.Control type="text" name="profilepic" onBlur={handleOnChange} placeholder="profilepic" />
                                                </InputGroup>
                                            </Form.Group>

                                            <Form.Group as={Col} className="col-12 col-lg-12" controlId="formGridState">
                                                <Form.Label>Vecale Type</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><i className="fas fa-laptop-house"></i></InputGroup.Text>
                                                    <Form.Select name="typeofvecale" onBlur={handleOnChange} >
                                                        <option value="car">Car</option>
                                                        <option value="bike">Bike</option>

                                                    </Form.Select>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                                    <Form.Control type="password" name="password" onBlur={handleOnChange} placeholder="Password" />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                                    <Form.Control type="password" name="password2" onBlur={handleOnChange} placeholder="Re-Type Password" />
                                                </InputGroup>
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                            <Link to="/login"><Button variant="text">
                                                Already Registerd
                                            </Button></Link>
                                        </Form>
                                        <p>================</p>
                                        <Button onClick={handleGoogleSignIn} variant="primary" >
                                            Google Sign In
                                        </Button>
                                    </>
                                }
                                {isLoading && <Spinner animation="border" variant="danger" />}
                                {user?.email && <Alert variant="success">
                                    User Created Successfully
                                </Alert>}
                                {authError && <Alert variant="danger">
                                    {authError}
                                </Alert>}

                            </div>
                            <div className="col-md-6 registration-right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Learner;