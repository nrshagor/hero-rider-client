import React, { useRef, Component } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import useAuth from "../../Hook/useAuth";
import './AddProduct.css'
const AddProducts = () => {
    const { user } = useAuth()
    const houseRef = useRef();
    const priceRef = useRef();
    const squreRef = useRef();
    const typeRef = useRef();
    const floorNoRef = useRef();
    const floorSideRef = useRef();
    const roomRef = useRef();
    const BedroomsRef = useRef();
    const BathroomsRef = useRef();
    const GarageRef = useRef();
    const buildRef = useRef();
    const forRef = useRef();
    const textRef = useRef();
    const imgRef = useRef();
    const initialInfo = { customerName: user.displayName, email: user.email }
    console.log(initialInfo);
    const handleAddServices = e => {

        const house = houseRef.current.value;
        const Price = priceRef.current.value;
        const squre = squreRef.current.value;
        const type = typeRef.current.value;
        const floorNo = floorNoRef.current.value;
        const floorSide = floorSideRef.current.value;
        const rooms = roomRef.current.value;
        const Bedrooms = BedroomsRef.current.value;
        const Bathrooms = BathroomsRef.current.value;
        const Garage = GarageRef.current.value;
        const build = buildRef.current.value;
        const sellfor = forRef.current.value;
        const description = textRef.current.value;

        const img = imgRef.current.value;
        const newServices = {
            ...initialInfo, house, Price, squre, type, floorNo, floorSide, rooms, Bedrooms, Bathrooms, Garage, sellfor, build, description, img
        }
        console.log(newServices);
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newServices)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Add Services')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <>
            <div className="add-product-background">

                <div className="container">
                    <div className="add-product-box">
                        <div className="row">
                            <h2> Add Product </h2>
                            <div className="col-md-12 add-product-left">
                            </div>
                            <div className="col-md-12 add-product-right">
                                <Form onSubmit={handleAddServices}>
                                    <Row className="mb-2">
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>House Name</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-building"></i></InputGroup.Text>
                                                <Form.Control ref={houseRef} type="text" placeholder="Enter House Name" />
                                            </InputGroup>

                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-file-invoice-dollar"></i></InputGroup.Text>
                                                <Form.Control ref={priceRef} type="text" placeholder="Enter Price" />
                                            </InputGroup>

                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Squre ft</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-th"></i></InputGroup.Text>
                                                <Form.Control ref={squreRef} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>

                                        </Form.Group>

                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="formGridState">
                                            <Form.Label>Property Type</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-laptop-house"></i></InputGroup.Text>
                                                <Form.Select ref={typeRef}>
                                                    <option value="House">House</option>
                                                    <option value="Apartment">Apartment</option>
                                                    <option value="Office">Office</option>
                                                    <option value="Sublate">Sublate</option>
                                                    <option value="Mess">Mess</option>
                                                </Form.Select>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Floor No</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-sliders-h"></i></InputGroup.Text>
                                                <Form.Control ref={floorNoRef} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Floor side</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-sitemap"></i></InputGroup.Text>
                                                <Form.Control ref={floorSideRef} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Rooms</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-igloo"></i></InputGroup.Text>
                                                <Form.Control ref={roomRef} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Bedrooms</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-bed"></i></InputGroup.Text>
                                                <Form.Control ref={BedroomsRef} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Bathrooms</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-bath"></i></InputGroup.Text>
                                                <Form.Control ref={BathroomsRef} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Garage</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-warehouse"></i></InputGroup.Text>
                                                <Form.Control ref={GarageRef} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Year build</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-calendar-alt"></i></InputGroup.Text>
                                                <Form.Control ref={buildRef} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="formGridState">
                                            <Form.Label>Property For</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-hand-point-right"></i></InputGroup.Text>
                                                <Form.Select ref={forRef}>
                                                    <option value="Sell">Sell</option>
                                                    <option value="Rent">Rent</option>
                                                </Form.Select>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-8" controlId="">
                                            <Form.Label>Image URL</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-images"></i></InputGroup.Text>
                                                <Form.Control ref={imgRef} type="text" placeholder="Enter Image URL" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control ref={textRef} as="textarea" rows={3} />
                                        </Form.Group>
                                    </Row>
                                    <Button variant="primary" type="submit" value="Add">
                                        Add product
                                    </Button>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default AddProducts;