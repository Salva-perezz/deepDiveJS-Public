function CalculadoraNPI(){
    var res = 0;
    var nums = [];

    CalculadoraNPI.prototype.valor = function(){
        return res;
    };

    CalculadoraNPI.prototype.agregar = function(num){
        nums.unshift(num)
    };

    CalculadoraNPI.prototype.sumar = function(){
        
        if(nums[0] && nums[1]){
                res = res + (nums[1] + nums[0]);
                nums.splice(0, 2);
        } else if(nums[0]){
            res = res + nums[0];
        } else {
            throw('La calculadoraNPI necesita por lo menos 2 números');
        };
        
    };

    CalculadoraNPI.prototype.restar = function(){
            if(nums[0] && nums[1]){
                res = res - (nums[0] - nums[1]);
                nums.splice(0, 2);
            } else if(nums[0]){
                res = res - nums[0];
            } else {
                throw('La calculadoraNPI necesita por lo menos 2 números');
            };
    };

    CalculadoraNPI.prototype.dividir = function(){
            if(nums[0] && nums[1]){
                if(res === 0){
                    res = nums[1] / nums[0];
                    nums.splice(0, 2);
                };
            } else if(nums[0]){
                res = res / nums[0];
            } else {
                throw('La calculadoraNPI necesita por lo menos 2 números');
            };
    };

    CalculadoraNPI.prototype.multiplicar = function(){
        if(nums[0] && nums[1]){
            if(res === 0){
            res = nums[1] * nums[0];
            nums.splice(0, 2);
            };
        } else if(nums[0]){
            res = res * nums[0];
        } else {
            throw('La calculadoraNPI necesita por lo menos 2 números');
        };
};
};