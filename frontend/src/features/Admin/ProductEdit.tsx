import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Switch,
} from "antd";
import { useForm } from "react-hook-form";

import TextArea from "antd/lib/input/TextArea";
import { listInjection } from "../../api/injectionpark";
import { list } from "../../api/category";
import { listSub } from "../../api/subcategory";
import { useParams, useNavigate } from "react-router-dom";
import { read } from "../../api/product";

type ProductAddProps = {
  onUpdate: (id: any, product: any) => void;
};
const ProductEdit = (props: ProductAddProps) => {
  const [injection, setInjection] = useState([]);
  const [company, setCompany] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  const dateFormat = "YYYY-MM-DD";
  const { id } = useParams();
  const { Option } = Select;
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onSubmit: any = (dataInput: any) => {
    console.log("DATA submit: ", dataInput);
    props.onUpdate(id, dataInput);

    navigate("/admin/product");
  };

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      console.log(data);

      form.setFieldsValue(data);
    };
    getProduct();
  }, []);

  useEffect(() => {
    const loadInject = async () => {
      const { data } = await listInjection();
      setInjection(data);
    };
    loadInject();
    const loadcompany = async () => {
      const { data } = await list();
      setCompany(data);
    };
    loadcompany();

    const loadsubcategory = async () => {
      const { data } = await listSub();
      setSubcategory(data);
    };
    loadsubcategory();
  }, []);
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
          <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
        </Form.Item>
        <Form.Item label="InjectionPark_id" name="injectionPark_id">
          <Select>
            {injection &&
              injection.map((injec: any) => {
                return (
                  <>
                    <Option value={injec._id}>{injec.name}</Option>
                  </>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item label="subcategory_id" name="subcategory_id">
          <Select>
            {subcategory &&
              subcategory.map((sub: any) => {
                return (
                  <>
                    <Option value={sub._id}>{sub.name}</Option>
                  </>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item label="Category_id" name="category_id">
          <Select>
            {company &&
              company.map((compa: any) => {
                return (
                  <>
                    <Option value={compa._id}>{compa.name}</Option>
                  </>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item label="Start_End">

          <DatePicker name="start_use" ></DatePicker>
        </Form.Item>
        <Form.Item label="End_use">
          <DatePicker name="end_use" ></DatePicker>
        </Form.Item>

        <Form.Item label="Price" name="price">
          <InputNumber />
        </Form.Item>
        <Form.Item label="quanlity" name="quanlity">
          <InputNumber />
        </Form.Item>
        <Form.Item label="available" valuePropName="checked" name="available">
          <Switch />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Edit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProductEdit;
