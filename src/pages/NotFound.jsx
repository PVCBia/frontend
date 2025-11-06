import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1>Página não encontrada</h1>
            <p>A página procurada não existe</p>
            <Link to="/">Voltar para página inicial</Link>
        </>
    )
}
export default NotFound;

