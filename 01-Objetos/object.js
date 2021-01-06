function setPropsOnObj(obj){
 
    obj.p = 5;
    obj['plataforma'] = 5;
    obj.proximo = function proximo(num){
        var res;
        res = num + 1;
        return res;
    };
    obj.la = {};
    obj.la.clave = {};
    obj.la.clave.secreta = {};
    obj.la.clave.secreta.es = 404;
   return obj;
};


function setPropsOnArr(arr){
    arr.hola = function hola(){
        return 'Hola!';
    };
    arr['river'] = 'plate'
    arr[0] = 5
    arr.doble = function doble(num){
        var res;
        res = num * 2;
        return res;
    };
};


function setPropsOnFunc(funcion){
    funcion()
    funcion.year = '2017'
    funcion.mitad = function mitad(num){
        var res;
        res = num / 2
        return res;
    };
    funcion.prototype.helloWorld = function world(){
        return 'Hello World';
    };
};