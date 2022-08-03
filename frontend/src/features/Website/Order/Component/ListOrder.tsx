import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getOrderList } from '../OrderSlide'
import { Container } from '@material-ui/core'



const ListOrder = () => {
    const orderinUser = useSelector((state: any) => state.order.current)
    console.log("orderinUser", orderinUser)

    // const cartTotal = useSelector((state:any) => state.cart.cartTotalAmount)
    // console.log("cartTotal", cartTotal)
    const userId = useSelector((state: any) => state.user.userInfo);
    const user_id = userId._id;
    console.log("userId", user_id)
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getOrderList(user_id))


    }, [user_id])
    return (
        <div>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>OrderId</th>
                            <th>Họ và tên</th>
                            <th>Ngày tiêm</th>
                            <th>Trạng thái</th>
                            <th>Chi tiết</th>
                            {/* <th>Tổng đơn hàng</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {orderinUser && orderinUser.map((orderitem: any) => {
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
            </Container>

        </div>
    )
}

export default ListOrder
