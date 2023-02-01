import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Users from "./pages/users";
import Login from "./pages/login";
import Main from "./pages/main";
import NavBar from "./components/navBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/users/:userId?" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Main />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
