//              0       1          2
const alunos = ['Joao', 'Maria', 'Luiz'];
console.log(alunos);
console.log(alunos[0]);

alunos[0] = 'Eduardo'; //altera
alunos[3] = 'Luíza'; //adiciona

alunos[alunos.length] = luíza;
alunos[alunos.lenght] = fábio;

alunos.push('luíza');//adiciona
alunos.push('fábio');//adiciona

alunos.unshift('luíza')//adiciona no começo

//alunos.pop(); //remove o ultimo elemento

//const removido = alunos.pop();
//console.log(removido);
//console.log(alunos);

alunos.shift(); //remove o primeiro elemento

const removidos = alunos.shift();
console.log(removido);
console.log(alunos);

console.log(alunos instanceof Array);

