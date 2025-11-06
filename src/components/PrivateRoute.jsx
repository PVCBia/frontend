import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

function PrivateRoute() {

    const { user } = useAuth();

    //Se logado, renderiza rota filha - outlet
    //se não, vai para login
    return user ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;