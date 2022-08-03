import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getOrderDetails } from '../OrderSlide'
import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { getTotals } from '../../Cart/CartSlide'



const DetailOrder = () => {
  const orderdetail = useSelector((state: any) => state.order.orderdetail)
  const caTotal = useSelector((state: any) => state.cart.cartTotalAmount)
  console.log("orderDetails", orderdetail)
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    dispatch(getTotals(""))
    dispatch(getOrderDetails(id))

  }, [])

  return (

    <>

      <div className="card1 mt-50 mb-50">
        <div className="col d-flex"><span className="text-muted" id="orderno">order #{orderdetail._id.slice(0, 5)}</span></div>
        <div className="gap">
          <div className="col-2 d-flex mx-auto">
            {/* <img src={} alt="" /> */}
          </div>
        </div>
        <div className="title mx-auto"> Thank you for your order! </div>
        <div className="main"> <span id="sub-title">
          <h5 className='text-h5'>Danh sách vaccine</h5>
        </span>
          {orderdetail.product_order.map((item: any) => {
            return (
              <div className="row row-main">
                <div className="col-3"> <img className="img-fluid" src={`${import.meta.env.VITE_BASE_URL_BACKEND}/${item.image}`} /> </div>
                <div className="col-6">
                  <div className="row d-flex">
                    <p><b>{item.name.slice(0.10)}</b></p>
                  </div>
                  <div className="row d-flex">
                    <p className="text-muted">{item.description.slice(0, 10)}</p>
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-end">
                  <p><b>{item.price}$</b></p>
                </div>
              </div>

            )
          })}


          <hr />
          <div className="total">
            <h2 className='text-h5'>Thông tin đặt hàng</h2>
            <div className="row">
              <div className="col"> <b>Tên: </b> </div>
              <div className="col d-flex justify-content-end"> <b>{orderdetail.name}</b> </div>
            </div>
            <div className="row">
              <div className="col"> <b>Email: </b> </div>
              <div className="col d-flex justify-content-end"> <b>{orderdetail.email}</b> </div>
            </div>
            <div className="row">
              <div className="col"> <b>Địa chỉ: </b> </div>
              <div className="col d-flex justify-content-end"> <b>{orderdetail.address}</b> </div>
            </div>
            <div className="row">
              <div className="col"> <b>Phương thức thanh toán: </b> </div>
              <div className="col d-flex justify-content-end"> <b>{orderdetail.payment}</b> </div>
            </div>
            <div className="row">
              <div className="col"> <b>Số điện thoại: </b> </div>
              <div className="col d-flex justify-content-end"> <b>{orderdetail.phone}</b> </div>
            </div>
            <div className="row">
              <div className="col"> <b>Tổng giá trị đơn hàng: </b> </div>
              <div className="col d-flex justify-content-end"> <b>{caTotal}</b> </div>
            </div>
            <button className="btn1 d-flex mx-auto">Theo dõi đơn hàng </button>
          </div>
        </div>
      </div>







    </>
  )


}


export default DetailOrder
