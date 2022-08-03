import React from 'react'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getOrderList, showOrderbyPhone } from '../features/Website/Order/OrderSlide'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { faL } from '@fortawesome/free-solid-svg-icons'


const SeachPhone = () => {
    const [showData, setShowData] = useState(false)
    const showorderinphone = useSelector((state:any) => state.order.current)
    console.log("show", showorderinphone)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    
        // dispatch(showOrderbyPhone())
        const onSubmit: SubmitHandler<any> = (data: any) => {
            console.log("datasearch", data);
    
            dispatch(showOrderbyPhone(data));
            setShowData(true)
            // navigate("/order")

            
        };
        // useEffect(() => {
        //    dispatch(getOrderList(""));
        // }, [])
       
   
    
    return (
        <div>
            <div>
                <Container >
                    <Row className='row-container'>
                        <Col>
                            <Card.Img variant="top" src="https://www.cowin.gov.in/assets/images/code-integration-illustration.svg" />
                        </Col>
                        <Col>
                            <h1 className='text-h1'>
                                TRA CỨU THÔNG TIN ĐẶT MUA VẮC XIN

                            </h1>
                            <p>Dùng số điện thoại đã đặt mua để đăng nhập hoặc đăng ký và tra cứu thông tin đơn hàng của quý khách.</p>
                            <form  onSubmit={handleSubmit(onSubmit)}>
                            <Form.Control
                                type="text"
                                {...register("phone")}
                                name="phone"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                            <Button variant="success" type='submit'>Tiếp tục</Button>


                            </form>
                          

                        </Col>
                    </Row>


                </Container>

            </div>
            <div>
            {showData&& <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>OrderId</th>
                            <th>Ho va Ten</th>
                            <th>Ngay Tiem</th>
                            <th>Status</th>
                            <th>Details</th>
                            {/* <th>Tổng đơn hàng</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {showorderinphone && showorderinphone.data.map((orderitem: any) => {
                            return (
                                <tr>
                                    <td>DH{orderitem._id.slice(0, 5)}</td>
                                    <td>{orderitem.name}</td>
                                    <td>{orderitem.updatedAt}</td>
                                    <td>{orderitem.status}</td>
                                    <td><a href={`/orderdetail/${orderitem._id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#198754" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                        </svg>
                                    </a></td>
                                    {/* <td>{orderitem.product_order}</td> */}
                                </tr>

                            )
                        })}

                    </tbody>
                </Table>
            </Container>}
            </div>


        </div>
    )
}

export default SeachPhone