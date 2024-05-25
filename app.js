// Ejercicio [1]: Escribe un bucle while que imprima los números del 1 al 5.

let i = 1; 

while (i <= 5) { 
  console.log(i); 
  i++; 
}


// Ejercicio [2]: Escribe un bucle for que imprima los elementos de un array de nombres.

let nombres = ["Angel", "Ruth", "Ale", "Kate"];

for (let i = 0; i < nombres.length; i++) { 
  console.log(nombres[i]); 
}

// Ejercicio [3]: Usa forEach para imprimir los elementos de un array de números multiplicados por 2

let numeros = [10, 20, 50, 100];

numeros.forEach(function(numero) {
  console.log(numero * 2);
});


// Ejercicio [4]: Usa map para crear un nuevo array con los cuadrados de los números de un array dado.

let num = [6, 8, 5, 10];

let cuadrados = num.map(function(numero) {
  return numero * numero;
});

console.log(cuadrados);

// Ejercicio [5]: Usa find para encontrar el primer número mayor que 10 en un array de números.

let number = [2, 6, 11, 10, 8, 21, 16];

let mayor = number.find(function(numero) {
  return numero > 10;
});

console.log(mayor);

// Ejercicio [6]: Usa some para verificar si hay algún número par en un array de números.

let n = [9, 11, 21, 6, 13];

let Par = n.some(function(numero) {
  return numero % 2 === 0;
});

console.log(Par);

// Ejercicio [7]: Usa filter para crear un nuevo array con los números impares de un array dado.

let nu = [2, 3, 4, 8, 10, 21, 23, 30, 33];

let impar = nu.filter(function(numero) {
  return numero % 2 !== 0;
});

console.log(impar);


// Ejercicio [8] (Extra) : Combina filter y map para crear un nuevo array con los cuadrados de los números impares de un array dado.


let nume = [6,8,3,5,11];

let cuadradoImpar = nume.filter(function(numero) {
  return numero % 2 !== 0; 
}).map(function(numero) {
  return numero * numero; 
});

console.log(cuadradoImpar);

