import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardGroup, Form, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

import { fetchProduct, readone } from "../features/Website/ProductClient/ProductClientSlide";
import { addToCart } from "../features/Website/Cart/CartSlide";
import { add } from "lodash";

const ShowProduct = () => {
  const dispatch = useDispatch();
 
 
  let items = [];

  const [page, setPage] = useState(1);
  const showProduct = useSelector((state: any) => state.product.value);
  const paging = useSelector((state: any) => state.product.paging);
  // const productone = useSelector((state:any) => state.product.current);

  // console.log("producone", productone)
// 
  
  // const { register, handleSubmit } = useForm();

//   const onSubmit = () => {
//     // console.log("prodcut1", productone)
//     // dispatch(readone(showProduct._id))
//     // const newData = {
//     //     ...productone,

        
//     // } ;
//     // console.log("newData", newData)
//     // dispatch(addToCart(newData));
    
// }

  useEffect(() => {
    
    dispatch(fetchProduct({ pageSize: 4, page: page }));
  }, [page]);
  const addCart = (product: any) => {
    console.log("productaddcart", product)
    dispatch(addToCart(product))
    

  }

  const onHanldClick = (e: any) => {
    // console.log("event", e);
    // console.log("event", e.target.innerHTML);
    let currentPage = e.target.innerHTML ? parseInt(e.target.innerHTML) : 1;
    setPage(currentPage);
  };

  for (let number = 1; number <= paging.pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={(e) => onHanldClick(e)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <h1 className="text-title">Các Loại Vắc Xin</h1>
     
        <CardGroup className="card-product">
          {showProduct &&
            showProduct.map((productitem: any) => (
              <div className="product-container">
              <Card>
                  <Card.Img
                    variant="top"
                    src={`${import.meta.env.VITE_BASE_URL_BACKEND}/${productitem.image}`}
                  />
                  <Card.Body>
                    <Card.Title>
                      <a href={`/product/${productitem._id}`}>
                        {productitem.name.slice(0, 30)}...
                      </a>
                    </Card.Title>
                    <Card.Text>
                      <span>Phòng bệnh: </span>
                      <p>{productitem.description.slice(0, 90)} ...</p>
                      <span>{productitem.price}$</span>
                    </Card.Text>
                  </Card.Body>
                  <Button variant="success" className="btn-pro" type="submit"
                  onClick={() => addCart(productitem)}
                  >
                    Chọn Mua
                  </Button>
                </Card>
              
              </div>
            ))}
        </CardGroup>
      {/* </Form> */}

      <div>
        <Pagination>{items}</Pagination>
      </div>
    </>
  );
};

export default ShowProduct;
