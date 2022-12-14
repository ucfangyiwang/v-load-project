import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import ForgetPassword from "./pages/ForgetPassword";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./component/Header";
import Footer from "./component/Footer";
import List from "./pages/List"
import DriverSignUp from "./pages/DriverSignUp";
import DriverSignIn from "./pages/DriverSignIn";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/List" element={<List/>}/>
          <Route path="/driverSignUp" element={<DriverSignUp/>}/>
          <Route path="/driverSignIn" element={<DriverSignIn/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
