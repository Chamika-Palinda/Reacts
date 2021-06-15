import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Unichat!!!</h2>
        
        <div className="login-button google">
          <GoogleOutlined />
           Sign with Google
        </div>

        <div className="login-button facebook">
          <FacebookOutlined />
           Sign with Facebook
        </div>
        
      </div>
    </div>
  );
};

export default Login;
