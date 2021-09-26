import React from "react";
import { Route, Routes } from "react-router";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPerdeu from "./LoginPerdeu";
import LoginReset from "./LoginReset";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPerdeu />} />
        <Route path="reset" element={<LoginReset />} />
      </Routes>
    </div>
  );
};

export default Login;
