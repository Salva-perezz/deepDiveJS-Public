function concatenar(){
    return Object.values(arguments).join('')
};

function invocarFunciones(){    
    var res = ''
    for(let i = 0; i < arguments.length; i++){
        res += arguments[i]();
    };
    return res;
};

function creadorDeIncrementos(num) {
    return function(num2){
        return num + num2;
    };
};


function invocacionUnica(){
    
    var arg = arguments[0]()
    
    arg;

    var nuevaFunc = function(){
        for(let i = 0; i < 1; i++){
            return arg;
        };
    };
    return nuevaFunc;
};

function objetoConClousure(){
    var obj = {};

    var res = 0;

    obj.incremento = function(){
        res = res + 1
    };

    obj.incrementoPor10 = function(){
        res = res + 10
    };

    obj.pedirValor = function(){
        return res;
    };

    obj.cambiarValor = function(num){
        res = num
    };

    return obj;
};
var array = []
function ListaDeFuncionesInvitados(arr){
    let res=[];
    array = arr
        for(let i=0; i<arr.length; i++){
            res.push(function(cod){
                if(cod!==404) return  'código secreto: invalido';
                else if(cod===404) return arr[i];
            });
        };

return res;
};

function armarListaDeInvitados(arr, cod){
    return array;
}