import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxioSecure from "./useAxioSecure";

const useCart = () => {
  const axioSecures = useAxioSecure();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axioSecures.get(`/cards?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
