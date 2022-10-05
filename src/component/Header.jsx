import { FaUser } from "react-icons/fa";

function Header(){
    return(
        <div>
            
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-3xl">V-load</a>
  </div>
  <div className="flex-none gap-2">
 
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle ">
       
         <FaUser className=" flex justify-center align-center w-screen w-1/2 rounded-full"/>
        
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a >
            Sign in
          </a>
        </li>
    
        <li><a>Sign up</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    )
    }
    export default Header