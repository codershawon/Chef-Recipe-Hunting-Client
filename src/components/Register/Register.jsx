import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [control, setControl] = useState(false);
  const [show, setShow] = useState(false);
  const { user, createUser, updateUser } = useContext(AuthContext);
  
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword);
    setError("");
    if (password !== confirmPassword) {
      setError(
        toast.error(
          "Your password didn't match! Please provide password exactly."
        )
      );
      return;
    } else if (password.length < 6) {
      setError(
        toast.error(
          "Your given password length is less than 6 character. Please provide password more than 6 character"
        )
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setSuccess(
          toast.success("Your registration in FoodiesHub website is successful")
        );
      })
      .catch((error) => {
        setError(
          toast.error(
            "Your registration in FoodiesHub website is unsuccessful. Please try again!!"
          )
        );
      });
  };

  return (
    <div className="form">
      <h1 className="titleFont">Create an account</h1>
      <form onSubmit={handleRegister} className="formDetails">
        <h2 className="mb-2">Name</h2>
        <input type="text" name="name" className="inputField w-full mb-2" />
        <h2 className="mb-2">Email</h2>
        <input type="email" name="email" className="inputField w-full" />
        <h2 className="mt-3 mb-2">Password</h2>
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
        <h2 className="mt-2">Confirm Password</h2>
        {show ? (
          <>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="text"
              name="confirmPassword"
              className="inputField w-full"
            />
            <span
              onClick={() => setShow(!show)}
              className="relative left-96 bottom-7"
            >
              <FontAwesomeIcon icon={faEye} />
            </span>
          </>
        ) : (
          <>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name="confirmPassword"
              className="inputField w-full"
            />
            <span
              onClick={() => setShow(!show)}
              className="relative left-96 bottom-7"
            >
              <FontAwesomeIcon icon={faEyeSlash} />
            </span>
          </>
        )}
        <h2 className="mb-1">Photo URL</h2>
        <input type="text" name="photo" className="inputField w-full mb-2" />
        <button className="button w-full mt-8 font-semibold">
          Create an account
        </button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login">
            <button className="text-yellow-800 font-semibold">Login</button>
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
        <button className="googleBtn flex justify-center items-center mx-auto w-full p-2 mt-8">
          <img
            className="w-[32px] h-[32px] mr-2"
            src="https://i.ibb.co/GtNwXBL/Git-Hub-Mark-removebg-preview.png"
            alt=""
          />
          <span>Continue With GitHub</span>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Register;