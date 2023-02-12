const palavra_secreta = document.getElementById("palavra_secreta");
const resultado = document.getElementById("resultado");
const palavra = document.getElementById("palavra");
const erros = document.getElementById("erros");
const teclado = document.getElementById("teclado");

let palavra_secreta_valor = "";
let palavra_adivinhada = [];
let erros_count = 0;

palavra_secreta.addEventListener("input", function() {
palavra_secreta_valor = palavra_secreta.value.toUpperCase();
setTimeout(function() {
palavra_secreta.value = "";
}, 5000);
reiniciar();
});

function reiniciar() {
palavra_adivinhada = [];
erros_count = 0;
resultado.innerHTML = "";
erros.innerHTML = "";
teclado.innerHTML = "";

for (let i = 0; i < palavra_secreta_valor.length; i++) {
palavra_adivinhada.push("_");
}

palavra.innerHTML = palavra_adivinhada.join(" ");

const letras = "AÁÃÂBCDEÉÊFGHIÍJKLMNOÓÔÕPQRSTUÚVWXYZ".split("");
for (let i = 0; i < letras.length; i++) {
const botao = document.createElement("button");
botao.innerHTML = letras[i];
botao.addEventListener("click", function() {
adivinhar(letras[i]);
});
botao.addEventListener("mouseover", function() {
const audio = new Audio("sounds/" + letras[i].toLowerCase() + ".mp3");
audio.play();
});
teclado.appendChild(botao);
}
}

function adivinhar(letra) {
let acerto = false;
for (let i = 0; i < palavra_secreta_valor.length; i++) {
if (palavra_secreta_valor[i] === letra) {
palavra_adivinhada[i] = letra;
acerto = true;
}
}

if (!acerto) {
erros_count++;
}

palavra.innerHTML = palavra_adivinhada.join(" ");
erros.innerHTML = "Erros: " + erros_count;

if (palavra_adivinhada.indexOf("_") === -1) {
resultado.innerHTML = "Você ganhou!";
} else if (erros_count === 6) {
resultado.innerHTML = "Você perdeu!";
}
}



