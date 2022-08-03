
import { SearchOutlined } from '@ant-design/icons';
import React from "react";
import {
  Table,
  Popconfirm,
  Card,
  Radio,
  Button,
  Space,
  Form,
  Input,
} from "antd";

import { useState, useEffect } from "react";


import { ProductType } from "../../types/product";
import { Link } from "react-router-dom";
import { SortUp } from "react-bootstrap-icons";
import { sortedLastIndexBy } from 'lodash';
import { CityType } from '../../types/city';

type cityManagerProps = {
  company: any;

    onRemoveCompany: (id: number) => void;
};



const Company = (props: cityManagerProps) => {
    const [filteredInfo, setFilteredInfo] = useState<any>({});
    const [sortedInfo, setSortedInfo] = useState<any>({});

    const handleChange = (pagination:any, filters:any, sorter:any) => {
        console.log("Em thich sort: ", sorter, filters)
      
         setFilteredInfo(filters)
        
         setSortedInfo(sorter)
     
     };
    
   
     const clearAll = () => {
       
       setFilteredInfo({}),
       setSortedInfo({})
       
     };
     const setNameCitySort = () => {
       setSortedInfo({
           order: 'descend',
           columnKey: 'name',
       });
     };
     const dataproduct = props.company.map(({ body, ...item }: any) => ({
       ...item,
       key: item.id,
       city: body,
     
     }));
     
    
       const project :any = [
         {
           title: 'Name',
           dataIndex: 'name',
           key: 'name',
           filters: [
             { text: 'A', value: 'A' },
             { text: 'B', value: 'B' },
             { text: 'C', value: 'C' },
           ],
           filteredValue: filteredInfo.name || null,
           onFilter: (value:any, record:any) => record.name.includes(value),
           sorter: (a:any, b:any) => a.name.length - b.name.length,
           sortOrder: sortedInfo.columnKey === 'name',
           ellipsis: true,
         },
         {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          filters: [
            { text: 'A', value: 'A' },
            { text: 'B', value: 'B' },
            { text: 'C', value: 'C' },
          ],
          filteredValue: filteredInfo.address || null,
          onFilter: (value:any, record:any) => record.address.includes(value),
          sorter: (a:any, b:any) => a.address.length - b.address.length,
          sortOrder: sortedInfo.columnKey === 'address',
          ellipsis: true,
        },
        {
          title: 'MapUrl',
          dataIndex: 'mapUrl',
          key: 'mapUrl',
          filters: [
            { text: 'A', value: 'A' },
            { text: 'B', value: 'B' },
            { text: 'C', value: 'C' },
          ],
          filteredValue: filteredInfo.mapUrl || null,
          onFilter: (value:any, record:any) => record.mapUrl.includes(value),
          sorter: (a:any, b:any) => a.mapUrl.length - b.mapUrl.length,
          sortOrder: sortedInfo.columnKey === 'mapUrl',
          ellipsis: true,
        },
        {
          title: 'Ma tinh thanh',
          dataIndex: 'city_id',
          key: 'city_id',
          filters: [
            { text: 'A', value: 'A' },
            { text: 'B', value: 'B' },
            { text: 'C', value: 'C' },
          ],
          filteredValue: filteredInfo.city_id || null,
          onFilter: (value:any, record:any) => record.city_id.includes(value),
          sorter: (a:any, b:any) => a.city_id.length - b.city_id.length,
          sortOrder: sortedInfo.columnKey === 'city_id',
          ellipsis: true,
        },


        
        
         {
           title: "Actions",
           dataIndex: "actions",
           align: "center",
           render: (_: any, record: any) => {
             console.log("record", record._id);
             return dataproduct.length >= 1 ? (
               <Space>
                 <Popconfirm
                   title="Ban co chac chan muon xoa khong"
                   onConfirm={() => props.onRemoveCompany(record._id)}
                 >
                   <Button type="primary" danger>
                     Delete
                   </Button>
                 </Popconfirm>
                 <Button type="primary">
                   <Link to={`/admin/product/${record._id}/edit`}> Edit</Link>
                 </Button>
               </Space>
             ) : null;
           },
         },
       ];
  
    return (
        <div>
        <Button type="primary" className="criclebox tablespace mb-24">
          <a href="addcompany"> Add COMPANY</a>
        </Button>
        <div className="table-responsive">
        <Space style={{ marginBottom: 16 }}>
            <Button onClick={setNameCitySort}>Sort City</Button>
          
            <Button onClick={clearAll}>Clear filters and sorters</Button>
          </Space>
          <Table
            columns={project}
            dataSource={dataproduct}
          //   pagination={true}
          onChange={handleChange}
            bordered
            className="ant-border-space"
          />
        </div>
      </div>
    )
}

export default Company
