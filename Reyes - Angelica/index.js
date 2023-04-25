//SEGUNDO PUNTO
var a = 5;
var b = 2;
var respuesta = a+b;
console.log('la suma de a + b = ' + respuesta);
respuesta = a - b;
console.log('La resta de a - b = ' + respuesta);
respuesta = a * b;
console.log('La multiplicación de a * b = ' + respuesta);
respuesta = a / b;
console.log('La división de a / b = ' + respuesta);

//TERCERO PUNTO
let c = "Hola";
let d = "Mundo";

console.log('La concatenación de c y d es = ' + c + " " + d);

//CUARTO PUNTO
const e = 1;
const f = "1";

console.log("Tipo de dato de la primera variable: " + typeof e)
console.log("Tipo de dato de la segunda variable: " + typeof f)


//QUINTO PUNTO
var obj = new Object();
obj = {
    numero: 1,
    cadena: "Hola",
    booleano: true,
    vacio: ""
};
console.log(obj);


//SEXTO PUNTO
function sumar(numero)
{
    var total= 0;
    for (var i=0; i<numero; i++){
        if ((i%3==0) || (i%5==0))
        {
            total+=i;
        }
    }
    return total;
}

var sumar1 = sumar(10);
console.log("La suma de los números menores de 10 y que son multiplos de 3 o 5 es = " + sumar1);