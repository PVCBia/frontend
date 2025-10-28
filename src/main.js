import { fetchPosts } from './services/postService.js';
import { fetchUsers } from './services/userService.js';

//IIFE - Immediately Invoked Function Expression
(async () => {
    try{
        const [posts, users] =  await Promise.all([
            fetchPosts(),
            fetchUsers()
        ]);
        console.log("Total de posts:", posts.length);
        console.log("Total de users:", users.length);

        //O primeiro autor de um post
        const firstPostAuthor = 
        users.find(user => user.id === posts[0]?.userId)?.name ?? 'Autor desconhecido'
        //Nullish coalescing  ??
        console.log("Autor:", firstPostAuthor);
    } catch(error){
        console.error("Erro: ", error)
    }
})();


