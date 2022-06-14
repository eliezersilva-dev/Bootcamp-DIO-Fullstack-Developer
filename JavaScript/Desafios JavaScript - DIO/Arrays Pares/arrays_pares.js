var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i]);
     }          
}

/* Outra solução possível:
var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];
var par = x => x % 2 === 0
let pares = []

for (i = 0; i < array.length; i++) {
  if (par(array[i])) {
    pares.push(array[i])
  }
}
console.log(pares)*/