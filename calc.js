module.export = { 
    soma: (x, y) => x + y, 
    subtracao: function (x, y) { 
        return x - y; 
    }, 
    multiplicacap: (x, y) => {  
     return x * y;  
}, 
divisao: function (x, y) { 
    return x / y; 
}, 
executa: (operacao, x, y) => operacao(x, y),
}