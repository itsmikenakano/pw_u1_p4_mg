const agregar = (caracter) => document.getElementById('labelResultado').innerHTML += caracter;

function realizarOperaciones() {
    var texto = document.getElementById('labelResultado').innerHTML;
    texto = texto.replace("x", "*");
    var resultado=eval(texto);
    console.log(texto);
    console.log(resultado);
    document.getElementById('labelResultado').innerHTML= resultado;
}