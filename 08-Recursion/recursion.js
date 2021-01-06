function factorialIterativo(num){
    var res = num
    for(let i = 1; i < num; i++){
        res = res * i;
    };
    return res;
};

function factorial (num) {
        if (num === 0){ 
            return 1;
        } else{ 
            return num * factorial(num - 1);
        };
};

function fib(num) {
    if (num <= 1){
        return 1;
    } else {
        return(fib(num - 1) + fib(num - 2));
    };
};

function factores(num, arr = []) {
    if (num === 1){ 
        return arr.reverse()
    }else if (num % 2 === 0 && num > 1){
        arr.unshift(2);
    } else if (num % 3 === 0 && num > 1){
        arr.unshift(3)
    } else if (num % 2 != 0 && num % 3 != 0 && num > 1){
        arr.unshift(num)
    };

    var num2 = num/arr[0];

    console.log(arr);

    return factores(num2, arr);
};

