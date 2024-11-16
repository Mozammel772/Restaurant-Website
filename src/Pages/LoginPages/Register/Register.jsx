import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxioPublic from "../../../hooks/useAxioPublic";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const { createUser, updateProfileURL } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxioPublic();

  const onSubmit = (data) => {
    // console.log("onSubmit", data);
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      updateProfileURL(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            email: user.email,
            name: data.name,
            photoURL: data.photoURL,
            password: data.password,
          };
          // console.log("Profile updated successfully");
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log(
                "Profile updated successfully data basereed successfully"
              );
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Create User successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="flex flex-col justify-center items-center  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors?.name?.type === "required" && (
                <p className="text-red-700 mt-1">This field is required</p>
              )}
              {errors?.name?.type === "maxLength" && (
                <p className="text-red-700 mt-1">
                  First name cannot exceed 20 characters
                </p>
              )}
              {errors?.name?.type === "pattern" && (
                <p className="text-red-700 mt-1">
                  Alphabetical characters only
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name URL</span>
              </label>
              <input
                type="text"
                name="nameURL"
                {...register("nameURL", {
                  required: true,
                })}
                placeholder="name URL"
                className="input input-bordered"
              />
              {errors?.nameURL?.type === "required" && (
                <p className="text-red-700 mt-1">nameURL field is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-800">Password field is required</span>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="text-xm font-medium text-center mb-3">
            Already Account ?{" "}
            <Link to={"/login"}>
              <span className="text-orange-600 font-bold">Login Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
