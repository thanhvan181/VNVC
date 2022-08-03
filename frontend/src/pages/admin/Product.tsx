
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

type ProductManagerProps = {
  products: ProductType[];
  onRemove: (id: number) => void;
};

// type sortProps = {
//     columnKey: any,
//     order: any

// }


const Product = (props: ProductManagerProps) => {
  
  const [filteredInfo, setFilteredInfo] = useState<any>({});
  const [sortedInfo, setSortedInfo] = useState<any>({});

  // let { sortedInfo } = setFilteredInfo;

  const handleChange = (pagination:any, filters:any, sorter:any) => {
     console.log("Em thich sort: ", sorter, filters)
   
      setFilteredInfo(filters)
     
      setSortedInfo(sorter)
  
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    
    setFilteredInfo({}),
    setSortedInfo({})
    
  };
  const setPriceSort = () => {
    setSortedInfo({
        order: 'descend',
        columnKey: 'price',
    });
  };
  const dataproduct = props.products.map(({ body, ...item }: any) => ({
    ...item,
    key: item.id,
    category: body,
    // delete: item._id,
  }));
  // sortedInfo = sortedInfo || {};
  // filteredInfo = filteredInfo || {};

  // const project: any = [
  //   {
  //     title: "IMAGE",
  //     dataIndex: "image",
  //     editable: true,
  //   },
  //   {
  //     title: "NAME",
  //     dataIndex: "name",
  //     editable: true,
      
  //   },
  //   {
  //     title: "PRICE",
  //     dataIndex: "price",
  //     editable: true,
  //   },
  //   {
  //     title: "DESCRIPTION",
  //     dataIndex: "description",
  //     editable: true,
  //   },
  //   {
  //     title: "QUANLITY",
  //     dataIndex: "quanlity",
  //     editable: true,
  //   },
  //   {
  //     title: "Actions",
  //     dataIndex: "actions",
  //     align: "center",
  //     render: (_: any, record: any) => {
  //       console.log("record", record._id);
  //       return dataproduct.length >= 1 ? (
  //         <Space>
  //           <Popconfirm
  //             title="Ban co chac chan muon xoa khong"
  //             onConfirm={() => props.onRemove(record._id)}
  //           >
  //             <Button type="primary" danger>
  //               Delete
  //             </Button>
  //           </Popconfirm>
  //           <Button type="primary">
  //             <Link to={`/admin/product/${record._id}/edit`}> Edit</Link>
  //           </Button>
  //         </Space>
  //       ) : null;
  //     },
  //   },
  // ];
    // let { filteredInfo }  = setFilteredInfo;
    // sortedInfo = sortedInfo || {};
    // filteredInfo = filteredInfo || {};
  
    const project :any = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Pentaxim ', value: 'Pentaxim ' },
          { text: 'Hexaxim', value: 'Hexaxim' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value:any, record:any) => record.name.includes(value),
        sorter: (a:any, b:any) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name',
        ellipsis: true,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a:any, b:any) => a.price - b.price,
        sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'DESCRIPTION',
        dataIndex: 'description',
        key: 'description',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.description || null,
        onFilter: (value:any, record:any) => record.address.includes(value),
        sorter: (a:any, b:any) => a.description.length - b.description.length,
        sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'QUANLITY',
        dataIndex: 'quanlity',
        key: 'quanlity',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.quanlity || null,
        onFilter: (value:any, record:any) => record.quanlity.includes(value),
        sorter: (a:any, b:any) => a.quanlity - b.quanlity,
        sortOrder: sortedInfo.columnKey === 'quanlity' && sortedInfo.order,
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
                onConfirm={() => props.onRemove(record._id)}
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
        <a href="add"> Add Products</a>
      </Button>
      <div className="table-responsive">
      <Space style={{ marginBottom: 16 }}>
          <Button onClick={setPriceSort}>Sort Price</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
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
  );
};

export default Product;
