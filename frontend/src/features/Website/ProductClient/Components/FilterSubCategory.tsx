import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadSubCategory } from '../../Subcategory/Subcategory';
import { Link } from 'react-router-dom';
import { searchProductinSubcategory } from '../ProductClientSlide';


const FilterSubCategory = () => {
    const dispatch = useDispatch()
    const subcategory = useSelector((state: any) => state.subcategory.subcategory);
    useEffect(() => {
        dispatch(loadSubCategory())
        


    },[])
    const hanldeClickSubCategory = (id:any) => {
   
        dispatch(searchProductinSubcategory(id));
      };
  return (
    <div className="card mb-3">
    <div className="card-header font-weight-bold text-uppercase">
      SubCategory
    </div>
    <ul className="list-group list-group-flush">
        {subcategory && subcategory.map((cateItems:any) => {
            return (
              <li className="list-group-item">
              <Link to="#" className="text-decoration-none stretched-link" 
              onClick={(_id) => hanldeClickSubCategory(cateItems._id)}
              >
                {cateItems.name}
              </Link>
            </li>

            )
        })}
    
     
    </ul>
  </div>
  )
}

export default FilterSubCategory