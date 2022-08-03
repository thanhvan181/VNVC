import React from "react";
import { Form, Input, Button, Select, Space } from "antd";

import { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCategory, loadCategory, readonecategory } from "../../../Website/Category/CategorySlide";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditCategory = () => {
  const formRef = createRef<any>();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const categoryone = useSelector((state:any) => state.category.current)

 
  // const categorone =
  useEffect(() => {
    dispatch(readonecategory(id));
    
  
  }, [id])

  form.setFieldsValue(categoryone);
  const onSubmit = (dataInput:any) => {
    console.log("datainputeidt", dataInput);

    dispatch(editCategory({id, dataInput}));
    dispatch(loadCategory())
    navigate("/admin/category");
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
        <Form.Item name="index" label="Index" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name Category"
          rules={[{ required: true }]}
        >
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

        <Form.Item>
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
  );
};

export default EditCategory;
