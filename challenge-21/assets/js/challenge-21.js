((win, doc)=>{
    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
    function wsQuery(query){
        return doc.querySelector(query);
    }
    function wsEvent(selector, event, callback){
        return selector.addEventListener(event, callback, false);
    }
    function pad(str, length) {
        const resto = length - String(str).length;
        return '0'.repeat(resto > 0 ? resto : '0') + str;
    }
    var thousands = wsQuery('[data-click="thousands"]');
    var seconds = wsQuery('[data-click="seconds"]');
    var minutes = wsQuery('[data-click="minutes"]');
    var hours = wsQuery('[data-click="hours"]');
    var btnStart = wsQuery('[data-click="start"]');
    var btnStop = wsQuery('[data-click="stop"]');
    var btnReset = wsQuery('[data-click="reset"]');
    var timer;
    function cronometro(){
        timer = setInterval(()=>{
            thousands.innerHTML++;
            if(thousands.innerHTML == 200){
                thousands.innerHTML = "0000";
                seconds.innerHTML++;
            }
            if(seconds.innerHTML == 60){
                seconds.innerHTML = "00";
                minutes.innerHTML++;
            }
            if(minutes.innerHTML == 60){
                minutes.innerHTML = "00";
                hours.innerHTML++;
            }
        }, 1);
    }
    wsEvent(btnStart, "click", (e) => {
        e.preventDefault();
        cronometro();
    });
    wsEvent(btnStop, "click", (e) => {
        e.preventDefault();
        clearInterval(timer);
    });
    wsEvent(btnReset, "click", (e) =>{
        e.preventDefault();
        clearInterval(timer);
        thousands.innerHTML = "0000";
        seconds.innerHTML = "00";
        minutes.innerHTML = "00";
        hours.innerHTML = "00";
    });


})(window, document);