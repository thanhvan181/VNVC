import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import ProductClientSlide, {
  fetchProduct,
  getProductinCategory,
  loadCategory,
  searchProductinSubcategory,
} from "../ProductClientSlide";
import { loadSubCategory } from "../../Subcategory/Subcategory";

const Danhmuc = () => {
  const dispatch = useDispatch();

  const category = useSelector((state: any) => state.category.category);
  const subcategory = useSelector(
    (state: any) => state.subcategory.subcategory
  );

  useEffect(() => {
    dispatch(loadCategory());
    dispatch(loadSubCategory());
  }, []);

  const hanldeClickCategory = (e:any) => {
   

    dispatch(getProductinCategory(e.target.value));
  };
  const hanldeClickSubCategory = (e:any) => {
   
    dispatch(searchProductinSubcategory(e.target.value));
  };
  // useEffect(() => {
  //   dispatch(fetchProduct({ orderBy: price, sortBy: valuesort }));
  // }, []);
  const hanldeClickPrice = (e: any) => {
   
    console.log("price", e.target.value);

    dispatch(fetchProduct({ orderBy:  e.target.value, sortBy:"price" }));
    
  };
 

  return (
    <div className="dropdow-grid">
      <div>
        <Form.Select aria-label="" onChange={(e) => hanldeClickCategory(e)}>
          <option>DANH MỤC SẢN PHẨM</option>
          {category &&
            category.map((cate: any) => {
              return (
                <>
                  <option
                    value={cate._id}
                    // onClick={() => hanldeClickSubCategory(cate._id)}
                  >
                    {" "}
                    {cate.name}
                  </option>
                </>
              );
            })}
        </Form.Select>
      </div>
      <div>
        <Form.Select aria-label="" onChange={(e) => hanldeClickSubCategory(e)}>
          <option>Sắp xếp theo sub Danh mục </option>
          {subcategory &&
            subcategory.map((subcate: any) => {
              return (
                <>
                  <option
                    value={subcate._id}
                    
                  >
                    {" "}
                    {subcate.name}
                  </option>
                </>
              );
            })}
        </Form.Select>
      </div>
      <div>
        <Form.Select aria-label=""  onChange={(e) => hanldeClickPrice(e)}>
          <option value="desc" >
            {" "}
            Sắp xếp mặc định
          </option>
          <option value="desc" >
            {" "}
            Sắp xếp theo giá tăng dần
          </option>
          <option value="asc" >
            {" "}
            Sắp xếp theo giá giảm dần
          </option>
        </Form.Select>
      </div>
    </div>
  );
};

export default Danhmuc;
