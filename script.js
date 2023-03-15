//Ejemplo 1 usando Function y for 
// Lista de correos electrónicos de clientes
const customerEmails = ["pepito@example.com", "daniel@example.com", "maria@example.com"];
function promotionAlert() {
    // Envío de correo electrónico a cada cliente
    for (let i = 0; i < customerEmails.length; i++) {
        const customerEmail = customerEmails[i];
        alert("¡Hola! " + customerEmail + " Tenemos una promoción especial para ti.");
    }
}

//Ejemplo 2 de Switch y Function de compra de celulares.
// let celular = prompt("Ingrese celular que desea comprar").toLowerCase()
// switch (celular) {
//     case "1":
//         alert("El iphone x sale usd300")
//         break
//     case "2":
//         alert("El iphone 11 sale usd500")
//         break
//     case "3":
//         alert("El iphone 12 sale usd600")
//         break
//     default:
//         alert("No tenemos el celular ingresado")
//         break
// }
// promotionAlert(); //utilizamos la funcion creada en el ejemplo 1 para enviar notificaciones

//Ejemplo 3 usando while y do
/*let saldoInicial = 1000; // saldo inicial del usuario
const precioCelular = 500; // precio de cada celular
let seguirComprando = true; // bandera para seguir comprando o no

do {
  // Pedir al usuario la cantidad de celulares que desea comprar
  let cantidadCelulares = prompt("Ingrese la cantidad de celulares que desea comprar:");

  // Calcular el costo total de los celulares
  let costoTotal = cantidadCelulares * precioCelular;

  // Verificar si el saldo es suficiente para realizar la compra
  if (saldoInicial >= costoTotal) {
    saldoInicial -= costoTotal; // restar el costo total de la compra del saldo del usuario
    console.log("Compra exitosa! Su nuevo saldo es de $" + saldoInicial);

    // Preguntar si el usuario desea seguir comprando
    seguirComprando = confirm("¿Desea comprar más celulares?");
  } else {
    let montoAdicional = prompt("Saldo insuficiente. Su saldo actual es de $" + saldoInicial + " Ingrese un monto adicional para agregar a su saldo:");
    saldoInicial += parseFloat(montoAdicional); // agregar el monto adicional al saldo del usuario
  }
} while (seguirComprando);*/





