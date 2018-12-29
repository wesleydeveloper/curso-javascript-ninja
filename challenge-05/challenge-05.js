/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var frutas = ['melancia', 'goiaba', 'banana', 'caju', 'manga', 'acerola'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArr(arr){
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
getArr(frutas)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getArrByIndex(arr, i){
  return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var misto = [true, "Bla", 10, {msg:"oi}, ["a", "b"]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
getArrByIndex(misto, 0);
getArrByIndex(misto, 1);
getArrByIndex(misto, 2);
getArrByIndex(misto, 3);
getArrByIndex(misto, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(b){
  var livros = {
    livro1: {
      quantidadePaginas: 10,
      autor: "autor1",
      editora: "editora1"
    },
    livro2: {
      quantidadePaginas: 20,
      autor: "autor2",
      editora: "editora2"
    },
    livro3: {
      quantidadePaginas: 30,
      autor: "autor3",
      editora: "editora3"
    }
  };
  if(b !== undefined){
    return livros[b];
  }
  return livros;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = book("livro1");
var frase = "O livro " + livro + " tem " + livro.quantidadePaginas + " páginas!";
frase;

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var livro = book("livro1");
var frase = "O autor do livro " + livro + " é " + livro.autor + ".";
frase;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var livro = book("livro1");
var frase = "O livro " + livro + " foi publicado pela editora " + livro.editora + "."
frase;
