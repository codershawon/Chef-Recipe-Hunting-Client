import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Header = () => {
  const { user,logout } = useContext(AuthContext);
  const handleLogout=()=>{
    logout()
    .then()
    .catch(error=>console.log(error))
  }
  return (
    <div className="navbar bg-[rgba(255, 255, 255, 0.87)] shadow shadow-2xl mx-auto flex justify-around">
      <div className="navbar-start">
        <div className="navbar-center flex items-center text-3xl font-bold">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/HT89jWX/818df10f7a2fa98b1705ae343802cd18-removebg-preview.png"
            alt=""
          />
          <span className="text-pink-600">
            F<span className="text-[#242424]">oo</span>diesHub
          </span>
        </div>
      </div>
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-200 rounded-box w-52 text-2xl font-bold"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        {user ? (
          <>
            <img
              className="w-10 h-10"
              src="https://i.ibb.co/pzbCZyg/photo-1511367461989-f85a21fda167-removebg-preview.png"
              alt=""
            />
            <Link to="/register">
              {" "}
              <button onClick={handleLogout} className="btn btn-outline btn-info h-5 ml-3">
                Logout
              </button>
            </Link>
          </>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn btn-outline btn-info h-5 ml-3">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
