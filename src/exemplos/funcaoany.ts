let valorany:any = 3;
valorany='Olá';
valorany=true;

let valorString:string = 'teste';
valorString = valorany;
let valorString2:string = 'textão';
valorString2= valorany;

function somarString(string1:string, string2:string){
    console.log(string1+string2);
}

somarString(valorString,valorString2)
somarString('Olá, ','como vai?')


