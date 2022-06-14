/* Solução usando fómula matemática (solução aceita pela plataforma)*/ 

const A = 2;
const B = 5;

const total = (A+B) * (B-A+1)/2

console.log(total);

/* Outras formas de resolver o problema:

Solução usando REDUCE

const A = 2;
const B = 5;
const C = []

for (var i = A; i <= B; i++) {
    C.push(i);
}

const D = C.reduce(function(soma, i) {
    return soma + i;
})

console.log(D);

Solução usando FOR

const A = 2;
const B = 5;
const C = []
let D = 0

for (var i = A; i <= B; i++) {
    C.push(i);
}

for (var i = 0; i < C.length; i++) {
    D += C[i];
}

console.log(C)
console.log(D);
*/