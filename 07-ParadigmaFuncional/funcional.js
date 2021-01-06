function duplicar(num){
    return num * 2;
};

function map(array, fn){
    var res = [];

    for(let i = 0; i < array.length; i++){
        res.push(fn(array[i]));
    };

    return res;
};

function filter(array, fn){
    var res = [];

    for(let i = 0; i < array.length; i++){
        if(fn(array[i]) === true){res.push(array[i])};
    };

    return res;
};

function contains(array, num){
    var acum = Object.values(array);
    for(let i = 0; i < acum.length; i++){
        if(acum[i] === num){return true};
    };
    return false;
};

function cuentaPalabras(string){
    var arr = string.split(' ');
    return arr.length;
};

function reduce(array, num, fn){
    var res = 0;
       if(array,num,fn){ while(array[0]){
            if(array[0] && array[1]){
                if(res === 0){
                    res = fn(array[0], array[1]);
                    array.splice(0,2);
                } else {
                    res = fn(res, fn(array[0], array[1]));
                    array.splice(0,2)};
            } else {
                res = fn(res, fn(array[0], num));
                array.splice(0,1);
            };
        };
        return res;
    } else if(array, num){
        var res = [];
        for(let i = 0; i < array.length; i++){
            if(num(array[i]) == false){
                res.push(0);
            }else{
                res.push(1);
            };
        };
        return res;
    };
};

function cuentaPalabrasReduce(a, b){
    var acum = a +' '+ b
    var arr = acum.split(' ');
    return arr.length;    
};

function suma(arr){
    function sum(a, b){
        return a + b;
    };

    return reduce(arr, 0, sum);
};

function every(arr, fun){
    var resp = reduce(arr, fun);

    for(let i = 0; i < resp.length; i++){
        if(resp[i] === 0){return false}
    };
    return true;
};

function any(arr, fun){
    var ress = reduce(arr, fun);
    if(ress === undefined){
        return false
    } else {
        for(let i = 0; i < ress.length; i++){
        if(ress[i] === 1){return true};
        };
        return false;
    };
};
