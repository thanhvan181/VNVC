import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadInjectionPark, readoneInjection, updateInjectionParks } from '../../InjectionPark/InjectionPark';
import { useParams } from "react-router-dom";

const { Option } = Select;



const Edit = () => {
  
    const { id } = useParams();

    const dispatch = useDispatch();
   
    const cateogory = useSelector((state: any) => state.category.category);
    const subcategory = useSelector((state:any) => state.subcategory.subcategory)
    const injectionone = useSelector((state: any) => state.injection.current)






    // const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const [form] = Form.useForm();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(readoneInjection(id));
       
        
      
      }, [id])
      form.setFieldsValue(injectionone);
    
     

    const onSubmit:any = (dataInput: any) => {

       
     
        console.log("idedit", id),
        console.log("datainput", dataInput)
        
        dispatch(updateInjectionParks({id, dataInput}))
        dispatch(loadInjectionPark())
      
        navigate("/admin/injection")


    }
 

    return (
        <>
            <Form 
                onFinish={onSubmit}
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >

                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="description" name="description"> 
                    <TextArea  placeholder="maxLength is 6"  />

                </Form.Item>
               
                <Form.Item label="Category_id" name="category_id">
                  
                  <Select>
                          {cateogory && cateogory.map((compa:any) => {
                              return (
                                  <>
                                    <Option value={compa._id}>{compa.name}</Option>
                                  </>
                              )
                          })}
                        
                      </Select>
                  </Form.Item>
             
               
                <Form.Item label="subcategory_id"  name="subcategory_id">
                <Select>
                        {subcategory && subcategory.map((sub:any) => {
                            return (
                                <>
                                  <Option value={sub._id}>{sub.name}</Option>
                                </>
                            )
                        })}
                      
                    </Select>
                </Form.Item>
                <Form.Item label="Price" name="price">
                    <InputNumber />
                </Form.Item>

               
             
               
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}


export default Edit