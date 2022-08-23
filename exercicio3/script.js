const somarNumeros = (n1, n2) => n1+n2
const soma = somarNumeros(+prompt("Digite um numero para somar"), +prompt("digite outro numero para somar"))
console.log(`O resultado da soma é igual a ${soma}`);

const subtrairNumeros = (n1, n2) => n1-n2
const subtracao = subtrairNumeros(+prompt("Digite um numero que deseja subtrair"), +prompt("digite outro numero para subtrair"))
console.log(`O resultado da subtração é igual a ${subtracao}`);

const multiplicarNumeros = (n1, n2) => n1*n2
const multiplicar = multiplicarNumeros(+prompt("Digite um numero que deseja multiplicar"), +prompt("digite outro numero para multiplicar"))
console.log(`O resultado da multiplicação é igual a ${multiplicar}`);

const dividirNumeros = (n1, n2) => n1/n2
const divisao = dividirNumeros(+prompt("Digite um numero que deseja dividir"), +prompt("digite outro numero para dividir"))
console.log(`O resultado da multiplicação é igual a ${divisao}`);


