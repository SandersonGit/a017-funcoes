function numeros(num1, num2){
    let resultado = num1 + num2
    return resultado
}
console.log("=".repeat(50));
console.log(numeros(6,3));

console.log("=".repeat(50));

function numerosBoll(num1, num2){
    if (num1 >= num2) {
        console.log("True");
    }else{
        console.log("False");
    }
}
numerosBoll(2,5)

function pariedade(num){
    if (num%2===0) {
        console.log(`O número ${num}, é um número par`);
    }else{
        console.log(`O número ${num}, é um número ímpar`);
    }
}
pariedade(15)


console.log("=".repeat(50));

function palavra(string){
    for(let i = 0; i < string.length; i++){
        console.log(+[i]+1, string[i]);
    }

}
palavra(`Sanderson`.toLocaleUpperCase())