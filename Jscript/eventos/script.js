let paragtafo = document.querySelector("#para1");

paragtafo.addEventListener("mouseover", mudaVerde);
paragtafo.addEventListener("mouseout", mudaVermelho);


function mudaVerde() {
    paragtafo.style.background = "green";
}

function mudaVermelho() {
    paragtafo.style.background = "red";
}