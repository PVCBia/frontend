import { createContext, useContext, useState } from 'react';

//Criando o contexto
const AuthContext = createContext()

// Provider que envolve a app
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    async function login(email, password) {
        /*const data = await apiFetch("/login", {
            method: "POST",
            body: JSON.stringify({ email, password })
        })
        if (data.token) {
            localStorage.setItem("token", data.token)
            setUser({ email })
        }*/

        const res = await fetch("http://localhost:3001/users");
        const users = await res.json()
        const user = users.find(u => u.email === email && u.password === password)
        if (user) {
            localStorage.setItem("token", user.token)
            return true;
        }
        return false;

    }

    function logout() {
        localStorage.removeItem("token")
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

//Hook para acessar o  contexto
export function useAuth() {
    return useContext(AuthContext)
}


