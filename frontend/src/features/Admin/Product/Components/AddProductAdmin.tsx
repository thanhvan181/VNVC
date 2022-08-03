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
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadInjectionPark } from '../../InjectionPark/InjectionPark';
import { listSub } from '../../../../api/subcategory';
import { loadSubCategory } from '../../../Website/Subcategory/Subcategory';
import { addProduct } from '../../../Website/ProductClient/ProductClientSlide';



const { Option } = Select;


const AddProduct = () => {
    // const [injection, setInjection] = useState([])
    // const [company, setCompany] = useState([])

    const dispatch = useDispatch();
    const injection = useSelector((state: any) => state.injection.injectionpark)
    const cateogory = useSelector((state: any) => state.category.category);
    const subcategory = useSelector((state: any) => state.subcategory.subcategory)
    const [fileList, setFileList] = useState<any>([])




    // const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const user = useSelector((state: any) => state.user.userInfo);
    const token = user.token

    const iduser = user._id;


    console.log("iduser", iduser)

    const onSubmit: any = (dataInput: any) => {
        console.log("INPUT: ProductData", dataInput)
        dataInput.image = `public/${dataInput.image.file.response.files.file.newFilename}`
        dispatch(addProduct({ iduser, dataInput, token }))
        navigate("/admin/product")
    }

    useEffect(() => {
        dispatch(loadInjectionPark())
        dispatch(loadSubCategory())
    }, [])

    const handleChange = (info: any) => {
        console.log("Change upload: ", info)
        let fileList= [...info.fileList];
        console.log("ADD product handle change: ", fileList)
      
        fileList = fileList.slice(-1);

        // 2. Read from response and show file link
        fileList = fileList.map(file => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.url;
            }
            return file;
        });
        console.log("SET fileLIst with value: ", fileList)
        setFileList(fileList);
    };

    const handleRemove = (file: any) => {
        console.log("File Need remove: ", file)
    }
    const props = {
        action: `${import.meta.env.VITE_BASE_URL_API}/upload`,
        beforeUpload: (file: any) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error(`${file.name} is not a png file`);
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('Image must smaller than 2MB!');
            }
            return isJpgOrPng && isLt2M;;
        },
        onChange: handleChange,
        multiple: false,
        progress: {
            strokeColor: {
                '0%': '#108ee9',
                '100%': '#87d068',
            },
            strokeWidth: 3,
            format: (percent: any) => `${parseFloat(percent.toFixed(2))}%`,
        },
        onRemove: handleRemove,
        UploadFile: (data: any) => {
            console.log("DATA: ", data)
        }

    };

    console.log("NNC Props ant: ", props)

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
                    <TextArea placeholder="maxLength is 6" />
                </Form.Item>
                <Form.Item label="Upload image" name="image">
                    <Upload {...props} fileList={fileList}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="InjectionPark_id" name="injectionPark_id">
                    <Select>
                        {injection && injection.map((injec: any) => {
                            return (
                                <>
                                    <Option value={injec._id}>{injec.name}</Option>
                                </>
                            )
                        })}

                    </Select>
                </Form.Item>
                <Form.Item label="subcategory_id" name="subcategory_id">
                    <Select>
                        {subcategory && subcategory.map((sub: any) => {
                            return (
                                <>
                                    <Option value={sub._id}>{sub.name}</Option>
                                </>
                            )
                        })}

                    </Select>
                </Form.Item>
                <Form.Item label="Category_id" name="category_id">

                    <Select>
                        {cateogory && cateogory.map((compa: any) => {
                            return (
                                <>
                                    <Option value={compa._id}>{compa.name}</Option>
                                </>
                            )
                        })}

                    </Select>
                </Form.Item>
                <Form.Item label="Start_use" name="start_use">
                    {/* <DatePicker /> */}
                </Form.Item>
                <Form.Item label="End_use" name="end_use">
                    {/* <DatePicker /> */}
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
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}


export default AddProduct