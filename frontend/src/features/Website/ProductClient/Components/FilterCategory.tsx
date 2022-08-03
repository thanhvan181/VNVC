import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductinCategory, loadCategory } from '../ProductClientSlide';


const FilterCategory = () => {
    const dispatch = useDispatch()
    const category = useSelector((state: any) => state.category.category);
    useEffect(() => {
        dispatch(loadCategory())
        


    },[])
    const hanldeClickCategory = (id:any) => {
        console.log("eventcate", id)
   

        dispatch(getProductinCategory(id));
      };
    
    return (
        <div className="card mb-3">
      <div className="card-header font-weight-bold text-uppercase">
        Categories
      </div>
      <ul className="list-group list-group-flush">
          {category && category.map((cateItems:any) => {
              return (
                <li className="list-group-item" >
                <Link to="#" className="text-decoration-none stretched-link" onClick={(_id) => hanldeClickCategory(cateItems._id)}>
                  {cateItems.name}
                </Link>
              </li>

              )
          })}
      
       
      </ul>
    </div>
    )
}

export default FilterCategory
