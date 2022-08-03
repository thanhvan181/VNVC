import React from "react";
import { Form, Input, Button, Select, Space } from "antd";

import { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../../Website/Category/CategorySlide";
import { useNavigate } from "react-router-dom";

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};



const AddCategory = () => {
    const formRef = createRef<any>();
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state:any) => state.user.userInfo)


   

    const onSubmit = (dataInput:any) => {
        console.log('datainput', dataInput)
         const token = users.token

      const iduser = users._id;
      console.log("iduser", iduser)


        dispatch(addCategory({iduser, dataInput, token}))
        navigate("/admin/category")

    





      

      };
      const onReset = () => {
        formRef.current!.resetFields();
      };
      const onFill = () => {
        formRef.current!.setFieldsValue({
          note: "Hello world!",
          gender: "male",
        });
      };

    return (
        <>
        <Form ref={formRef} name="control-ref" onFinish={onSubmit} form={form}>
        <Form.Item name="index" label="Index"  rules={[{ required: true }]}>
          <Input type="number" />
       
        </Form.Item>
        <Form.Item name="name" label="Name Category" rules={[{ required: true }]}>
          <Input />
       
        </Form.Item>
        
       
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("gender") === "other" ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>

        <Form.Item >
         <Space>
         <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
         </Space>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
      </>
    )
}

export default AddCategory
