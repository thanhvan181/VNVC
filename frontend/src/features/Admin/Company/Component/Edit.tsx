import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
 
  Select,
 
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { EditCompany, readoneCompa } from "../CompanySlide";

import { loadCity } from "../../City/CitySlide";
import { useParams } from "react-router-dom";


const { Option } = Select;

const Edit = () => {

  const dispatch = useDispatch();
const {id} = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const city = useSelector((state: any) => state.city.city)
  const readoneCompany = useSelector((state:any) => state.company.current)
  console.log("readoneCompany", readoneCompany)

  const onSubmit: any = (dataInput: any) => {
    console.log("inputData", dataInput)
    dispatch(EditCompany({id, dataInput}))
    navigate("/admin/company")
  };
  useEffect(() => {
    dispatch(loadCity())
    dispatch(readoneCompa(id))
    form.setFieldsValue(readoneCompany)
   
}, [id]);
 
  

 

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
        <Form.Item label="Address" name="address">
          <Input />
        </Form.Item>
        <Form.Item label="mapUrl" name="mapUrl">
          <Input />
        </Form.Item>

        <Form.Item label="description" name="description">
          <TextArea placeholder="maxLength is 6" />
        </Form.Item>
        <Form.Item label="City" name="city_id">
          <Select>
            {city &&
              city.map((injec: any) => {
                return (
                  <>
                    <Option value={injec._id}>{injec.name}</Option>
                  </>
                );
              })}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Edit;
