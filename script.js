function formatar(v){
    return v.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
}

/* ESCONDE RESULTADOS AO CARREGAR */
function esconderResultados(){
    document.getElementById("tituloAportes").style.display = "none"
    document.getElementById("linhaAportes").style.display = "none"
    document.getElementById("tituloFinal").style.display = "none"
    document.getElementById("linhaFinal").style.display = "none"
}

document.addEventListener("DOMContentLoaded", () => {
    esconderResultados()
})

function calcular(){
    let valorInicial = parseFloat(document.getElementById('valorInicial').value) || 0
    let aporte = parseFloat(document.getElementById('aporte').value) || 0
    let taxa = (parseFloat(document.getElementById('taxa').value) || 0) / 100
    let periodo = parseInt(document.getElementById('periodo').value) || 0

    let total = valorInicial
    let totalAportes = 0

    for(let i = 0; i < periodo; i++){
        let juros = total * taxa
        total += juros
        total += aporte
        totalAportes += aporte
    }

    let totalInvestido = valorInicial + totalAportes
    let totalJuros = total - totalInvestido

    /* =========================
       RESULTADOS NA ORDEM CERTA
       ========================= */

    /* CAPITAL INICIAL */
    document.getElementById('valorInicialRes').innerText = formatar(valorInicial)

    /* MOSTRA APORTES */
    document.getElementById("tituloAportes").style.display = "flex"
    document.getElementById("linhaAportes").style.display = "flex"
    document.getElementById('totalAportes').innerText = formatar(totalAportes)

    /* TOTAL INVESTIDO (INICIAL + APORTES) */
    document.getElementById('totalInvestido').innerText = formatar(totalInvestido)

    /* JUROS */
    document.getElementById('totalJuros').innerText = formatar(totalJuros)

    /* FINAL */
    document.getElementById("tituloFinal").style.display = "flex"
    document.getElementById("linhaFinal").style.display = "flex"
    document.getElementById('valorFinal').innerText = formatar(total)
}

/* INPUTS */
function stepUp(id){
    document.getElementById(id).stepUp()
}

function stepDown(id){
    document.getElementById(id).stepDown()
}

/* TEMA */
const botaoTema = document.getElementById("toggleTema")
const botaoTemaMobile = document.getElementById("toggleTemaMobile")

function alternarTema(){
    document.body.classList.toggle("dark")

    const escuro = document.body.classList.contains("dark")

    if(botaoTema){
        botaoTema.innerHTML = escuro ? "☀️" : "🌙"
    }

    if(botaoTemaMobile){
        botaoTemaMobile.innerHTML = escuro
            ? "☀️ Alternar tema"
            : "🌙 Alternar tema"
    }
}

if(botaoTema){
    botaoTema.addEventListener("click", alternarTema)
}

if(botaoTemaMobile){
    botaoTemaMobile.addEventListener("click", alternarTema)
}

/* MENU */
const menuNav = document.getElementById("menuNav")
const overlay = document.getElementById("overlay")
const menuToggle = document.getElementById("menuToggle")
const closeMenu = document.getElementById("closeMenu")

function abrirMenu(){
    if(menuNav) menuNav.classList.add("ativo")
    if(overlay) overlay.classList.add("ativo")
}

function fecharMenu(){
    if(menuNav) menuNav.classList.remove("ativo")
    if(overlay) overlay.classList.remove("ativo")
}

if(menuToggle){
    menuToggle.addEventListener("click", abrirMenu)
}

if(closeMenu){
    closeMenu.addEventListener("click", fecharMenu)
}

if(overlay){
    overlay.addEventListener("click", fecharMenu)
}
const menu = document.querySelector(".menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        menu.classList.add("scroll");
        menu.classList.remove("topo");
    } else {
        menu.classList.add("topo");
        menu.classList.remove("scroll");
    }
});
function abrirSugestao(){
document.getElementById("modalSugestao").style.display="flex"
}

function fecharSugestao(){
document.getElementById("modalSugestao").style.display="none"
}

function enviarSugestao(){

let titulo =
document.getElementById("sugestaoTitulo").value

let texto =
document.getElementById("sugestaoTexto").value

let assunto =
encodeURIComponent("Sugestão: "+titulo)

let corpo =
encodeURIComponent(texto)

window.location.href =
"mailto:leotr2016.jb@gmail.com?subject="+assunto+"&body="+corpo

}
function abrirSugestao(){
document.getElementById("modalSugestao").style.display="flex"
}

function fecharSugestao(){
document.getElementById("modalSugestao").style.display="none"
}
function enviarSugestao(){

const form = document.getElementById("formSugestao")

fetch("https://formsubmit.co/ajax/leotr2016.jb@gmail.com",{
method:"POST",
body:new FormData(form)
})
.then(response => response.json())
.then(data => {

document.getElementById("msgSucesso").style.display = "block"

form.reset()

setTimeout(()=>{
document.getElementById("msgSucesso").style.display = "none"
fecharSugestao()
},2000)

})
.catch(error => {
alert("Erro ao enviar sugestão")
})

}