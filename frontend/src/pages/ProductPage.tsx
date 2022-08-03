import React from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { list } from "../api/category";
import { getproductsCate, listproduct } from "../api/product";

type Props = {};

const ProductPage = (props: Props) => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [sortprice, setSortPrice] = useState([]);

  useEffect(() => {
    const loadCategory = async () => {
      const { data } = await list();

      setCategory(data);
    };
    loadCategory();
  }, []);

  useEffect(() => {
    const loadProduct = async () => {
      const { data } = await listproduct();

      setProduct(data);
    };
    loadProduct();
  }, []);

  const hanldeClickCategory = async (id: any) => {
    console.log("idcate", id);
    const { data } = await getproductsCate(id);
    setProduct(data);
  };

  return (
    <div>
      <Container>
        <Row className="ab">
          <Col sm={4}>
            <div className="dropdow-grid">
              <div>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-custom-components">
                    Danh mục
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {category &&
                      category.map((cate: any) => {
                        return (
                          <>
                            <Dropdown.Item
                              eventKey="1"
                              onClick={() => hanldeClickCategory(cate._id)}

                            >
                            

                              {cate.name}
                            </Dropdown.Item>
                          </>
                        );
                      })}
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-custom-components">
                    Sắp xếp theo giá
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* {sortprice &&
                      sortprice.map((price: any) => {
                        return (
                          <>
                            <Dropdown.Item
                              eventKey="1"
                              onClick={() => hanldeClickCategory(cate._id)}
                            >
                              {cate.name}
                            </Dropdown.Item>
                          </>
                        );
                      })} */}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Col>

          <Col sm={8}>
            <CardGroup className="card-groud">
              {product &&
                product.map((productitem: any) => (
                  <div className="product-container">
                    <Card>
                      {/* <Card.Img
                        variant="top"
                        src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                      /> */}
                      <Card.Body>
                        <Card.Title>
                          <a href={`/vaccine/${productitem.id}`}>
                            {productitem.name}
                          </a>
                        </Card.Title>
                        <Card.Text>
                          <span>Phòng bệnh: </span>
                          <p>{productitem.description}</p>
                          <span>{productitem.price}</span>
                        </Card.Text>
                      </Card.Body>
                      <Button variant="success" className="btn-pro">
                        Chọn Mua
                      </Button>
                    </Card>
                  </div>
                ))}
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
