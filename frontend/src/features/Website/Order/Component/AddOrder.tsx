import React, { useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { loadCompany } from "../../../Admin/Company/CompanySlide";
import { createOrders } from "../OrderSlide";
import { useNavigate } from "react-router-dom";


const AddOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const company = useSelector((state: any) => state.company.company);
  const productorder = useSelector((state: any) => state.cart.items)
  const users = useSelector((state: any) => state.user.userInfo);
  console.log("user,", users);
  // const { user } = JSON.parse(localStorage.getItem("user") as any);
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit: SubmitHandler<any> = (dataInput) => {
    console.log("inputDate", dataInput);

    //  const {user}= JSON.parse(localStorage.getItem("user") as any)
    const user_id = users._id

    dataInput.product_order = productorder
    dataInput.user_id = user_id
    dataInput.status = "Chờ xác nhận"
    dispatch(createOrders(dataInput))
    navigate("/successorder")
    // console.log("ALL", dataInput)

  }

  useEffect(() => {
    dispatch(loadCompany())



  }, [])

  return (

    <Container>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>

          <div className=" border-top p-4 text-white mb-3">
            <h1 className="display-6">Thanh Toán</h1>
          </div>


          <Col sm={8}>

            <h5 className="text-h5">THÔNG TIN KHÁCH HÀNG</h5>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Họ tên khách hàng</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Họ tên"
                  {...register("name")}
                  value={users.name}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Ngày sinh</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Ngày sinh"
                  {...register("birthday")}
                  // value={users.birthday ? users.birthday : ""}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Nhập email"
                  {...register("email")}
                  value={users.email ? users.email : ""}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Số Điện Thoại </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập số điện thoại"
                  {...register("phone")}
                // value={users.phone ? users.phone : "" }
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Địa chỉ </Form.Label>
              <Form.Control
                placeholder="Nhập địa chỉ"
                {...register("address")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Trung tâm tiêm chủng </Form.Label>
              <Form.Select defaultValue="Choose..."  {...register("company")} >
                <option>Choose...</option>
                {company &&
                  company.map((compan: any) => {
                    return (
                      <>
                        <option>{compan.name}</option>
                      </>
                    );
                  })}
              </Form.Select>
            </Form.Group>
            <h5 className="text-h5">PHƯƠNG THỨC THANH TOÁN </h5>

            <Form.Group as={Col} controlId="formGridPassword">
              <div className="mb-3">
                <div>
                  <input {...register("payment")} type="radio" value="Thanh toán tại quầy lễ tân" />
                  Thanh toán tại quầy lễ tân
                </div>
                <div>
                  <input {...register("payment")} type="radio" value="Thanh toán qua chuyển khoản" />
                  Thanh toán qua chuyển khoản
                </div>
                <div>
                  <input {...register("payment")} type="radio" value="Thanh toán qua thẻ" />
                  Thanh toán qua thẻ
                </div>
                <div>
                  <input {...register("payment")} type="radio" value="Thanh toán qua ví MoMo" />
                  Thanh toán qua ví MoMo
                </div>
              </div>
            </Form.Group>


            <Button variant="primary" type="submit">
              Xác nhận
            </Button>

          </Col>

          <Col sm={4}>

            <h4 className="text-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-card-checklist"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
              </svg>

              DANH SÁCH VẮC XIN CHỌN MUA
            </h4>
            {productorder && productorder.map((item: any) => {
              return (
                <>
                  <Card  >
                    <Card.Img className="card-img-top1" variant="top"
                      src={`${import.meta.env.VITE_BASE_URL_BACKEND}/${item.image}`}
                      style={{ width: "286px", height: "180px" }} />
                    <Card.Body>
                      <Card.Title>{item.name.slice(0, 30)}</Card.Title>
                      <Card.Text>

                        {item.description.slice(0, 50)}
                      </Card.Text>
                      <Card.Text>
                        <label htmlFor="">Price</label>:  {item.price}$

                      </Card.Text>

                      <Card.Text>
                        <label htmlFor="">Số lượng</label> :  {item.cartQuanlity}


                      </Card.Text>



                    </Card.Body>

                  </Card>
                  <br />
                </>




              )
            })}




          </Col>

        </Row>
      </Form>
    </Container>
  );
};

export default AddOrder;
