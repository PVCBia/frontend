import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function UsuarioDetalhe() {

    const [user, setUser] = useState([])
    const { id } = useParams(); //pego o param. da url

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`https://api.github.com/users/${id}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Erro ao buscar usuario", error)
            }
        }
        fetchUser();
    }, [id]);

    if (!user) return <p>Carregando detalhes..</p>
    return (
        <>
            <h2>Detalhes do Usuario do GitHub</h2>
            <div>
                <img src={user.avatar_url}
                    alt={user.login} width={80} />
                <p>Login: {user.login}</p>
                <p>Name: {user.name || "Não informado"}</p>
                <Link to={"/"}>Voltar para lista</Link>
            </div>
        </>
    );

}

export default UsuarioDetalhe;