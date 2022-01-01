import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import useAuth from '../../../Hook/useAuth';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth()
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        const proced = window.confirm('Are You sure you ..?');
        if (proced) {
            fetch('http://localhost:5000/users/admin', {
                method: 'PUT',
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        console.log(data);

                        setSuccess(true)
                    }
                })
        }
        e.preventDefault()
    }
    return (
        <div>
            <h1>Make An Admin</h1>
            <Form onSubmit={handleAdminSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onBlur={handleOnBlur}
                        type="email"
                        placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Make Admin
                </Button>
            </Form>
            {success?.email && <Alert variant="success">
                Make Admin Successfully
            </Alert>}
        </div>
    );
};

export default MakeAdmin;