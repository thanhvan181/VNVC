

import {
  Table,
  Popconfirm,

  Button,
  Space,

} from "antd";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadCompany, removeCompany } from "../CompanySlide";








const TableList = () => {

  const [filteredInfo, setFilteredInfo] = useState<any>({});
  const [sortedInfo, setSortedInfo] = useState<any>({});

  const showlistCompany = useSelector((state: any) => state.company.company)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCompany())
  }, [])

  const onRemove = (id: any) => {
    console.log("idcompany", id)

    dispatch(removeCompany(id))
    // console.log("id",id);

  }


  const handleChange = (pagination: any, filters: any, sorter: any) => {
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
  const setNameSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'name',
    });
  };
  const modifiData = showlistCompany.map((item: any, index: any) => ({
    ...item,
    key: item._id,
    index: index + 1,
    //   category: isEmpty(item) ? item.category : body,
  }));

  const project: any = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      width: '10%',

    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'thành niên và thanh niên ', value: 'thành niên và thanh niên ' },
        { text: ' phụ nữ ', value: ' phụ nữ ' },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value: any, record: any) => record.name.includes(value),
      sorter: (a: any, b: any) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name',
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a: any, b: any) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'MapUrl',
      dataIndex: 'mapUrl',
      key: 'addmapUrlress',
      sorter: (a: any, b: any) => a.mapUrl.length - b.mapUrl.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
      key: 'description',
      filters: [
        { text: 'cum', value: 'cum' },
        { text: 'New York', value: 'New York' },
      ],
      filteredValue: filteredInfo.description || null,
      onFilter: (value: any, record: any) => record.description.includes(value),
      sorter: (a: any, b: any) => a.description.length - b.description.length,
      sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
      ellipsis: true,
    },



    {
      title: "Actions",
      dataIndex: "actions",
      align: "center",
      render: (_: any, record: any) => {
        return modifiData.length >= 1 ? (
          <>
            <Space>
              <Popconfirm
                title="Ban co chac chan muon xoa khong"
                onConfirm={() => onRemove(record._id)}
              >
                <Button type="primary" danger>
                  Delete
                </Button>
              </Popconfirm>

              <Button type="primary">
                <Link to={`/admin/company/${record._id}/edit`}> Edit</Link>
              </Button>

            </Space>

          </>



        ) : null;
      },
    },
  ];





  return (
    <div>
      <Button type="primary" className="criclebox tablespace mb-24">
        <a href="/admin/company/add"> Add Company</a>
      </Button>
      <div className="table-responsive">
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={setNameSort}>Sort Name</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table
          columns={project}
          dataSource={modifiData}
          //   pagination={false}
          onChange={handleChange}
          bordered
          className="ant-border-space"
        />
      </div>
    </div>
  );
};

export default TableList;
