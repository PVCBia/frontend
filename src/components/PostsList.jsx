import { useEffect, useState } from 'react';
function PostsList() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
                if (!response.ok) {
                    throw new Error('deu erro na requisicao')
                }
                const data = await response.json();
                setPosts(data);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [])

    if (loading) return <p>Carregando...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <h1>Lista de posts</h1>
            <ul>
                {posts.map((p) => (
                    <li key={p.id}>
                        <strong>{p.title}</strong>
                        <p>{p.body}</p>
                    </li>
                )
                )}
            </ul>
        </>
    )

}
export default PostsList