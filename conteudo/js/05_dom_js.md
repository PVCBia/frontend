# O DOM - Document Object Model

## O que é o DOM?

O **DOM (Document Object Model)** é uma interface de programação para documentos HTML e XML. Ele representa a estrutura de um documento como uma árvore de objetos, onde cada nó da árvore corresponde a uma parte do documento (como um elemento, um atributo ou um texto).

Pense no seu arquivo HTML. O navegador lê esse arquivo e cria uma representação em memória, em formato de árvore. Essa representação é o DOM. O JavaScript pode então interagir com essa árvore para alterar a estrutura, o estilo e o conteúdo da página web dinamicamente.



### Por que é importante para um dev React?

Embora frameworks como o React abstraiam a manipulação direta do DOM através de um conceito chamado **Virtual DOM**, entender o DOM real é fundamental.

1.  **Base de Tudo:** O Virtual DOM do React é, em essência, uma cópia do DOM real em JavaScript. React compara essa cópia com o estado anterior e calcula a maneira mais eficiente de atualizar o DOM real. Saber como o DOM real funciona ajuda a entender *o que* o React está otimizando.
2.  **Debugging:** Muitas vezes, você precisará usar as ferramentas de desenvolvedor do navegador para inspecionar elementos, o que é uma visualização direta do DOM.
3.  **Acesso Direto:** Em certas situações (integração com bibliotecas de terceiros, animações específicas, etc.), você pode precisar acessar diretamente um nó do DOM usando `Refs` no React.

---

## Funções Essenciais para Manipulação do DOM

Vamos ver as funções mais comuns e úteis para interagir com o DOM.

### 1. Selecionando Elementos

Para manipular um elemento, primeiro você precisa selecioná-lo.

-   `document.getElementById('id-do-elemento')`
    -   Seleciona um único elemento pelo seu atributo `id`. É o método mais rápido.
    -   **Exemplo:** `const titulo = document.getElementById('titulo-principal');`

-   `document.querySelector('seletor-css')`
    -   Seleciona o **primeiro** elemento que corresponde a um seletor CSS. Extremamente versátil.
    -   **Exemplo:** `const primeiroItem = document.querySelector('.lista-item');`
    -   **Exemplo:** `const link = document.querySelector('nav ul li a');`

-   `document.querySelectorAll('seletor-css')`
    -   Seleciona **todos** os elementos que correspondem a um seletor CSS e retorna uma `NodeList` (similar a um array).
    -   **Exemplo:** `const todosOsItens = document.querySelectorAll('.lista-item');`

### 2. Manipulando Conteúdo e Atributos

Uma vez selecionado, você pode alterar o elemento.

-   `elemento.textContent`
    -   Define ou obtém o conteúdo de texto de um nó. É seguro e performático.
    -   **Exemplo:** `titulo.textContent = 'Novo Título da Página';`

-   `elemento.innerHTML`
    -   Define ou obtém o conteúdo HTML de um nó. Use com cuidado, pois pode abrir brechas de segurança (XSS) se o conteúdo vier de um usuário.
    -   **Exemplo:** `div.innerHTML = '<strong>Texto em negrito</strong>';`

-   `elemento.setAttribute('atributo', 'valor')` e `elemento.getAttribute('atributo')`
    -   Define ou obtém o valor de um atributo.
    -   **Exemplo:** `const imagem = document.querySelector('img'); imagem.setAttribute('src', 'nova-imagem.jpg');`

### 3. Manipulando Estilos e Classes

A melhor forma de alterar a aparência de um elemento é manipulando suas classes CSS.

-   `elemento.style.propriedadeCss = 'valor'`
    -   Altera um estilo CSS diretamente (inline). Não é a prática mais recomendada para grandes alterações.
    -   **Exemplo:** `titulo.style.color = 'blue';`

-   `elemento.classList`
    -   Fornece métodos para manipular a lista de classes.
    -   `elemento.classList.add('nova-classe')`: Adiciona uma classe.
    -   `elemento.classList.remove('classe-existente')`: Remove uma classe.
    -   `elemento.classList.toggle('classe-alternavel')`: Adiciona se não existir, remove se existir.
    -   **Exemplo:** `const box = document.querySelector('.box'); box.classList.add('active');`

### 4. Lidando com Eventos

O JavaScript pode "ouvir" por ações do usuário, como cliques, digitação, etc.

-   `elemento.addEventListener('evento', funcaoCallback)`
    -   Anexa uma função para ser executada quando um evento específico ocorre no elemento.
    -   **Exemplo:**
        ```javascript
        const botao = document.querySelector('#meu-botao');
        botao.addEventListener('click', () => {
          alert('Botão clicado!');
        });
        ```

### 5. Criando e Adicionando Elementos

Você também pode criar elementos do zero e inseri-los na página.

-   `document.createElement('tag')`: Cria um novo elemento.
-   `elementoPai.appendChild(elementoFilho)`: Adiciona o `elementoFilho` como o último filho do `elementoPai`.
-   `elemento.remove()`: Remove o elemento do DOM.

**Exemplo prático:**

```javascript
// 1. Seleciona a lista existente
const lista = document.querySelector('#minha-lista');

// 2. Cria um novo elemento <li>
const novoItem = document.createElement('li');

// 3. Define o conteúdo do novo item
novoItem.textContent = 'Item 4';

// 4. Adiciona uma classe ao novo item
novoItem.classList.add('item-lista');

// 5. Adiciona o novo item ao final da lista
lista.appendChild(novoItem);
```

---

## Exercícios Práticos

Crie um arquivo `index.html` e um `script.js` para resolver os exercícios.

**HTML Base para os exercícios:**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exercícios DOM</title>
    <style>
        .destaque {
            background-color: yellow;
            font-weight: bold;
        }
        .escondido {
            display: none;
        }
    </style>
</head>
<body>
    <h1 id="titulo">Título Original</h1>
    <p class="paragrafo">Este é o primeiro parágrafo.</p>
    <p class="paragrafo">Este é o segundo parágrafo.</p>

    <div id="container">
        <p>Um parágrafo dentro da div.</p>
    </div>

    <button id="acaoBtn">Clique em Mim</button>
    <button id="toggleBtn">Mostrar/Esconder</button>

    <ul id="lista-tarefas">
        <li>Tarefa 1</li>
        <li>Tarefa 2</li>
        <li>Tarefa 3</li>
    </ul>

    <input type="text" id="novaTarefaInput" placeholder="Digite uma nova tarefa">
    <button id="addTarefaBtn">Adicionar Tarefa</button>

    <script src="script.js"></script>
</body>
</html>
```

### Exercício 1: Seleção e Alteração de Conteúdo

**Objetivo:** Altere o texto do título principal.

1.  Selecione o elemento `h1` com o `id="titulo"`.
2.  Altere seu `textContent` para "Página de Exercícios DOM".

### Exercício 2: Manipulação de Classes

**Objetivo:** Adicionar uma classe a todos os parágrafos.

1.  Selecione todos os elementos com a `class="paragrafo"`.
2.  Use um laço (como `forEach`) para iterar sobre os elementos selecionados.
3.  Para cada parágrafo, adicione a classe CSS `destaque`.

### Exercício 3: Manipulação de Eventos

**Objetivo:** Fazer o botão "Clique em Mim" alterar o texto do primeiro parágrafo.

1.  Selecione o botão com `id="acaoBtn"` e o primeiro parágrafo.
2.  Adicione um `addEventListener` para o evento de `click` no botão.
3.  Dentro da função do evento, altere o `textContent` do primeiro parágrafo para "O botão foi clicado!".

### Exercício 4: Criação e Adição de Elementos

**Objetivo:** Adicionar um novo item à lista de tarefas quando o botão "Adicionar Tarefa" for clicado.

1.  Selecione o `input` (`#novaTarefaInput`), o botão (`#addTarefaBtn`) e a lista (`#lista-tarefas`).
2.  Adicione um `addEventListener` de `click` ao botão.
3.  Na função do evento:
    a.  Pegue o valor do `input` (`input.value`).
    b.  Se o valor não estiver vazio, crie um novo elemento `<li>`.
    c.  Defina o `textContent` do novo `<li>` com o valor do input.
    d.  Adicione o novo `<li>` à lista de tarefas usando `appendChild`.
    e.  (Bônus) Limpe o campo do `input` após adicionar a tarefa.

### Exercício 5: Combinando Conceitos

**Objetivo:** Fazer o botão "Mostrar/Esconder" alternar a visibilidade do `div` com `id="container"`. Além disso, cada item da lista de tarefas, ao ser clicado, deve ser removido.

**Parte A - Toggle de Visibilidade:**
1.  Selecione o botão `#toggleBtn` e o `#container`.
2.  Adicione um `addEventListener` de `click` ao botão.
3.  Na função do evento, use `classList.toggle('escondido')` no `container` para alternar sua visibilidade.

**Parte B - Remover Itens da Lista:**
1.  Este é mais complexo. Como os itens da lista podem ser adicionados dinamicamente, a melhor abordagem é usar a **delegação de eventos**.
2.  Adicione um `addEventListener` de `click` na `ul` (`#lista-tarefas`) em vez de em cada `li`.
3.  Dentro da função do evento, verifique se o elemento clicado (`event.target`) é um `li`.
4.  Se for, remova esse elemento (`event.target.remove()`).

---
*As soluções para os exercícios podem ser encontradas em um arquivo separado ou comentadas no final do seu `script.js` para consulta.*