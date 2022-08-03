import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchProduct } from "../ProductClientSlide";
import { useForm } from "react-hook-form";
import { addToCart } from "../../Cart/CartSlide";

import FilterCategory from "./FilterCategory";

import FilterSubCategory from "./FilterSubCategory";
import CardServices from "./CardServices";



const ListProduct = () => {
  const dispatch = useDispatch();
  let items = [];

  const [page, setPage] = useState(1);
  const products = useSelector((state: any) => state.product.value);

  const paging = useSelector((state: any) => state.product.paging);
  // const productone = useSelector((state:any) => state.product.current)

  const { register, handleSubmit } = useForm();

 

  useEffect(() => {
    
    dispatch(fetchProduct({ pageSize: 6, page: page }));
  }, [page]);
  const onHanldClick = (e: any) => {
    let currentPage = e.target.innerHTML ? parseInt(e.target.innerHTML) : 1;
    setPage(currentPage);
  };
  const addCartProduct = (product: any) => {
    console.log("productaddcart", product);
    dispatch(addToCart(product));
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
  const hanldeClickPrice = (e: any) => {
   
    console.log("price", e.target.value);

    dispatch(fetchProduct({ orderBy:  e.target.value, sortBy:"price" }));
    
  };
  return (
    <>
      <div
        className="p-5 bg-primary bs-cover"
       
      >
      
        <div className="container text-center">
          <span className="display-5 px-3 bg-white rounded shadow">
            Vaccine
          </span>
        </div>
      </div>
      {/* <Breadcrumb /> */}
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-3">
            <FilterCategory/>
           
            <FilterSubCategory/>
            
              {/* <CardServices />  */}
          </div>
          <div className="col-md-9">
            <div className="row">
              {/* <div className="col-md-8">
                <span className="align-middle font-weight-bold">
               
                  <span className="text-warning">"VACCINE"</span>
                </span>
              </div> */}
              <div className="col-md-4">
                <select 
                  onChange={(e) => hanldeClickPrice(e)}
                  className="form-select mw-180 float-left"
                  aria-label="Default select"
                >
                  <option value="">Sort Price</option>
                  <option value="asc">Sort default</option>
                 
                  <option value="asc">Price low to high</option>
                  <option value="desc">Price high to low</option>
                </select>
              </div>
            </div>
            <hr />
           
            <div className="row g-3">
              {products &&
                products.map((product: any, idx: any) => {
                  return (
                    <div key={idx} className="col-md-4">
                      <div className="card">
                        <img
                          src={`${import.meta.env.VITE_BASE_URL_BACKEND}/${product.image}`}
                          className="card-img-top"
                          alt="..."
                        />

                        <div className="card-body">
                          <h6 className="card-subtitle mb-2">
                            <a
                              href={`/product/${product._id}`}
                              className="text-decoration-none"
                            >
                              {product.name}
                            </a>
                          </h6>
                          <div className="my-2">
                            <span className="font-weight-bold h5">
                              ${product.price}
                            </span>
                          </div>
                          <ButtonGroup size="lg" className="mb-2">
                            <Button type="submit" onClick={() => addCartProduct(product)}>Chọn</Button>

                            <Button >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-cart-plus"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                          </svg>

                            </Button>
                          </ButtonGroup>

                         
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            
           
            <hr />
            <Pagination>{items}</Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
