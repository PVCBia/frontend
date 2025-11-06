import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login({ name: "helio", email: "helio@email.com" })
        navigate("/");
    }
    return (
        <div>
            <h1>Login</h1>
            <p>Faça o login para acessar essa pagina</p>
            <button onClick={handleLogin}>Entrar</button>
        </div>
    )
}
export default Login;