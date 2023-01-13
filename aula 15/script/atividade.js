const numero = Number(prompt('digite um número'));
const numeroTitulo =  document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

let raizQuadrada = numero ** 0.5;
let floorRound = Math.floor(numero);
let ceilRound = Math.ceil(numero);
let numeroInteiro = Number.isInteger(numero);
let nan = Number.isNaN(numero);
let duasCasas = numero.toFixed(2);


numeroTitulo = innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Seu número + 2 é: ${numero + 2}.</p> `;
texto.innerHTML += `<p>Seu número é inteiro: ${numeroInteiro}.</p> `;
texto.innerHTML += `<p>Arredondamento para baixo: ${floorRound}.</p> `;
texto.innerHTML += `<p>Arredondamento para cima: ${ceilRound}.</p> `;
texto.innerHTML += `<p>Com duas casas decimais: ${duasCasas}.</p> `;
texto.innerHTML += `<p>Raiz quadrada: ${raizQuadrada}.</p> `;
texto.innerHTML += `<p>Seu número é NaN: ${nan}.</p> `;