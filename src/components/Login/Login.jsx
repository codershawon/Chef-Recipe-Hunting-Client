import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const [error, setError] = useState("");
  const[control,setControl]=useState(false)
  const { signIn } = useContext(AuthContext);
  const Navigate=useNavigate()
  const location=useLocation()
  console.log(location)
  const from=location.state?.from?.pathname || "/";
  console.log(from)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset()
        Navigate(from, {replace:true})
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="form w-[500px] h-[550px]">
      <h1 className="titleFont">Login</h1>
      <form onSubmit={handleLogin} className="formDetails">
        <h2 className="mb-3">Email</h2>
        <input
          type="email"
          name="email"
          className="inputField w-full"
          id="email"
          required
        />
        <h2 className="mt-5 mb-3">Password</h2>
        {control ? (
          <>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              name="password"
              className="inputField w-full"
            />
            <span
              onClick={() => setControl(!control)}
              className="relative left-96 bottom-7"
            >
              <FontAwesomeIcon icon={faEye} />
            </span>
            
          </>
        ) : (
          <>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className="inputField w-full"
            />
            <span
              onClick={() => setControl(!control)}
              className="relative left-96 bottom-7"
            >
              <FontAwesomeIcon icon={faEyeSlash} />
            </span>
            
          </>
        )}
        <button className="button w-full mt-10">Login</button>
        <p className="text-center mt-3">
          New to Ema-John?{" "}
          <Link to="/signUp">
            <button className="text-yellow-800 font-semibold">
              Create New Account
            </button>
          </Link>
        </p>
        <div className="flex justify-center items-center gap-4 mt-5">
          <hr className="hr w-1/2"></hr>
          <span>Or</span>
          <hr className="hr w-1/2"></hr>
        </div>
        <button className="googleBtn flex justify-center items-center mx-auto w-full p-2 mt-8">
          <img
            className="w-[32px] h-[32px] mr-2"
            src="https://i.ibb.co/ngm3bhN/google-logo-9808.png"
            alt=""
          />
          <span>Continue With Google</span>
        </button>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default Login;