function Saudacao(nome) {
    return `bom dia, ${nome}`;
    
}

Saudacao('João');
Saudacao('maria');
Saudacao('Felipe');

const variavel = Saudacao('luíz');
console.log

function Soma(x,y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(1,2));

const resultado = soma(5,8);
console.log(resultado);

//funções anonimas
const raíz = function(n){
    return n ** 0.5;
};
 console.log(raiz(9));

//arrow function
const subtracao = (x,y) => x - y;

console.log(subtracao(4,2));