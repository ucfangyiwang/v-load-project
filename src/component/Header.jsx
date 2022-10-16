import { FaUser } from "react-icons/fa";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [user, setuser] = useState();

  const auth = getAuth();

  useEffect(() => {
    setuser(auth.currentUser);

    console.log(user);
  }, [user, auth.currentUser]);

  const logOut = () => {
    auth.signOut();
    setuser(null);

    navigate("/");
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost normal-case text-3xl">V-load</a>
          </Link>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost rounded-btn">
            Customer
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
          >
            <li>
              <Link to="/signin">Customer Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Customer Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost rounded-btn">
            Driver
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
          >
            <li>
              <Link to="/signin">Driver Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Driver Sign Up</Link>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle ">
                <FaUser className=" flex justify-center align-center w-screen text-2xl rounded-full" />
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <div>Hi {user.displayName}</div>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={logOut}>Log out</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default Header;
