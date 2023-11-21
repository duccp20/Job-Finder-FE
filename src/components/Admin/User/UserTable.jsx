import React, { useEffect, useState } from "react";
import { Table, Row, Col } from "antd";
import InputSearch from "./InputSearch";
import { callFetchUserPagination } from "../../../service/api";

// https://stackblitz.com/run?file=demo.tsx
const UserTable = () => {
  const [listData, setListData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [total, setTotal] = useState(0);

  const handleFilterData = async (query) => {
    const param = `current=1&pageSize=2&${query}`;
    const res = await callFetchUserPagination(param);

    if (res?.data && res?.data?.result) {
      setListData(res.data.result);
      //   setCurrent(res.data.meta.current);
      console.log(listData, "listData");
      setPageSize(res.data.meta.pages);
      setTotal(res.data.meta.total);
    }
  };
  useEffect(() => {
    fetchData();
  }, [current, pageSize]);

  const fetchData = async () => {
    const res = await callFetchUserPagination(
      `current=${current}&pageSize=${pageSize}`
    );

    if (res?.data && res?.data?.meta) {
      setListData(res.data.result);
      setCurrent(res.data.meta.current);
      setTotal(res.data.meta.total);
    }
  };
  const columns = [
    {
      title: "id",
      dataIndex: "_id",
    },
    {
      title: "Tên hiển thị",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    setCurrent(pagination.current);
    setPageSize(pagination.pageSize);
    console.log(pagination);
  };

  console.log(listData, "listData");
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <InputSearch handleFilterData={handleFilterData} />
        </Col>
        <Col span={24}>
          <Table
            className="def"
            columns={columns}
            dataSource={listData}
            onChange={onChange}
            pagination={{
              current: current,
              pageSize: pageSize,
              showSizeChanger: true,
              total: total,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default UserTable;
