function Mamifero(nombre){


    this.nombre = nombre;

    this.descendencia = [];

};

Mamifero.prototype.saludar = function(){
    return 'Hola, mi nombre es ' + this.nombre
};

Mamifero.prototype.nuevoHijo = function(){
    var  hijo = new Mamifero(this.nombre+' Jr');
    this.descendencia.push(hijo);
    return hijo;
};

function Gato(nombreG, color){
    Mamifero.call(this, nombreG);

    this.color = color;
};

Gato.prototype = Object.create(Mamifero.prototype);

Gato.prototype.constructor = Gato;

Gato.prototype.nuevoHijo = function(colorH){
    var batman = new Gato(this.nombre+' Jr');
    batman.color = colorH;
    this.descendencia.push(batman);
    return batman;
};