/**
 * dados primitivos( string, number, boolean, undefined, null, valor (big int, symbol)) são imutáveis
 * dados passados por referência(array, object, function) são mutáveis
 */

let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a, b);

 a.push(4);
 console.log(a, b);

 b.pop();
 console.log(a, b)

 a.push('luiz');
 console.log(c);
