"use client";

import { useState } from "react";
import { sampleManufacturers, sampleUsers } from "../../../SAMPLE_DATA";
import { Table } from "antd";

const columns = [
  {
    title: "first name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "last name",
    dataIndex: "lastName",
    key: "lastName",
  },
];

const usersPage = () => {
  const [users, setUsers] = useState(
    sampleUsers.map((user) => {
      return {
        //...user,
        firstName: user.firstName,
        lastName: user.lastName,
        key: user._id,
      };
    })
  );

  return <></>; //<Table dataSource={users} columns={columns} />;
};

export default usersPage;
