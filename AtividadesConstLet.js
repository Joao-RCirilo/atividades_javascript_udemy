/* 
João Ricardo tem 24 anos, pesa 68 kg tem 1,72 metros de altura e seu imc é de: 
João Ricardo nasceu em 1998
*/

const nome = 'João Ricardo';
const segundonome = 'Ricardo';
const idade = 24;
const peso = 68;
const altura = 1.72;
let imc; peso/(altura * altura)
let anoNascimento;


imc = peso/(altura*altura);
anoNascimento = 2022 - idade;

console.log(nome, segundonome, ' tem ,', idade, 'pesa ', peso, ' tem ', altura, ' e seu imc é de ', imc, nome, segundonome, ' em ', anoNascimento );

console.log(nome + segundonome + ' tem ,'+ idade, 'pesa ' + peso + ' tem ' + altura + ' e seu imc é de ' + imc + nome + segundonome + ' em ' + anoNascimento );

console.log(`${nome + segundonome}, ' tem ,'${idade}, 'pesa ', ${peso}, ' tem ', ${altura}, ' e seu imc é de ', ${imc}, ${nome}, ${segundonome}, ' em ', ${anoNascimento}` );