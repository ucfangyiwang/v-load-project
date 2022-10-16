import { useState } from "react";
import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

function SignIn() {
  const [formData, steformData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    steformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      alert("username or password is wrong");
    }
  };
  return (
    <div>
      <header className="flex justify-center align-center text-3xl pt-36">
        <p className="pageheader">welcome back!</p>
      </header>
      <div className="py-16  flex justify-center align-center">
        <form className="w-72 " onSubmit={onSubmit}>
          <input
            type="email"
            className="emilInput input input-bordered w-full max-w-xs"
            placeholder="e-mail"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type="password"
              className="passwordInput input input-bordered w-full max-w-xs"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="pl-2 pt-4">
            <Link to="/forgetpassword">forget your password</Link>
          </div>
          <div className="pl-2 py-4">
            <Link to="/signup">Sign up</Link>
          </div>
          <button className="signinbar btn gap-2">Sign in</button>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
