"use strict";
let anyestadevolta;
anyestadevolta = 4;
anyestadevolta = 'teste';
anyestadevolta = 3;
let stringTeste = 'verificar';
stringTeste = anyestadevolta;
let unknownValor;
unknownValor = 1;
unknownValor = 'est';
unknownValor = true;
let stringTeste2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
