import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LoginPage = () => {
  const captchRef = useRef(null);
  const [disable,setDisable] = useState(true)
  const {signIn} = useContext(AuthContext)


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password )
    .then(result =>{
      const user = result.user
      console.log(user)
    })
  };
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) === true) {
      setDisable(false) // Enable network after successful captcha validation
    } else {
      alert("Captcha is not valid");
    }
    // Add your validation logic here
    // Example: if (captchaValue === "your-captcha-value") {
    //   // Form submission logic
    // } else {
    //   // Handle captcha validation error
    // }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="flex flex-col justify-center items-center  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchRef}
                name="captcha"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <button
              onClick={handleValidateCaptcha}
              className="btn btn-outline btn-xs"
            >
              Validation
            </button>
            <div className="form-control mt-6">
              <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p><small>Create a New Account ? <Link to={"/register"}>Register Now</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
