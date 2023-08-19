import '../Auth/style.css';
import Login from '../../components/Login/index';
import Signup from '../../components/Signup/index';
import React, { useState } from "react";

const Auth = () => {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className='authenticate'>
      <div className="auth__left">
        <img
          src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup />}
          <div className="auth__more">
            <span>
              {active === "login" ? (
                  <>
                    Don't have an account?{" "}
                    <button onClick={handleChange}>Sign Up</button>
                  </>
                ) : (
                  <>
                    Have an account? <button onClick={handleChange}>Log in</button>
                  </>
              )}
            </span>
          </div>
      </div>
    </div>
  );
}

export default Auth;