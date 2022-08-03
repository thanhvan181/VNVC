

import {
    Table,
    Popconfirm,

    Button,
    Space,

} from "antd";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadInjectionPark, removeInjection } from "../InjectionPark";







const ListInjection = () => {

    const [filteredInfo, setFilteredInfo] = useState<any>({});
    const [sortedInfo, setSortedInfo] = useState<any>({});
    const injectionparkAll = useSelector((state: any) => state.injection.injectionpark)
    // console.log("allinjec", injectionparkAll)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadInjectionPark())
    }, [])

    const onRemove = (id: any) => {

        dispatch(removeInjection(id))
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
    const modifiData = injectionparkAll.map((item: any, index: any) => ({
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
            title: 'Price',
            dataIndex: 'price',
            key: 'price',

            filteredValue: filteredInfo.price || null,
            onFilter: (value: any, record: any) => record.price.includes(value),
            sorter: (a: any, b: any) => a.price - b.price,
            sortOrder: sortedInfo.columnKey === 'price',
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
                                <Link to={`/admin/injection/${record._id}/edit`}> Edit</Link>
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
                <a href="/admin/injection/add"> Add Injections</a>
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

export default ListInjection;
