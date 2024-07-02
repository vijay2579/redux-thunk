import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { usersListAPI } from "../../features/usersSlice";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const users = await dispatch(usersListAPI());
      setUsersList(users.payload);
    })();
  }, []);

  return (
    <>
      <button className="btn btn-primary">Add New User</button>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <button className="btn btn-secondary">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;
