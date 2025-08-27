import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <input type="email" placeholder="Enter email address" />
      <input type="password" placeholder="Enter password" />
      <button className="btn-secondary" onClick={() => navigate("/account")}>Login</button>
    </div>
  );
}

export default Login;
