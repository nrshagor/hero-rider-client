import React, { useRef, Component } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './AddProduct.css'
const AddProducts = () => {
    const brandRef = useRef();
    const modelRef = useRef();
    const teimRef = useRef();
    const manufactureRef = useRef();
    const registrationRef = useRef();
    const conditionRef = useRef();
    const transmissionRef = useRef();
    const fuelRef = useRef();
    const engineCapacityRef = useRef();
    const kmRunRef = useRef();
    const bodyTypeRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();

    const handleAddServices = e => {

        const brand = brandRef.current.value;
        const model = modelRef.current.value;
        const trim = teimRef.current.value;
        const registration = registrationRef.current.value;
        const condition = conditionRef.current.value;
        const transmission = transmissionRef.current.value;
        const fuel = fuelRef.current.value;
        const engineCapacity = engineCapacityRef.current.value;
        const kmRun = kmRunRef.current.value;
        const bodyType = bodyTypeRef.current.value;
        const price = priceRef.current.value;
        const manufacture = manufactureRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;
        const newServices = {
            brand, model, trim, manufacture, description, img, registration,
            condition, transmission, fuel, engineCapacity, kmRun, bodyType, price
        };
        fetch('https://nameless-inlet-63373.herokuapp.com/products', {
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
                                            <Form.Label>Brand</Form.Label>
                                            <Form.Control ref={brandRef} type="text" placeholder="Enter Brand" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Model</Form.Label>
                                            <Form.Control ref={modelRef} type="text" placeholder="Enter Model" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Trim / Edition:</Form.Label>
                                            <Form.Control ref={teimRef} type="text" placeholder="Enter Trim / Edition" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-2">

                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label> Year of Manufacture:</Form.Label>
                                            <Form.Control ref={manufactureRef} type="text" placeholder="Enter Manufacture" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label> Registration year:</Form.Label>
                                            <Form.Control ref={registrationRef} type="text" placeholder="Enter Registration year" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label> Condition</Form.Label>
                                            <Form.Control ref={conditionRef} type="text" placeholder="Enter Condition" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-2">
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label> Transmission</Form.Label>
                                            <Form.Control ref={transmissionRef} type="text" placeholder="Enter Transmission" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label> Fuel type</Form.Label>
                                            <Form.Control ref={fuelRef} type="text" placeholder="Enter Fuel type" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label> Engine capacity</Form.Label>
                                            <Form.Control ref={engineCapacityRef} type="text" placeholder="Enter Engine capacity" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-2">
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label> Kilometers run</Form.Label>
                                            <Form.Control ref={kmRunRef} type="text" placeholder="Kilometers run" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Body type</Form.Label>
                                            <Form.Control ref={bodyTypeRef} type="text" placeholder="Enter Body type" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="col-12 col-lg-4" controlId="">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control ref={priceRef} type="text" placeholder="Enter Price" />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea"
                                            placeholder="comment here"
                                            style={{ height: '100px' }} ref={descriptionRef} type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Image URL</Form.Label>
                                        <Form.Control ref={imgRef} type="text" placeholder="Enter Image URL" />
                                    </Form.Group>

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