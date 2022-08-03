import { useState, useEffect } from "react";

import { Table, Popconfirm, Button, Space } from "antd";
import { isEmpty } from "lodash";
import { list, remove } from "../api/category";
import { Link } from "react-router-dom";

const DataTable = (props: any) => {
  const [girdData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const { data } = await list();
    setGridData(data);
    setLoading(false);
  };
  const handleDelete = (value: any) => {
    remove(value._id);
    const DataSource = [...modifiData];
    const filterData: any = DataSource.filter((item) => item._id !== value._id);

    setGridData(filterData);
  };

  const modifiData = girdData.map(({ body, ...item }: any) => ({
    ...item,
    key: item.id,
    category: isEmpty(body) ? item.category : body,
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
              title="Ban co chac chan muon xoa khong"
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
  );
};
export default DataTable;
