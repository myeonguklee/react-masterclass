import React from "react";
import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log(readSearchParams)
  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "123",
    })}, 3000);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
