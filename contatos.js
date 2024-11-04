function displayblock(){
    var main=document.getElementById("main")
    var central=document.getElementById("central")

    central.classList.toggle("menucentral")
    main.classList.toggle("menu")
}

var main=document.getElementById("main")
var central=document.getElementById("central")
var body=document.getElementById("body")
var nav=document.getElementById("nav")
function dark(){
main.classList.toggle("dark")
body.classList.toggle("dark")
nav.classList.toggle("dark-nav")
central.classList.toggle("darkCen")
}

const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
const sendMessageBtn = document.getElementById("sendMessage");

// Abrir o modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Fechar o modal ao clicar no "x"
span.onclick = function() {
    modal.style.display = "none";
}

// Fechar o modal e mostrar mensagem em um alerta ao clicar em "Enviar"
sendMessageBtn.onclick = function() {
    modal.style.display = "none";
    alert("Mensagem enviada com sucesso!");
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}