const pessoa = {
    nome: "mariana",
    idade: 28,
    profissao: 'desenvolvedora'
};

pessoa.idade = 29;

const andre = {
    nome: "André",
    idade: 22,
    profissao: 'pintor'
};

const paula = {
    nome: "Paula",
    idade: 25,
    profissao: 'Desenvolvedora'
};

enum Profissao{
Professora,
Atriz, 
Desenvolvedora,
JogadoraDeFutebol
};

interface Pessoa{
    nome:string,
    idade:number,
    profissao?:Profissao
}

interface Estudante extends Pessoa{
    materias:string[]
}
 
const vanessa:Pessoa ={
    nome:'Vanessa',
    idade:23,
    profissao:Profissao.Desenvolvedora
}

const maria:Pessoa ={
    nome:'Vanessa',
    idade:23,
    profissao:Profissao.Desenvolvedora
}

const jessica:Estudante = {
    nome:'Jessica',
    idade:28,
    profissao:Profissao.Desenvolvedora,
    materias:['Matemática','Programação']
}

const monica:Estudante = {
    nome:'Jessica',
    idade:28,
    materias:['Matemática','Programação']
}

function listar(lista:string[]){
    for(const item of lista){
        console.log('-',lista);
    }

}
listar(monica.materias)