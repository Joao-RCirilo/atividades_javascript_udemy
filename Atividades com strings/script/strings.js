const nome = prompt(`digite seu nome completo:`);


document.body.innerHTML = `Seu nome é ${nome} <br>`;
document.body.innerHTML += `Seu nome tem, ${nome.length} letraas`;
document.body.innerHTML = `A segunda letra do seu nome é? <br>`;
document.body.innerHTML += `${nome[2]}`;
document.body.innerHTML = `Qual o primeiro indice da letra A no seu nome? <br>`;
document.body.innerHTML += `${nome.indexOf('a')}`;
document.body.innerHTML = `Qual o ultimo indice da letra A no seu nome? <br>`;
document.body.innerHTML += `${nome.lastIndexOf('a')}`;
document.body.innerHTML = `As três ultimas letras do seu nome é? <br>`;
document.body.innerHTML += `${nome.slice(-3 , nome.length)}`;
document.body.innerHTML = `As palaras do seu nome são? <br>`;
document.body.innerHTML += `${nome.split(' ')}`;
document.body.innerHTML = `Seu nome com letras maiúsculas <br>`;
document.body.innerHTML += `${nome.toUpperCase}`;
document.body.innerHTML = `Seu nome com letras minúsculas <br>`;
document.body.innerHTML += `${nome.toLowerCase}`;