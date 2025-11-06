import { useState } from 'react'
function AddPostForm() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [status, setStatus] = useState('idle') //idle, sending, success, error
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    body,
                    userId: 1
                })
            });
            if (!response.ok) throw new Error()
            const newPost = await response.json()
            console.log(newPost)
            setStatus("succcess");
            setTitle("");
            setBody("");
        } catch {
            setStatus("error")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

            <input type="text"
                value={body}
                onChange={(e) => setTitle(e.target.value)} />

            <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Enviando.." : "Adicionar"}
            </button>
            {status === "error" && <p>Ocorreu um erro</p>}
            {status === "success" && <p>Enviado com sucesso</p>}

        </form>
    )
}
export default AddPostForm;