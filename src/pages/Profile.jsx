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

  const { name, email } = formData;
  const navigate = useNavigate();
  const Logout = () => {
    auth.signOut();
    navigate("/");
  };

  return <div>this is the Profile Page</div>;
}
export default Profile;
