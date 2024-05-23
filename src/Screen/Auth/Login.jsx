import React from "react";
import { loginEndpoint } from "../../Spotify";
import './Login.css'

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://i.pinimg.com/564x/39/e5/fe/39e5fe1aa42d87d29fd9810faa6afba2.jpg"
        alt="logo-spot"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOGIN</div>
      </a>
    </div>
  );
}