import React, { useEffect, useRef } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const LoginPage = () => {
  const captchRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) === true) {
      alert("Captcha validation");
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
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
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
