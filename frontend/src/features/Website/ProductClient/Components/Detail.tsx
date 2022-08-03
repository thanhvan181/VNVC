import React from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useEffect } from 'react';
import { getProductinCategory, readone } from "../ProductClientSlide";
import { addToCart } from "../../Cart/CartSlide";
// import { loadCategory } from "../../Category/CategorySlide";

const Details = () => {
  const dispatch = useDispatch();
  ;
  const {id} = useParams();
  const product = useSelector((state :any) => state.product.current);
  const productincategory = useSelector((state: any) => state.product.value)
  console.log("productlienquan", productincategory)
  

  useEffect(() => {
   dispatch(readone(id))

   dispatch(getProductinCategory(product.category_id))

  
   

  }, [id])
  useEffect(() => {
 
 
    dispatch(getProductinCategory(product.category_id))
 
   
    
 
   }, [product.category_id])

   const addCartProduct = (product: any) => {
    console.log("productaddcart", product);
    dispatch(addToCart(product));
  };
  
 
 


  return (
    <>
      <Container>
        <Row className="">
          <Col sm={4}>
            <Card className="bg-gray text-white">
              <Card.Img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/VaccineCard-250x250-1.png?_=66031" alt="Card image" />
           
            </Card>
          </Col>

          <Col sm={8}>
            <h1>MÔ TẢ THÔNG TIN VACCINE :
            <span>{product.name}</span> </h1>
            {/* <span>{product.category_id}</span> */}
            <p>
              {/* {product.category_id} */}
            {product.description}
            </p>
            <Button variant="success" className="btn-pro"
            onClick={() => addCartProduct(product)}
            >
                          Chọn Mua
            </Button>
          </Col>
        </Row>
        <Row>
          <h1>Các sản phẩm vaccine liên quan </h1>
          <CardGroup className="card-product">
           
            {productincategory && productincategory.map((items:any) => {
              return (
                <div className="product-container">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                  />
                  <Card.Body>
                    <Card.Title>
                      <a 
                      href={`/product/${items._id}`}
                      
                        >
                    
                        {items.name.slice(0,30)}
                       
                      </a>
                    </Card.Title>
                    <Card.Text>
                      <span>Phòng bệnh: </span>
                      <p>{items.description.slice(0,90)}</p>
                      <span>{items.price}</span>
                    </Card.Text>
                  </Card.Body>
                  <Button variant="success" className="btn-pro"
                   onClick={() => addCartProduct(items)}
                  
                  >
                    Chọn Mua
                  </Button>
                </Card>
        </div>
              )
            })}
             
             
              
                
            </CardGroup>

        </Row>
      </Container>
    </>
  );
};

export default Details;
