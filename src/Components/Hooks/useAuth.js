import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";


const useAuth = ()=>{
    return useContext(AuthContext);
}

export default useAuth;