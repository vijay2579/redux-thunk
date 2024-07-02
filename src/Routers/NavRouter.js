import React, { Outlet, Suspense } from "react";
import { Link } from "react-router-dom";

export function NavRouter() {
  return (
    <>
      <nav>
        <Link to="/users">Users List</Link>
        <Link to="/add-user">Add User</Link>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
