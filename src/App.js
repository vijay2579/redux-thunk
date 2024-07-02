import React, { Suspense } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import AddUser from "./components/todo/AddUser";
import UsersList from "./components/todo/UsersList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route exact path="/users" element={<UsersList />} />
          <Route exact path="/add-user" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function NavWrapper() {
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
