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
import { addInjectionPark,  loadInjectionPark } from '../../InjectionPark/InjectionPark';
// import { listSub } from '../../../../api/subcategory';
// import { loadSubCategory } from '../../../Website/Subcategory/Subcategory';
// import { addProduct } from '../../../Website/ProductClient/ProductClientSlide';

const { Option } = Select;


const Add = () => {
    // const [injection, setInjection] = useState([])
    // const [company, setCompany] = useState([])

    const dispatch = useDispatch();
   
    const cateogory = useSelector((state: any) => state.category.category);
    console.log("Category", cateogory)
    const subcategory = useSelector((state:any) => state.subcategory.subcategory)





    // const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const [form] = Form.useForm();
    const navigate = useNavigate()



    const onSubmit:any = (dataInput: any) => {

       
        console.log("inputData", dataInput)
        dispatch(addInjectionPark(dataInput))
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


export default Add