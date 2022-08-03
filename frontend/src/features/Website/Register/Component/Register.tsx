import React from "react";

import {
  Accordion,
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Row,
  Tab,
} from "react-bootstrap";

import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllproducts } from "../../ProductClient/ProductClientSlide";
import { loadCategory, showcategory } from "../../Category/CategorySlide";
import { addRegisterVaccine, resgiterVaccine } from "../RegisterSlide";

const Register = () => {
  const dispatch = useDispatch();

  const [isShowPack, setIsShowPack] = useState(true);
  const company = useSelector((state: any) => state.company.company);
  const categoryList = useSelector((state: any) => state.category.allcategory);
  const productslist = useSelector(
    (state: any) => state.product.productallAdmin
  );
    console.log("productlist",productslist );
  const users = useSelector((state: any) => state.user.userInfo);
  const injection = useSelector((state: any) => state.register.injection);
  const navigate = useNavigate()

  console.log("injection", injection);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<any>();
  const onSubmit = (dataInput: any) => {
    const user_id = users._id;
    let checkboxs = document.querySelectorAll(
      'input[name="product_id"][type="checkbox"]:checked'
    );
    let checkboxs1 = document.querySelectorAll(
        'input[name="injection_id"][type="checkbox"]:checked'
      );
      let selected = Array.from(checkboxs).map((x: any) => x.value);
    let selected1 = Array.from(checkboxs1).map((x: any) => x.value);
    dataInput.product_injection = selected1;
    dataInput.product_odd = selected;
    dataInput.user_id = user_id;

    dispatch(resgiterVaccine(dataInput));
    navigate("/success")
    
    console.log("inputDate", dataInput);
  };
  const handleButtonShowPack = () => {
    console.log("show pack");
    setIsShowPack(true);
    dispatch(showcategory());
  };
  const handleButtonShowProducts = () => {
    console.log("hidden pack");
    setIsShowPack(false);
    dispatch(getAllproducts());
    
  };

  //   const handleButtonShowProducts = () => {
  //       dispatch(getAllproducts())

  //   };

  const hanleClickshowProductPark = (idsub: any) => {
    console.log("idsub", idsub);
    dispatch(addRegisterVaccine({ subcategory_id: idsub }));
  };

  return (
    <div>
      <Container className="regiter-container">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h5 className="text-h5">THÔNG TIN NGƯỜI TIÊM</h5>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Họ tên người tiêm </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Họ tên người tiêm"
                    {...register("name")}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Ngày sinh người tiêm</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Ngày sinh"
                    {...register("birthday")}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Giới tính</Form.Label>
                  <input {...register("sex")} type="radio" value="male"  />
                  Nam
                  <input {...register("sex")} type="radio" value="female" />
                  Nữ
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Mã khách hàng (Nếu có)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mã khách hàng"
                    {...register("code")}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Địa Chỉ</Form.Label>
                <Form.Control
                  placeholder="Nhập địa chỉ"
                  {...register("address")}
                />
              </Form.Group>

              <h5 className="text-h5">THÔNG TIN NGƯỜI LIÊN HỆ </h5>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Họ và tên người liên hệ </Form.Label>
                <Form.Control 
                type="text"
                placeholder="Họ và tên người liên hệ"
                {...register("contact_person_name")} />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Mối quan hệ với người tiêm</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mối quan hệ"
                    {...register("relativeship_name")}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Số điện thoại liên hệ </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Nhập số điện thoại liên hệ"
                    {...register("relativeship_phone")}
                  />
                </Form.Group>
              </Row>
              <Row>
                <h5 className="text-h5">THÔNG TIN DỊCH VỤ </h5>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Trung tâm muốn tiêm </Form.Label>
                  <Form.Select defaultValue="Choose..." {...register("company_id")}>
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
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Ngày muốn tiêm</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder=""
                    {...register("dateo_injection")}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Loại vắc xin muốn đăng ký</Form.Label>

                  <Button variant="success" onClick={handleButtonShowPack}>
                    Vaccine Gói
                  </Button>
                  <Button variant="success" onClick={handleButtonShowProducts}>
                    Vaccine Lẻ
                  </Button>
                  <Tab.Container
                    id="list-group-tabs-example"
                    defaultActiveKey="#link1"
                  >
                    <Row>
                      <Col>
                     
                          <ListGroup style={{display: isShowPack ? "block" :  "none"} } >
                            {categoryList &&
                              categoryList.map((category: any) => {
                                return (
                                  <>
                                    {category.subcategories &&
                                      category.subcategories.map((sub: any) => {
                                        return (
                                          <>
                                            <Accordion>
                                              <Accordion.Item
                                                eventKey={`${sub._id}${category.id}`}
                                                onClick={() => {
                                                  hanleClickshowProductPark(
                                                    sub._id
                                                  );
                                                }}
                                              >
                                                <Accordion.Header>
                                                  {`${category.name}/${sub.name}`}
                                                </Accordion.Header>

                                                <Accordion.Body>
                                                  <CardGroup className="card-groud">
                                                    {injection &&
                                                      injection.map(
                                                        (injection: any) => {
                                                          return (
                                                            <>
                                                              <div className="product-container">
                                                                <InputGroup>
                                                                  <Card className="top-card">
                                                                    <InputGroup.Checkbox
                                                                      aria-label="Checkbox for following text input"
                                                                      type="checkbox"
                                                                      value={
                                                                        injection._id
                                                                      }
                                                                    //   name="product_id"
                                                                      
                                                                      {...register(
                                                                        "injection_id"
                                                                      )}
                                                                    />
                                                                    {/* <Card.Img
                                                                      variant="top"
                                                                      src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                                                                    /> */}
                                                                    <Card.Body>
                                                                      <Card.Title>
                                                                        <a
                                                                          href={`/vaccine/${injection.id}`}
                                                                        >
                                                                          {
                                                                            injection.name
                                                                          }
                                                                        </a>
                                                                      </Card.Title>
                                                                      <Card.Text>
                                                                        <p>
                                                                          {injection.description.slice(
                                                                            0,
                                                                            50
                                                                          )}
                                                                        </p>
                                                                        <span>
                                                                          {
                                                                            injection.price
                                                                          }
                                                                        </span>
                                                                      </Card.Text>
                                                                    </Card.Body>
                                                                  </Card>
                                                                </InputGroup>
                                                              </div>
                                                            </>
                                                          );
                                                        }
                                                      )}
                                                  </CardGroup>
                                                </Accordion.Body>
                                              </Accordion.Item>
                                            </Accordion>
                                          </>
                                        );
                                      })}
                                  </>
                                );
                              })}
                          </ListGroup>
                        <ListGroup  style={{display: !isShowPack ? "block" :  "none"} }>
                        <CardGroup className="card-groud" >
                            {productslist &&
                              productslist.map((product: any) => {
                                return (
                                  <>
                                    <div className="product-container">
                                      <InputGroup>
                                        <Card>
                                          <InputGroup.Checkbox
                                            aria-label="Checkbox for following text input"
                                            type="checkbox"
                                            value={product._id}
                                            {...register(
                                                "product_id"
                                              )}
                                            // {...register("product_id")}
                                          />
                                          <Card.Img
                                            variant="top"
                                            src={`${
                                              import.meta.env
                                                .VITE_BASE_URL_BACKEND
                                            }/${product.image}`}
                                          />
                                          <Card.Body>
                                            <Card.Title>
                                              <a
                                                href={`/product/${product._id}`}
                                              >
                                                {product.name.slice(0, 30)}...
                                              </a>
                                            </Card.Title>
                                            <Card.Text>
                                              <span>Phòng bệnh:</span>
                                              <p>
                                                {product.description.slice(
                                                  0,
                                                  90
                                                )}{" "}
                                                ...
                                              </p>
                                              <span>{product.price}</span>
                                            </Card.Text>
                                          </Card.Body>
                                        
                                        </Card>
                                      </InputGroup>
                                    </div>
                                  </>
                                );
                              })}
                          </CardGroup>

                        </ListGroup>
                        
                    
                      </Col>
                    </Row>
                  </Tab.Container>
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Đăng ký
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
