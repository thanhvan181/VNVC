import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
interface Props {
    
}

const Signup = (props: Props) => {
    return (
        <div>
              <div className='signinpage'>
            <h2 className="text-h1">ĐĂNG KÝ</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                     <Link to="/signin">Đăng nhập </Link>
                </Form.Group>
               
                <Button variant="primary" type="submit">
                   Đăng Ký
                </Button>
            </Form>

        </div>
            
        </div>
    )
}

export default Signup
