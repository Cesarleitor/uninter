let botao = document.querySelector("#botao");
botao.style.background = "blue";
let estaQuebrado = false;
let contacliques = 0;


botao.addEventListener("mouseover",e => {
    if(!estaQuebrado) {
    botao.style.background = "green"
    }
});

botao.addEventListener("mouseout", e => {
    if(!estaQuebrado) {
        botao.style.background = "blue"

    }
});

botao.addEventListener("click", e => {

    contacliques++;

    if(contacliques >=10 ) {
    botao.style.background = "red";
    botao.innerHTML = `Quebrado! (${contacliques})`;
    estaQuebrado = true;
    }
});

