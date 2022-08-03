import React, { useState } from 'react';
import {
    Button,
} from 'antd';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const UploadImage = (props: any) => {

    // const [fileList, setFileList] = useState<any>([])
    // const handleChange = (info: any) => {
    //     console.log("Change upload: ", info)
    //     let fileList = [...info.fileList];
    //     console.log("ADD product handle change: ", fileList)
    //     fileList = fileList.slice(-1);
    //     fileList = fileList.map(file => {
    //         if (file.response) {
    //             file.url = file.response.url;
    //         }
    //         return file;
    //     });
    //     props.setFileList(fileList);
    // };

    const handleRemove = (file: any) => {
        console.log("File Need remove: ", file)
    }
    const antProps = {
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
        onChange: props.onChange,
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

    return (
        <>
            <Upload {...antProps} fileList={props.fileList}>
                {console.log("file List: ", props.fileList)}
                <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
        </>
    )
}


export default UploadImage