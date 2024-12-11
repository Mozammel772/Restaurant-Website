import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxioPublic from "../../../hooks/useAxioPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxioPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      const userInfo = {
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log("User info", res.data);
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="my-6 text-center">
      <div className="divider"></div>
      <button onClick={handleGoogleSignIn} className="btn btn-secondary">
        <FaGoogle></FaGoogle>Google
      </button>
    </div>
  );
};

export default SocialLogin;
