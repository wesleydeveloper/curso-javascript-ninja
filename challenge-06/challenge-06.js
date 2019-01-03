/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Campeonato Brasileiro";

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ["Flamengo", "Corinthians", "Vasco", "Palmeiras", "Atlético Mineiro"];
console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(n){
    var time = teams[n - 1];
    console.log(teams.indexOf(time));
    if(teams.indexOf(time) < 5 && teams.indexOf(time) !== -1){
        return "O time que está em "+ n +"º lugar é o "+ time +".";
    }
    return "Não temos a informação do time que está nessa posição.";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1);
showTeamPosition(2);
showTeamPosition(3);
showTeamPosition(6);

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var count = 20;
while(count <= 30){
    console.log(count);
    count++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(s){
    var cor = ["Red", "Blue", "Green", "Yellow", "Purple"];
    var hexa = ["#FF0000", "#0000FF", "#00FF00", "#FFFF00", "#FF00FF"];
    switch(s){
        case(cor[0]):
            return "O hexadecimal para a cor "+cor[0]+" é "+hexa[0]+".";
        case(cor[1]):
            return "O hexadecimal para a cor "+cor[1]+" é "+hexa[1]+".";
        case(cor[2]):
            return "O hexadecimal para a cor "+cor[2]+" é "+hexa[2]+".";
        case(cor[3]):
            return "O hexadecimal para a cor "+cor[3]+" é "+hexa[3]+".";
        case(cor[4]):
            return "O hexadecimal para a cor "+cor[4]+" é "+hexa[4]+".";
        default:
         return "Não temos o equivalente hexadecimal para "+ s +".";
    }
}
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex("Red");
convertToHex("Purple");
convertToHex("Blue");
convertToHex("Yellow");
convertToHex("Green");
convertToHex("Cian");
convertToHex("Violet");
convertToHex("Black");
