


    
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useEffect } from 'react';
import { fetchProduct } from "../features/Website/ProductClient/ProductClientSlide";

const CardCasual = () => {
    const dispatch = useDispatch();
    ;
    const products = useSelector( (state: any) => state.product.value);
    console.log("getProduc", products)
  
    useEffect(() => {
          dispatch(fetchProduct())
             
      }, [])

    return (
        <>
            <h1 className="text-title">Các Loại Vắc Xin</h1>
            <CardGroup className="card-product">
              {products &&
                products.map((productitem: any) => (
                  <div className="product-container">
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                      />
                      <Card.Body>
                        <Card.Title>
                          <a href={`/product/${productitem._id}`}>
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
           
       
        </>
    )
}

export default CardCasual
