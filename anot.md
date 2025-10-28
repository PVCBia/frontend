//axios e postman
//rederização por estado/ ou condicional (fetch, loading, erro, renderizado ok) - try, catch e finally

app.jsx
import './App.css';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Usuarios from './pages/Usuarios';
import Layout from './components/Layout';
import Produtos from './pages/Products';
import UsuarioDetalhe from './pages/UsuarioDetalhe';
import AlbumList from './components/AlbumList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Layout />} />
      <Route index element={<AlbumList />} />
      <Route element={<Usuarios />} />
      <Route path="/usuario/:id" element={<UsuarioDetalhe />} />

      {/* <Route path="*" element={<NotFound />} /> */}

      <Route element={<PrivateRoute />}>
        <Route path="/produtos" element={<Produtos />} />

      </Route>


      <Route path="/" element={<AlbumList />} />




    </>
  )
);

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
------------------
src/components/AlbumList

import React, { useState, useEffect } from 'react';

function AlbumList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Definimos uma função async dentro do useEffect
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');
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

    if (loading) return <p>Carregando álbuns...</p>;
    if (error) return <p>Falha ao buscar os álbuns.</p>;

    return (
        <div>
            <h1>Lista de Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );

// Desafio (Opcional):
//Converta sua lógica de busca de dados em um hook customizado useFetch e utilize-o no seu componente AlbumList.
    // function useFetch(postID){
    //     const 
    // }
}

export default AlbumList;
--------------------------
src/comp/PrivateRoute
import {Navigate, Outlet} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

//simulando autorização
// const useAuth = () => {
//     const userIsloggesdIn = true;
//     return userIsloggesdIn;
// }

function PrivateRoute(){

    const { user } = useAuth();
    //se logado, rederiza rota filha - outlet
    //se não vai para login
    return user ? <Outlet /> : <Navigate to= "/login"/>
}

export default PrivateRoute;
--------------------------------
