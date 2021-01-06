
function crearCalculadora(){
    
    var calculadora = {}
    var res = 0
    calculadora.valor = function (){
        return res;
    };
    calculadora.sumar = function(num){
        res = res + num
    };
    calculadora.restar = function(num){
        res = res - num;
    };
    calculadora.reset = function(){
        res = 0;
    };
    
    return calculadora
};