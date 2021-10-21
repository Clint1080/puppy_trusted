import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <h2 className="ui image header">
        <div className="content">Log in to your account</div>
      </h2>
      <form action="" className="ui large form error">
        <div className="ui stacked segment">
          <div className="field error">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address" />
            </div>
          </div>
          <div className="field error">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <div className="ui fluid large teal submit button">Login</div>
        </div>
      </form>
      <div className="ui message"></div>
    </div>
  );
};

export default Login;
