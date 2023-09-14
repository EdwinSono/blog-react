import { Navigate } from "react-router-dom";
import { useAuth } from "../services/auth"
import { FC, PropsWithChildren } from "react";

const AuthRoute:FC<PropsWithChildren> = ({ children }) =>{

    const auth = useAuth();

    if(!auth.user) return <Navigate to="/login" />

    return  children;
}

export { AuthRoute }
