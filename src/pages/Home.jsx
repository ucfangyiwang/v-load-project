import { Link } from "react-router-dom";
import Maps from "./Tracking"
import driverImage from "../picture/customer.jpg";
import customerImage from "../picture/driver.jpg";
import { getAuth } from "firebase/auth";
import { useState , useEffect, Fragment} from "react";
function Home() {
  const auth = getAuth();
  const [user, setuser] = useState();
  useEffect(() => {
    setuser(auth.currentUser);

    console.log( "this is user",user);
  }, [user, auth.currentUser,auth]);

  return (
    <div>
      <div className=" pt-36 gap-32 flex flex-wrap justify-center ">
      {user==null ?
      <Fragment>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={driverImage} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sign Up as a Customer</h2>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link to="/signup">Sign up</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={customerImage} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sign Up as a Driver</h2>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link to="/driverSignUp">Sign up</Link>
              </button>
            </div>
          </div>
        </div>
        </Fragment>
        :<></>}
        <div><Maps/></div>
      </div>

    </div>
      
  );
}
export default Home;
