import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

function Layout() {
    const { user, logout } = useAuth();
    const { theme, handleTheme } = useContext(ThemeContext)
    return (
        <>
            <div
                style={{
                    backgroundColor: theme === "light" ? "#fff" : "#333",
                    color: theme === "light" ? "#000" : "#fff"
                }}
            >
                <header>
                    <nav>
                        <Link to="/">Usuários</Link> |{" "}
                        <Link to="/produtos">Produtos</Link>
                    </nav>
                    <div>
                        {user ? (
                            <>
                                Olá, {user.name}
                                <button onClick={logout}> Sair</button>
                            </>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                        <button onClick={handleTheme}>Alternar tema</button>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}
export default Layout;