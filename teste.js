const calc = require("./calc.js"); 

console.log("soma(2, 3) = " + calc.soma(2, 3)); 
console.log("subtracao(2, 3) = " + calc.subtracao(2, 3));  
console.log("multiplicacao(2, 3) = " + calc.multiplicacao(2, 3));  
console.log("divisao(2, 3) = " + calc.divisao(2, 3));  
console.log("executa(divisao 2, 3) = " + calc.executa(calc.divisao, 3, 2));
console.log("executa(soma 2, 3) = " + calc.executa(calc.soma, 3, 2)); 


