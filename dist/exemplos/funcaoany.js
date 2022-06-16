"use strict";
let valorany = 3;
valorany = 'Olá';
valorany = true;
let valorString = 'teste';
valorString = valorany;
let valorString2 = 'textão';
valorString2 = valorany;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('Olá, ', 'como vai?');
