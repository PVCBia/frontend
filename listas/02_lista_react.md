# Lista de Exercícios: React com `useState` e `useEffect`

Esta lista de exercícios foi projetada para praticar os conceitos fundamentais do React, focando nos hooks `useState` e `useEffect`. A complexidade dos exercícios é progressiva.

---

### 1. Contador Simples
**Objetivo:** Criar um componente que exibe um número e um botão. Cada vez que o botão é clicado, o número deve ser incrementado em 1.
- **Hook a ser usado:** `useState`
- **Desafio:** Crie também um botão para decrementar o valor.

---

### 2. Exibir/Esconder Texto
**Objetivo:** Crie um componente com um botão e um parágrafo de texto. Ao clicar no botão, o texto deve alternar entre visível e invisível.
- **Hook a ser usado:** `useState` (com um valor booleano).
- **Dica:** Você pode usar renderização condicional para mostrar ou esconder o elemento.

---

### 3. Input Controlado
**Objetivo:** Crie um campo de input de texto. Abaixo dele, exiba em tempo real o que o usuário está digitando.
- **Hook a ser usado:** `useState`
- **Desafio:** Adicione um botão "Limpar" que apaga o texto do input e da exibição.

---

### 4. Mudança de Cor de Fundo
**Objetivo:** Crie um componente com um botão. A cada clique, a cor de fundo de uma `div` deve mudar. Use uma lista pré-definida de cores (ex: `['red', 'blue', 'green', 'yellow']`) e alterne entre elas sequencialmente.
- **Hook a ser usado:** `useState`
- **Dica:** Mantenha o índice da cor atual no estado.

---

### 5. Lista de Tarefas Simples (Adicionar)
**Objetivo:** Crie uma aplicação de "To-Do". Deve haver um campo de input para digitar uma nova tarefa e um botão "Adicionar". Ao clicar no botão, a nova tarefa deve ser adicionada a uma lista exibida na tela.
- **Hook a ser usado:** `useState` (para o input e para a lista de tarefas, que será um array).
- **Dica:** Lembre-se que para atualizar um estado que é um array, você precisa criar um novo array.

---

### 6. Lista de Tarefas (Remover)
**Objetivo:** Baseado no exercício anterior, adicione um botão "Remover" ao lado de cada item da lista de tarefas. Ao clicar nesse botão, a tarefa correspondente deve ser removida da lista.
- **Hook a ser usado:** `useState`
- **Dica:** Use o método `filter` para criar um novo array sem o item que você deseja remover.

---

### 7. Monitor de Largura da Janela
**Objetivo:** Crie um componente que exibe a largura atual da janela do navegador. O valor deve ser atualizado dinamicamente sempre que a janela for redimensionada.
- **Hooks a serem usados:** `useState`, `useEffect`
- **Dica:** Use `window.addEventListener('resize', ...)` dentro do `useEffect`. Não se esqueça de retornar uma função de limpeza para remover o listener (`window.removeEventListener`).

---

### 8. Busca de Dados de API
**Objetivo:** Crie um componente que, ao ser montado, busca dados de uma API pública e exibe uma informação na tela.
- **API Sugerida:** `https://jsonplaceholder.typicode.com/todos/1`
- **Hooks a serem usados:** `useState` (para armazenar os dados), `useEffect` (para fazer a requisição `fetch`).
- **Desafio:** Adicione um estado de "loading" para exibir uma mensagem enquanto os dados não chegam.

---

### 9. Relógio Digital
**Objetivo:** Crie um componente que exibe a hora atual no formato `HH:MM:SS`. O relógio deve atualizar a cada segundo.
- **Hooks a serem usados:** `useState`, `useEffect`
- **Dica:** Use `setInterval` dentro do `useEffect` para atualizar o estado a cada 1000ms. Lembre-se de limpar o intervalo (`clearInterval`) na função de limpeza do `useEffect`.

---

### 10. Filtro de Lista em Tempo Real
**Objetivo:** Crie um componente que tenha uma lista pré-definida de itens (ex: `['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga']`) e um campo de input para busca. Conforme o usuário digita no campo, a lista exibida deve ser filtrada para mostrar apenas os itens que contêm o texto digitado.
- **Hooks a serem usados:** `useState` (para o termo de busca e para a lista filtrada), `useEffect`
- **Lógica:** O `useEffect` deve ser executado sempre que o termo de busca mudar. Dentro dele, você irá filtrar a lista original e atualizar o estado da lista filtrada.