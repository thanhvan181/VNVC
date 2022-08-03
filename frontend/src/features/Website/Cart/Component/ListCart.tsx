import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addToCart, decreaseCart, getTotals, removeItemFromCart } from '../CartSlide';
import { cartPrice } from '../selector';
import { useNavigate } from 'react-router-dom';




const ListCart = () => {
    // const carts = JSON.parse( localStorage.getItem('cartItems') as any)
    const carts = useSelector((state: any) => state.cart.items)
    console.log("carts", carts);
    const cartTotal = useSelector((state:any) => state.cart.cartTotalAmount)
    const users = useSelector((state:any) => state.user.userInfo)
    // console.log("cartTotal", cartTotal)
    const navigate = useNavigate();
    // console
    console.log('cart', carts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals({}))
    }, [carts, dispatch])
    useEffect(() => {
        if(!users){
            navigate("/signin")
        }
        

    }, [users])

    const hanldeRomveFromCart = (id:any) => {
        // console.log("itemcart", id)
        dispatch(removeItemFromCart(id))
        

    }
    const hanldeClickDecreaseCart = (itemcart: any) => {
        dispatch(decreaseCart(itemcart))


    }
    const hanldeClickincreaseCart = (itemcart:any) => {
        dispatch(addToCart(itemcart))
    }
    return (
        <>
            <div className=" border-top p-4 text-white mb-3">
                <h1 className="display-6">Giỏ hàng</h1>
            </div>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-md-9">
                        <div className="card">
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <thead className="text-muted">
                                        <tr className="small text-uppercase">
                                            {/* <th scope="col">Hình sản phẩm</th> */}
                                            <th scope="col">Sản phẩm</th>
                                            <th scope="col" style={{ width: 120 }}>
                                                Số lượng 
                                            </th>
                                            <th className='t-price' scope="col" style={{ width: 150 }}>
                                                Giá
                                            </th>
                                            {/* <th scope="col" style={{ width: 150 }}>
                                                Actions
                                            </th> */}
                                            {/* <th scope="col" className="text-right" style={{ width: 130 }}>Actions</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carts && carts.map((itemcart:any) => {
                                            return (
                                                <tr>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-3 d-none d-md-block">
                                                            <img
                                                             src={`${import.meta.env.VITE_BASE_URL_BACKEND}/${itemcart.image}`}
                                                                width="80"
                                                                alt="..."
                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <Link
                                                                to="/product/detail"
                                                                className="text-decoration-none"
                                                            >
                                                               {itemcart.name}
                                                            </Link>
                                                            <p className="small text-muted">
                                                               {itemcart.description.slice(0,30)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='b-groud'>
                                                    <div className="input-group input-group-sm mw-140">
                                                        <button
                                                            // className="btn btn-primary text-white"
                                                            onClick={() => hanldeClickDecreaseCart(itemcart)}
                                                            type="button"
                                                            style={{ height: 30, width: 30 }}
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="1"
                                                            style={{ height: 30 }}
                                                            value={itemcart.cartQuanlity}
                                                        />
                                                        <button
                                                            style={{ height: 30, width: 30 }}
                                                            onClick={() => hanldeClickincreaseCart(itemcart)}
                                                            // className="btn btn-primary text-white"
                                                            type="button"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className='price-tx'>
                                                    <var className="price"></var>
                                                    <small className="d-block text-muted">
                                                       {itemcart.price}$
                                                    </small>
                                                </td>
                                                <td className="text-right">
                                                    <button className="btn btn-sm  mr-2" onClick={() => hanldeRomveFromCart(itemcart._id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg>
                                                    </button>
    
                                                </td>
                                            </tr>

                                            )
                                        })}
                                     
                                       
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                <Link to="/checkout" className="btn btn-primary float-right">
                                    Đặt hàng <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
                                    </svg>
                                </Link>
                                {users && <Link to="/" className="btn btn-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                                    </svg>Tiếp tục đặt hàng
                                </Link>}
                              
                            </div>
                        </div>
                        {/* <div className="alert alert-success mt-3">
                            <p className="m-0">
                                weeks
                            </p>
                        </div> */}
                    </div>
                    <div className="col-md-3">
                        {/* <div className="card mb-3">
                            <h3>Đơn hàng</h3>
                        </div> */}
                        <div className="card">
                            <div className="card-body">
                                <dl className="row border-bottom">
                                    <dt className="col-6">Total price: </dt>
                                    <dd className="col-6 text-right">{cartTotal}$</dd>

                                    <dt className="col-6 text-success">Discount: </dt>
                                    <dd className="col-6 text-success text-right">0</dd>
                                    <dt className="col-6 text-success">
                                    Coupon: {" "}
                                        {/* <span className="small text-muted">EXAMPLECODE</span>{" "} */}
                                    </dt>
                                    <dd className="col-6 text-success text-right">0</dd>
                                </dl>
                                <dl className="row">
                                    <dt className="col-6">Total:</dt>
                                    <dd className="col-6 text-right  h5">
                                        <strong>{cartTotal}$</strong>
                                    </dd>
                                </dl>
                                <hr />
                                {/* <p className="text-center">
                                    <img
                                        src="../../images/payment/payments.webp"
                                        alt="..."
                                        height={26}
                                    />
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light border-top p-4">
                <div className="container">
                    <h6>Payment and refund policy</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>



        </>

    )
}

export default ListCart
