import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";

function DriverSignUp() {
  const navigate = useNavigate();
  const [passwordcheck, setpasswordcheck] = useState(true);
  const [formData, steformData] = useState({
    nmae: "",
    email: "",
    role:"driver",
    password: "",
    confirmpassword: "",
  });
  const { name, email,role, password, confirmpassword } = formData;

  const onChange = (e) => {
    steformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    if (password !== confirmpassword) {
      alert("passwords do not match");
      return;
    }

    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        role,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, { displayName: name });
      alert("register successful");
      navigate("/");
      const formDatacopy = { ...formData };
      delete formDatacopy.password;
      formDatacopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDatacopy);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div>
      <header className="flex justify-center align-center text-3xl pt-36">
        <p className="pageheader">welcome join v-load Driver!</p>
      </header>
      <div className="py-16  flex justify-center align-center">
        <form className="w-72 " onSubmit={onSubmit}>
          <input
            type="text"
            className="nameInput input input-bordered w-full max-w-xs"
            placeholder="name"
            id="name"
            value={name}
            onChange={onChange}
          />
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

            <input
              type="password"
              className="passwordInput input input-bordered w-full max-w-xs"
              placeholder="confirm your Password"
              id="confirmpassword"
              value={confirmpassword}
              onChange={onChange}
            />
          </div>
          <div className="py-8">
            <button type="submit" className="signinbar btn gap-2">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default DriverSignUp;
