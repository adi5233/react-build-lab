import React, { useMemo, useState } from "react";
import _ from "lodash";

import Card from "../components/Card";
import UserTable from "../components/UserTable";

import users from "../data/users";
import home from '../assets/images/home.jpg'

import "../styles/dashboard.css";

function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return _.filter(users, (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section>
      <div className="hero">
        <div>
          <p className="eyebrow">
            React compilation experiment
          </p>
          <img
            src={home}
            alt="Dashboard hero"
            className="hero-image"
          />
          <h1>Dashboard</h1>

          <p>
            This application is intentionally built with
            opportunities for optimization.
          </p>
        </div>
      </div>

      <div className="cards">
        <Card
          title="Revenue"
          value="$42,800"
          change="+12.4%"
        />

        <Card
          title="Users"
          value="12,840"
          change="+8.1%"
        />

        <Card
          title="Conversion"
          value="4.82%"
          change="+0.7%"
        />
      </div>

      <div className="panel">
        <h2>Users</h2>

        <input
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          placeholder="Search users..."
        />

        <UserTable users={filteredUsers} />
      </div>
    </section>
  );
}

export default Dashboard;