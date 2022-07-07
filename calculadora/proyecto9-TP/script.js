let montoS =[]; //Esto tiene que estar fuera de la funcion si o si, porque la funcion inicia con onclick y cada vez que se clickea se reinicia todo lo que hay dentro de la funcion.

const enviar = () =>{
// variables
const agregar = document.getElementById("mensaje");    
let nombre = document.getElementById("nombre").value;
let monto = document.getElementById("monto").value;
//verifica que los campos esten completados
if(nombre.length == 0) {
    alert('Debes completar el campo de "nombre"');
    return;
}
if(monto.length == 0) {
    alert('Debes completar el campo de "monto"');
    return;
}
//Agrega una lista de las personas que ingresaron dinero y cuanto dinero ingresaron
let mensaje = document.createElement("li");
mensaje.textContent = nombre + " a ingresado " + monto + "$ ";
agregar.prepend(mensaje);
//Agrega un parrafo que indica cuanto es el total de lo que hay que pagar y el dinero que tiene que pagar cada persona
let total = document.getElementById("promedio");
let suma = 0;
montoS.push(monto); // esto hace que lo que pongo en el "let monto" quede "guardado" en "let montoS"
for (let anashe of montoS){
    suma += (parseFloat(anashe));
}
let promedio = suma / montoS.length;

total.textContent = "El total es " + suma + "$ " + "y cada uno debe pagar " + promedio + "$";
}
  