let varA = a;
let varB = b;
let varC = c;

//[varA, varB, varC] = [varB, varC, varA];

let varAux = varA;
varA = varB;
varB = varC;
varC = varAux;

