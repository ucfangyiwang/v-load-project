import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      alert("Email was sent");
    } catch (error) {
      alert("Could not send reset email");
    }
  };

  return (
    <div className="pageContainer">
      <header className="flex justify-center align-center text-3xl pt-36">
        <p className="pageHeader">Forgot Password</p>
      </header>

      <main className="py-16  flex justify-center align-center">
        <form className="w-72 " onSubmit={onSubmit}>
          <input
            type="email"
            className="emilInput input input-bordered w-full max-w-xs"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <div className="py-8">
            <button onClick={onSubmit} className="btn btn-success">
              Send Reset Link
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
