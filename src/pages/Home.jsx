import { Link } from "react-router-dom";
import driverImage from "../picture/customer.jpg";
import customerImage from "../picture/driver.jpg";
function Home() {
  return (
    <div>
      <div className="h-4/5 pt-36 gap-32 flex flex-wrap justify-center ">
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
                <Link to="/signup">Sign up</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
