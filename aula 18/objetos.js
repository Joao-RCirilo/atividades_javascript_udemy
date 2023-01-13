//objeto literal
const pessoa1 =  {
    nome: 'joao',
    sobrenome: 'ricardo',
    idade: 25
};

const pessoa2 =  {
    nome: 'joao',
    sobrenome: 'ricardo',
    idade: 25
};

console.log(pessoal.nome);

function criaPessoa(nome, sobrenome, idade) {
    return{
       
       //quando voce tem valores iguais, não precisa repetir
       //return{ nome, sobrenome, idade}
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa3 = criaPessoa('joao', 'Ricardo', 25);
const pessoa4 = criaPessoa('maria', 'Ricardo', 25);
const pessoa5 = criaPessoa('geovanna', 'Ricardo', 25);
const pessoa6 = criaPessoa('suzana', 'Ricardo', 25);

const pessoa7 =  {
    nome: 'joao',
    sobrenome: 'ricardo',
    idade: 25,

    //quando a função está dentro do objeto, ela é chamada de metodo
    fala() {
        console.log(`${this.nome} ${this.sobrenome} ${this.idade} está falando oi`);
    },
    
    incremento() {
        this.idade++;
    },
};


pessoa7.fala();
pessoa7.incremento();
pessoa7.fala();