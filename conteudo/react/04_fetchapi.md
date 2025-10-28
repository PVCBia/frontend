# Integração do React com a Fetch API

Este guia aborda como integrar a **Fetch API** em suas aplicações React para consumir dados de serviços web (APIs). Veremos desde o básico até padrões modernos, como a criação de hooks customizados.

A Fetch API é uma interface moderna, baseada em Promises, para realizar requisições de rede (HTTP) no navegador. Ela é uma alternativa mais poderosa e flexível ao `XMLHttpRequest`.

---

### 1. Requisição GET Simples com `useEffect` e `useState`

A forma mais comum de buscar dados é quando um componente é montado. Para isso, combinamos os hooks `useState` (para armazenar os dados) e `useEffect` (para executar a requisição).

**Cenário:** Buscar uma lista de posts de uma API pública e exibi-los.

```jsx
import React, { useState, useEffect } from 'react';

function PostsList() {
    // Estado para armazenar os posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // A função fetch retorna uma Promise
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then((response) => {
                // Verificamos se a requisição foi bem-sucedida
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                // Convertemos a resposta para JSON
                return response.json();
            })
            .then((data) => {
                // Atualizamos o estado com os dados recebidos
                setPosts(data);
            })
            .catch((error) => {
                // Tratamos qualquer erro que ocorra na requisição
                console.error('Erro ao buscar os posts:', error);
            });
    }, []); // O array de dependências vazio [] garante que o efeito rode apenas uma vez

    return (
        <div>
            <h1>Lista de Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsList;
```

---

### 2. Gerenciando Estados de Carregamento (Loading) e Erro

Uma boa experiência de usuário exige que informemos quando os dados estão sendo carregados ou se algum erro ocorreu.

Vamos adicionar estados para `loading` e `error`.

```jsx
import React, { useState, useEffect } from 'react';

function PostsListWithStatus() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Inicia como true
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Falha ao carregar os dados da API.');
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setPosts([]); // Limpa os posts em caso de erro
            })
            .finally(() => {
                setLoading(false); // Finaliza o loading em qualquer cenário (sucesso ou erro)
            });
    }, []);

    // Renderização condicional baseada nos estados
    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <div>
            <h1>Lista de Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsListWithStatus;
```

---

### 3. Padrão Moderno: `async/await`

A sintaxe `async/await` torna o código assíncrono mais legível, parecendo síncrono. É a abordagem preferida atualmente.

> **Nota:** Como a função passada para `useEffect` não deve ser `async` diretamente, criamos uma função `async` dentro dela e a chamamos.

```jsx
import React, { useState, useEffect } from 'react';

function PostsListAsync() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Definimos uma função async dentro do useEffect
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
                if (!response.ok) {
                    throw new Error('A resposta da rede não foi ok');
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData(); // Chamamos a função
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div>
            <h1>Lista de Posts (Async/Await)</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostsListAsync;
```

---

### 4. Requisição POST: Enviando Dados

Para enviar dados (ex: criar um novo recurso), usamos o método `POST` e configuramos o `body` e os `headers` da requisição.

**Cenário:** Adicionar um novo post através de um formulário.

```jsx
import React, { useState } from 'react';

function AddPostForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                // O corpo da requisição deve ser uma string JSON
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 1, // Geralmente o ID do usuário logado
                }),
                // Headers informam o tipo de conteúdo que estamos enviando
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (!response.ok) {
                throw new Error('Falha ao criar o post.');
            }

            const newPost = await response.json();
            console.log('Post criado:', newPost);
            setStatus('success');
            setTitle('');
            setBody('');
        } catch (error) {
            console.error('Erro:', error);
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adicionar Novo Post</h2>
            <div>
                <label>Título:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Conteúdo:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Adicionar Post'}
            </button>

            {status === 'success' && <p>Post criado com sucesso!</p>}
            {status === 'error' && <p>Ocorreu um erro.</p>}
        </form>
    );
}

export default AddPostForm;
```

---

### 5. Padrão Avançado: Hook Customizado `useFetch`

Para evitar repetir a lógica de `fetch`, `loading` e `error` em todos os componentes, podemos abstraí-la em um **hook customizado**. Esta é uma prática altamente recomendada em projetos React.

**Criando o hook `useFetch.js`:**

```jsx
// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('A resposta da rede não foi ok');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]); // O efeito será re-executado se a URL mudar

    return { data, loading, error };
}
```

**Usando o hook no componente:**

O componente fica muito mais limpo e focado na renderização.

```jsx
import React from 'react';
import { useFetch } from './hooks/useFetch'; // Importe o hook

function UserList() {
    const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) return <p>Carregando usuários...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
```

---

### Exercício Prático

**Objetivo:** Criar uma pequena aplicação que busca e exibe uma lista de álbuns de uma API.

**API Endpoint:** `https://jsonplaceholder.typicode.com/albums`

**Requisitos:**

1.  Crie um componente chamado `AlbumList`.
2.  Use `useState` e `useEffect` com `async/await` para buscar os dados do endpoint acima quando o componente for montado.
3.  Armazene os álbuns em um estado.
4.  Exiba uma mensagem "Carregando álbuns..." enquanto a requisição estiver em andamento.
5.  Se ocorrer um erro, exiba uma mensagem como "Falha ao buscar os álbuns.".
6.  Se a requisição for bem-sucedida, renderize uma lista (`<ul>`) onde cada item (`<li>`) exibe o título do álbum.

**Desafio (Opcional):**

*   Converta sua lógica de busca de dados em um hook customizado `useFetch` e utilize-o no seu componente `AlbumList`.