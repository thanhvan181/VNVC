import React from 'react'
import { useState, useEffect } from "react";

import { Table, Popconfirm, Button, Space } from "antd";
import { isEmpty } from "lodash";

import { Link } from "react-router-dom";
import { list, remove } from '../../../../api/category';
import { useSelector, useDispatch } from 'react-redux';
import { loadCategory, removeCategory } from '../../../Website/Category/CategorySlide';



const TableCategory = () => {
    const [girdData, setGridData] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const categorylist = useSelector((state:any) => state.category.category)
  
    useEffect(() => {
      loadData();
    }, []);
  
    const loadData = async () => {
        setLoading(true);
    
        dispatch(loadCategory())
    
        setLoading(false);
    };
    const handleDelete = (id: any) => {
        console.log('Idremovecate', id)
        dispatch(removeCategory(id))
    //   remove(value._id);
    //   const DataSource = [...modifiData];
    //   const filterData: any = DataSource.filter((item) => item._id !== value._id);
  
    //   setGridData(filterData);
    };
    console.log("CATLIST: ", categorylist)
    const modifiData = categorylist.map((item: any) => ({
      ...item,
      key: item._id,
    //   category: isEmpty(item) ? item.category : body,
    }));
  
    const columns: any[] = [
      
      {
        title: "NAME",
        dataIndex: "name",
        align: "center",
      },
      {
        title: "Actions",
        dataIndex: "actions",
        align: "center",
        render: (_: any, record: any) => {
          return modifiData.length >= 1 ? (
        
             
              <Space>
              <Popconfirm
                title="Bạn có chắc muốn xóa không ?"
                onConfirm={() => handleDelete(record._id)}
              >
                <Button type="primary" danger>
                  Delete
                </Button>
              </Popconfirm>
  
              <Button type="primary">
             <Link to={`/admin/category/${record._id}/edit`}> Edit</Link>
           </Button>
             
            </Space>
        
          ) : null;
        },
      },
    ];
  
    return (
        <div>
      <Button type="primary" className="criclebox tablespace mb-24">
        <a href="/admin/category/add"> Add Categorys</a>
      </Button>
      <Table
        dataSource={modifiData}
        columns={columns}
        bordered
        loading={loading}
      />
    </div>
    )
}

export default TableCategory
