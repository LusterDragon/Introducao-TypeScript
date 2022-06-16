let anyestadevolta:any;
anyestadevolta=4;
anyestadevolta='teste';
anyestadevolta=3;

let stringTeste :string = 'verificar';
stringTeste = anyestadevolta;

let unknownValor:unknown;
unknownValor = 1;
unknownValor='est';
unknownValor = true;

let stringTeste2:string = 'agora vai';

if(typeof unknownValor ==='string'){
stringTeste2 = unknownValor;
}

function jogaErro(erro:string, codigo:number):never{
    throw{error:erro,code:codigo};
}

jogaErro('deu erro',500);