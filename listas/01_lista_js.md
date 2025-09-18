# Lista de Exercícios - JavaScript Fundamentals para React

Esta lista contém 10 exercícios com dificuldade progressiva, focados em conceitos de JavaScript essenciais para o desenvolvimento com React.

---

### Questão 1: Verificação Simples (if/else)

Crie uma função que recebe um número como argumento. A função deve imprimir no console "Positivo" se o número for maior que zero, "Negativo" se for menor que zero, e "Zero" se for igual a zero.

```javascript
function verificarNumero(numero) {
    // Seu código aqui
}

verificarNumero(10);  // Deve imprimir "Positivo"
verificarNumero(-5);  // Deve imprimir "Negativo"
verificarNumero(0);   // Deve imprimir "Zero"
```

---

### Questão 2: Contagem com Loop (for)

Escreva um código que use um loop `for` para imprimir os números de 1 a 10 no console.

---

### Questão 3: Filtrando com Loop e Condicional (for, if)

Dado um array de números, use um loop `for` e uma condição `if` para criar um novo array contendo apenas os números pares.

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = [];

// Seu código aqui

console.log(numerosPares); // Resultado esperado: [2, 4, 6, 8, 10]
```

---

### Questão 4: Iterando com `forEach`

Dado um array de nomes, use o método `forEach` para imprimir cada nome no console, precedido pela saudação "Olá, ".

```javascript
const nomes = ["Ana", "Bruno", "Carlos"];

// Seu código aqui
// Resultado esperado no console:
// Olá, Ana
// Olá, Bruno
// Olá, Carlos
```

---

### Questão 5: Filtrando um Array (`filter`)

Use o método `filter` para criar um novo array que contenha apenas os produtos com preço acima de R$ 500.

```javascript
const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 950 },
    { nome: "Cadeira", preco: 600 }
];

const produtosCaros = // Seu código aqui

console.log(produtosCaros);
/* Resultado esperado:
[
    { nome: 'Notebook', preco: 2500 },
    { nome: 'Monitor', preco: 950 },
    { nome: 'Cadeira', preco: 600 }
]
*/
```

---

### Questão 6: Transformando um Array (`map`)

Use o método `map` para criar um novo array que contenha apenas os nomes dos produtos do array da questão anterior.

```javascript
const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 950 },
    { nome: "Cadeira", preco: 600 }
];

const nomesDosProdutos = // Seu código aqui

console.log(nomesDosProdutos); // Resultado esperado: ["Notebook", "Mouse", "Teclado", "Monitor", "Cadeira"]
```

---

### Questão 7: Processando JSON com `filter`

Você recebeu uma string JSON com uma lista de usuários. Primeiro, converta a string JSON em um objeto JavaScript. Depois, use `filter` para criar um novo array contendo apenas os usuários ativos (`isActive: true`).

```javascript
const usuariosJson = `[
    {"id": 1, "nome": "Alice", "isActive": true},
    {"id": 2, "nome": "Bob", "isActive": false},
    {"id": 3, "nome": "Charlie", "isActive": true}
]`;

// Seu código aqui

// console.log(usuariosAtivos);
/* Resultado esperado:
[
    { id: 1, nome: 'Alice', isActive: true },
    { id: 3, nome: 'Charlie', isActive: true }
]
*/
```

---

### Questão 8: Processando JSON com `map`

Usando a mesma string JSON da questão anterior, crie um novo array que contenha strings no formato "ID: [id], Nome: [nome]" para cada usuário.

```javascript
const usuariosJson = `[
    {"id": 1, "nome": "Alice", "isActive": true},
    {"id": 2, "nome": "Bob", "isActive": false},
    {"id": 3, "nome": "Charlie", "isActive": true}
]`;

// Seu código aqui

// console.log(infoUsuarios);
/* Resultado esperado:
[
    'ID: 1, Nome: Alice',
    'ID: 2, Nome: Bob',
    'ID: 3, Nome: Charlie'
]
*/
```

---

### Questão 9: Agregando Valores com `reduce`

Dado um array de números, use o método `reduce` para calcular a soma total de todos os números.

```javascript
const valores = [10, 20, 30, 40, 50];

const somaTotal = // Seu código aqui

console.log(somaTotal); // Resultado esperado: 150
```

---

### Questão 10: Combinação de Métodos (`filter`, `map`, `reduce`)

Você tem um JSON de carrinho de compras. Sua tarefa é calcular o valor total dos itens da categoria "Eletrônicos". Para isso, você precisará:
1.  Converter a string JSON para um objeto.
2.  Filtrar (`filter`) os itens que são da categoria "Eletrônicos".
3.  Mapear (`map`) o array filtrado para obter um array apenas com os preços.
4.  Reduzir (`reduce`) o array de preços para obter a soma total.

```javascript
const carrinhoJson = `[
    {"nome": "Smartphone", "categoria": "Eletrônicos", "preco": 1500},
    {"nome": "Tênis", "categoria": "Vestuário", "preco": 350},
    {"nome": "Fone de Ouvido", "categoria": "Eletrônicos", "preco": 250},
    {"nome": "Camiseta", "categoria": "Vestuário", "preco": 80},
    {"nome": "Smartwatch", "categoria": "Eletrônicos", "preco": 800}
]`;

// Seu código aqui

// console.log(totalEletronicos); // Resultado esperado: 2550
```