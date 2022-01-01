import React, { useRef, Component, useState, useEffect } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import '../AddProducts/AddProduct.css'

const EditProduct = () => {
    const [myPlan, setMyPlan] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/61c0d707f2634684524bbfc3`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyPlan(data));
    }, [])
    console.log(myPlan);
    const houseRef = useRef();
    const priceRef = useRef();
    const squreRef = useRef();
    const typeRef = useRef();
    const roomRef = useRef();
    const BedroomsRef = useRef();
    const BathroomsRef = useRef();
    const GarageRef = useRef();
    const buildRef = useRef();
    const forRef = useRef();
    const textRef = useRef();

    const imgRef = useRef();

    const handleAddServices = e => {

        const house = houseRef.current.value;
        const Price = priceRef.current.value;
        const squre = squreRef.current.value;
        const type = typeRef.current.value;
        const rooms = roomRef.current.value;
        const Bedrooms = BedroomsRef.current.value;
        const Bathrooms = BathroomsRef.current.value;
        const Garage = GarageRef.current.value;
        const build = buildRef.current.value;
        const sellfor = forRef.current.value;
        const description = textRef.current.value;

        const img = imgRef.current.value;
        const newServices = {
            house, Price, squre, type, rooms, Bedrooms, Bathrooms, Garage, sellfor, build, description, img
        }
        console.log(newServices);
        fetch('http://localhost:5000/products/61c0d707f2634684524bbfc3', {
            method: 'PUT',
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
                                                <Form.Control ref={houseRef} defaultValue={myPlan.house} type="text" placeholder="Enter House Name" />
                                            </InputGroup>

                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-file-invoice-dollar"></i></InputGroup.Text>
                                                <Form.Control ref={priceRef} defaultValue={myPlan.Price} type="text" placeholder="Enter Price" />
                                            </InputGroup>

                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Squre ft</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-th"></i></InputGroup.Text>
                                                <Form.Control ref={squreRef} defaultValue={myPlan.squre} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>

                                        </Form.Group>

                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="formGridState">
                                            <Form.Label>Property Type</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-laptop-house"></i></InputGroup.Text>
                                                <Form.Select ref={typeRef} defaultValue={myPlan.type}>
                                                    <option value="House">House</option>
                                                    <option value="Apartment">Apartment</option>
                                                    <option value="Office">Office</option>
                                                    <option value="Sublate">Sublate</option>
                                                    <option value="Mess">Mess</option>
                                                </Form.Select>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Rooms</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-igloo"></i></InputGroup.Text>
                                                <Form.Control ref={roomRef} defaultValue={myPlan.rooms} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Bedrooms</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-bed"></i></InputGroup.Text>
                                                <Form.Control ref={BedroomsRef} defaultValue={myPlan.Bedrooms} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Bathrooms</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-bath"></i></InputGroup.Text>
                                                <Form.Control ref={BathroomsRef} defaultValue={myPlan.Bathrooms} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Garage</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-warehouse"></i></InputGroup.Text>
                                                <Form.Control ref={GarageRef} defaultValue={myPlan.Garage} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Year build</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-calendar-alt"></i></InputGroup.Text>
                                                <Form.Control ref={buildRef} defaultValue={myPlan.build} type="text" placeholder="Enter Squre ft" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="formGridState">
                                            <Form.Label>Property For</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-hand-point-right"></i></InputGroup.Text>
                                                <Form.Select ref={forRef} defaultValue={myPlan.sellfor}>
                                                    <option value="Sell">Sell</option>
                                                    <option value="Rent">Rent</option>
                                                </Form.Select>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-8" controlId="">
                                            <Form.Label>Image URL</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><i className="fas fa-images"></i></InputGroup.Text>
                                                <Form.Control ref={imgRef} defaultValue={myPlan.img} type="text" placeholder="Enter Image URL" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control ref={textRef} defaultValue={myPlan.description} as="textarea" rows={3} />
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

export default EditProduct;