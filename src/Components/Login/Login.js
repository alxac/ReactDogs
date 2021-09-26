import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPerdeu from "./LoginPerdeu";
import LoginReset from "./LoginReset";
import { UserContext } from "./../../UserContext";

const Login = () => {
  const { login } = useContext(UserContext);
  console.log(login);
  if (login === true) return <Navigate to="/conta" />;
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
