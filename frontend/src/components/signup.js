import React, { useState } from 'react';

function LoginSignupPanel() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-reg-panel">
      <div className="login-info-box">
        <h2>Have an account?</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <label id="label-register" onClick={handleToggle}>Login</label>
      </div>

      <div className="register-info-box">
        <h2>Don't have an account?</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <label id="label-login" onClick={handleToggle}>Register</label>
      </div>

      <div className="white-panel">
        {isLogin ? (
          <div className="login-show">
            <h2>LOGIN</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="button" value="Login" />
            <a href="#">Forgot password?</a>
          </div>
        ) : (
          <div className="register-show">
            <h2>REGISTER</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="button" value="Register" />
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignupPanel;
