const botoes = document.querySelrctor ("button");

botoes.forEach (function (botao)) {
    let curtiu = false;
    botao.addEventListener ("click", botaoClicado);
    function botaoClicado(){
        console.log ("me achou!");
        let texto = botao.querySelrctor ("span");
        if (curtiu === false){
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu=false;
        }
    }
}