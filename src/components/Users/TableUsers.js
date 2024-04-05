import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { FetchAllUsers } from "../../services/UserService";
import React, { useState } from "react";

const TableUsers = (props) => {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    let res = await FetchAllUsers();
    console.log(res);
    if (res && res.data) {
      setListUser(res.data.data);
    }
  };
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};
export default TableUsers;
