function nome(nome){
    console.log(nome);
}

nome("Sanderson")
nome("Melanie")
console.log("=".repeat(50));

function tabuada(num){
    for (let i = 1; i <= 10; i++) {
        let resultado = i * num
        console.log(resultado);
        
    }
}

tabuada(6)

console.log("=".repeat(50));

const nome1 = nome => console.log(nome);

nome1("Sanderson")

console.log("=".repeat(50));

let tabuada1 = num => {
    for (let i=1; i <= 10; i++)
    console.log(i * num);
}


tabuada1(6)




