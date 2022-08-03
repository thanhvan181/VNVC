import React from 'react'
import { Button } from 'react-bootstrap';
import "./CategoryAddPage.css";

   
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
// import { create } from '../../../../api/category';
// import {useEffect, useState} from "react"

type InputCate = { // kiểu dữ liệu của từng input
    name: string,
    index: number,
  };
  
type CateAddProps = {
    onAdd: (category: InputCate) => void
}



const CategoryAddPage = (props: CateAddProps) => {
    // const [category, setCategory] = useState([])
 
    const { register, handleSubmit, formState: { errors}} = useForm<InputCate>()
    // sử dụng hook useNavigate để chuyển sang
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<InputCate>  = async (dataInput) => {

        // console.log("Dang o trong onsubmit", dataInput)
        // const {data} = await create(dataInput);
        // console.log("data", data)
        props.onAdd(dataInput);
        navigate("/admin/category")
        // const {data} = await create(dataInput);
        // console.log("datainput", dataInput)

        // console.log("Datacate",data)




        // props.onAdd(dataInput);
        // chuyển trang
        // navigate("/admin/product");
    }
    


    
    return (
        <div>
            <form className='formcate' action="/" method="post" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="lable-text">Chỉ mục </label>
                    <input type="number" className="form-control" {...register('index')}  id="exampleInputEmail1" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="lable-text">Tên danh mục </label>
                    <input type="text" className="form-control"  {...register('name')}  id="exampleInputPassword1" placeholder="nhap ten danh muc" />
                </div>


                
                <Button type="submit" variant="success">Thêm danh mục </Button>
                <hr />
            </form>
        </div>
    );

    }




export default CategoryAddPage