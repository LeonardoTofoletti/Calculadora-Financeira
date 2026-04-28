function calcular() {

let valorInicial = parseFloat(document.getElementById("valorInicial").value) || 0;
let aporte = parseFloat(document.getElementById("aporte").value) || 0;
let taxaAnual = parseFloat(document.getElementById("taxa").value) || 0;
let periodo = parseInt(document.getElementById("periodo").value) || 0;

let valor = valorInicial;
let totalAportes = 0;

let taxaMensal = Math.pow(1 + (taxaAnual / 100), 1/12) - 1;

for (let i = 0; i < periodo; i++) {
    valor += aporte;
    totalAportes += aporte;
    valor *= (1 + taxaMensal);
}

let totalInvestido = valorInicial + totalAportes;
let totalJuros = valor - totalInvestido;

document.getElementById("valorInicialRes").innerText =
valorInicial.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

document.getElementById("totalAportes").innerText =
totalAportes.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

document.getElementById("totalInvestido").innerText =
totalInvestido.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

document.getElementById("totalJuros").innerText =
totalJuros.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

document.getElementById("valorFinal").innerText =
valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

if (totalAportes > 0) {
document.getElementById("tituloAportes").style.display = "flex";
document.getElementById("linhaAportes").style.display = "flex";
}

document.getElementById("tituloFinal").style.display = "flex";
document.getElementById("linhaFinal").style.display = "flex";
}