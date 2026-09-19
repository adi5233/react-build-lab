import React from "react";

function UserTable({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Region</th>
          <th>Revenue</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.region}</td>
            <td>${user.revenue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;