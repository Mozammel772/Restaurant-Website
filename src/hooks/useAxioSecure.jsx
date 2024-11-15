import axios from "axios";

const useAxioSecure = () => {
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });
  return axiosSecure;
};

export default useAxioSecure;
