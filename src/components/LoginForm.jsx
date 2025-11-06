import { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthContext";

function LoginForm() {

    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await login(email, password)
        }
        catch (err) {
            alert("Falha no login", err)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="mail" name="mail" placeholder="Email..."
                    value={email} onChange={e => setEmail(e.target.value)} />
                <input type="pass" name="pass" placeholder="Senha..."
                    value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Entrar</button>
            </form>
        </>
    )
}
export default LoginForm