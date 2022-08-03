import React from "react";
import { Form, Input, Button, Select } from "antd";

import { createRef } from "react";
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import { listCity } from "../../api/city";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

type CityAddProps = {
  onAddCompany: (city: any) => void;
};

const CompanyAdd = (props: CityAddProps) => {
  const formRef = createRef<any>();
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const [city, setCity] = useState([])

  useEffect(() => {
    const loadCity = async () => {
      const {data} = await listCity();
      setCity(data);

    }
    loadCity();
    
  }, [])

  const onSubmit: any = (dataInput: any) => {
    props.onAddCompany(dataInput);
    console.log("onaddcompany", dataInput);
    navigate("/admin/company");
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
      <Form {...layout} ref={formRef} name="control-ref" onFinish={onSubmit} form={form}>
        <Form.Item name="name" label="COMPANY" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="ADDRESS" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="mapUrl" label="MAPURL" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="city_id" label="CITY" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
           
          >
            {city && city.map((ci:any) => {
              return (
                <>
                   <Option value={ci._id}>{ci.name}</Option>
                </>
              )
            })}
         
          
          </Select>
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
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CompanyAdd;
