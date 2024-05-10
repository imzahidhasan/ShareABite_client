import { useContext } from "react";
import { FirebaseContext } from "./FirebaseProvider";

const useAuth = () => {
  const data = useContext(FirebaseContext);
  return data;
};

export default useAuth;
