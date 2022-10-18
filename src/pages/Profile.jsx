import { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";
function Profile() {
  const auth = getAuth();
  const [changeDetils, setChangeDetails] = useState(false);
  const [formData, setformData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  return (
    <div>
      <header className="flex justify-center align-center text-2xl pt-36">
        <p className="pageheader">My detail</p>
      </header>
      <main className="flex justify-center align-center text-xl ">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            name:{auth.currentUser.displayName}
          </div>
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            e-mail:{auth.currentUser.email}
          </div>
        </div>
      </main>
    </div>
  );
}
export default Profile;
