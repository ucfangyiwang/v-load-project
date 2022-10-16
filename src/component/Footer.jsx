import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="mt-auto footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">
          <Link to="/">Home</Link>
        </a>
        <a className="link link-hover">
          <Link to="/signup">Sign up</Link>
        </a>
        <a className="link link-hover">
          <Link to="/signin">Sign In</Link>
        </a>
      </div>

      <div>
        <p>Copyright © 2022 - All right reserved by V-load</p>
      </div>
    </footer>
  );
}
export default Footer;
