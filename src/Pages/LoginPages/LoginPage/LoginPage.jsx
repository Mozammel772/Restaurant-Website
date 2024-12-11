// import React, { useContext, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   LoadCanvasTemplate,
//   loadCaptchaEnginge,
//   validateCaptcha,
// } from "react-simple-captcha";
// import Swal from "sweetalert2";
// import { AuthContext } from "../AuthProvider/AuthProvider";

// const LoginPage = () => {
//   const [disable, setDisable] = useState(true);
//   const { signIn } = useContext(AuthContext);
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);

//   const onSubmit = (data) => {
//     console.log("data received", data);
//     signIn(data.email, data.password).then((result) => {
//       const user = result.user;
//       console.log(user);
      
//       Swal.fire({
//         title: "Good job!",
//         text: "You clicked the button!",
//         icon: "success",
//       });
//       navigate(from, { replace: true });
//     });
    
//   };
  
//   const handleValidateCaptcha = (e) => {
//     const user_captcha_value = e.target.value;
//     console.log(user_captcha_value);
//     if (validateCaptcha(user_captcha_value) === true) {
//       setDisable(false); // Enable network after successful captcha validation
//     } else {
//       alert("Captcha is not valid");
//     }
//   };
//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="flex flex-col justify-center items-center  ">
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl font-bold">Login now!</h1>
//           <p className="py-6">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>
//         </div>
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 {...register("email", { required: true })}
//                 placeholder="email"
//                 className="input input-bordered"
//               />
//               {errors.email && (
//                 <span className="text-red-800">Email field is required</span>
//               )}
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 {...register("password", { required: true })}
//                 placeholder="password"
//                 className="input input-bordered"
//               />
//               {errors.email && (
//                 <span className="text-red-800">Password field is required</span>
//               )}
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <LoadCanvasTemplate />
//               </label>
//               <input
//                 onBlur={handleValidateCaptcha}
//                 type="text"
//                 name="captcha"
//                 placeholder="password"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control mt-6">
//               <input
//                 className="btn btn-primary"
//                 type="submit"
//                 disabled={false}
//                 value="login"
//               />
//             </div>
//           </form>
//           <p className="text-xm font-medium text-center mb-3">
//             Create a New Account ?{" "}
//             <Link to={"/register"}>
//               <span className="font-bold text-orange-600"> Register Now</span>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LoginPage = () => {
  const [disable, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onSubmit = (data) => {
    console.log("data received", data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Firebase authentication errors
        let errorMessage = "";
        switch (error.code) {
          case "auth/invalid-email":
            errorMessage = "Invalid email address. Please check your input.";
            break;
          case "auth/user-disabled":
            errorMessage = "This account has been disabled. Please contact support.";
            break;
          case "auth/user-not-found":
            errorMessage = "No user found with this email. Please sign up first.";
            break;
          case "auth/wrong-password":
            errorMessage = "Incorrect password. Please try again.";
            break;
          case "auth/network-request-failed":
            errorMessage = "Network error. Please check your internet connection.";
            break;
          default:
            errorMessage = "An unexpected error occurred. Please try again.";
        }

        Swal.fire({
          title: "Login Failed",
          text: errorMessage,
          icon: "error",
        });
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) === true) {
      setDisable(false); // Enable form submission after successful captcha validation
    } else {
      setDisable(true); // Disable submission if captcha is invalid
      alert("Captcha is not valid");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-800">Email field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-800">Password field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                placeholder="Enter Captcha"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                disabled={disable}
                value="Login"
              />
            </div>
          </form>
          <p className="text-xm font-medium text-center mb-3">
            Create a New Account?{" "}
            <Link to={"/register"}>
              <span className="font-bold text-orange-600">Register Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

