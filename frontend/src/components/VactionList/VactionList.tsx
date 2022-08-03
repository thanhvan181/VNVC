import React, { useEffect } from "react";
import "./VactionList.css";

import { useSelector, useDispatch } from "react-redux";


import { loadCategory } from "../../features/Website/Category/CategorySlide";
import { getProductinCategory } from "../../features/Website/ProductClient/ProductClientSlide";



const VactionList = () => {
  const dispatch = useDispatch();
  ;
  const category = useSelector( (state: any) => state.category.category);
  useEffect(() => {
    dispatch(loadCategory())

      
}, [])

  return (
    <div className="DIV_1">
      <div className="DIV_2">
        <h2 className="H2_3">Danh mục tiêm chủng</h2>
        <p className="P_4">
          Trung tâm tiêm chủng co-win cung cấp các dịch vụ tiêm chủng phù hợp
          cho mọi lứa tuổi
        </p>
        <div className="DIV_5">
          <div className="DIV_6">
            <ul className="UL_7">
              {category &&
                category.map((categ: any) => {
                  return (
                    <>
                      <li className="LI_8">
                        <a href="" className="A_9">
                         {categ.name}
                        </a>
                        <img src="https://www.cowin.gov.in/assets/images/what's_new_on_cowin.svg" alt="" />
                      </li>
                    </>
                  );
                })}

            
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VactionList;
