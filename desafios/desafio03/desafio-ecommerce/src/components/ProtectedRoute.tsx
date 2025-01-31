import {Navigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

const ProtectedRoute = ({children}: {children: JSX.Element}) => {
    const {user, loading} = useAuth();

    if(loading) return
    if(!user) return <Navigate to="/login" replace />

    return children;
};

export default ProtectedRoute;