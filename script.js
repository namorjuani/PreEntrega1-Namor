// //Ejemplo 1 simulador de descuentos segun el monto de compra.
function simuladorDescuento() {
    let montoCompra = prompt("Ingresa el monto total de tu compra:");

    //valido si el monto ingresado es un número válido y mayor o igual a cero usando la funcion isNaN y el condicional || 

    if (isNaN(montoCompra) || montoCompra < 0) {
        alert("El monto ingresado no es válido. Por favor, ingresa un número mayor o igual a cero.");
        return;
    }

    let porcentajeDescuento = 0;
    if (montoCompra >= 1000) {
        porcentajeDescuento = 10;
    } else if (montoCompra >= 500) {
        porcentajeDescuento = 5;
    }
    //se calcula el monto final con descuento y se muestra un mensaje con el detalle de la compra
    let montoDescuento = montoCompra * (porcentajeDescuento / 100);
    let montoFinal = montoCompra - montoDescuento;

    alert("Detalle de tu compra:\nMonto total: $" + montoCompra + "\nDescuento aplicado: " + porcentajeDescuento + "%\nMonto final con descuento: $" + montoFinal);
}

simuladorDescuento();

//_______________________________________________________________________________________________________________

// Ejemplo 2 simulador de compra de celulares utilizando switch 
function simuladorCompraCelular() {
    alert("Bienvenido a nuestra tienda de celulares. Por favor, elija uno de los siguientes modelos:\n1 - iPhone X (USD 300)\n2 - iPhone 11 (USD 500)\n3 - iPhone 12 (USD 600)");

    let celular = prompt("Ingrese el número del celular que desea comprar").toLowerCase();

    switch (celular) {
        case "1":
            alert("El iPhone X cuesta USD 300");
            break;
        case "2":
            alert("El iPhone 11 cuesta USD 500");
            break;
        case "3":
            alert("El iPhone 12 cuesta USD 600");
            break;
        default:
            alert("El celular ingresado no está disponible en este momento.");
            break;
    }
}

simuladorCompraCelular();

//_______________________________________________________________________________________________________________

//Ejemplo 3 usando while y do de simulador de compra de celulares suponiendo un monto inicial 

let saldoInicial = 1000; // saldo inicial del usuario
const precioCelular = 500; // precio de cada celular
let seguirComprando = true; // bandera para seguir comprando o no

do {
    // Pedir al usuario la cantidad de celulares que desea comprar
    let cantidadCelulares = prompt("Ingrese la cantidad de celulares que desea comprar.\nCada celular cuesta $" + precioCelular + ".\n\nSu saldo inicial es de $" + saldoInicial + ".");

    // Calcular el costo total de los celulares
    let costoTotal = cantidadCelulares * precioCelular;

    // Verificar si el saldo es suficiente para realizar la compra
    if (saldoInicial >= costoTotal) {
        saldoInicial -= costoTotal; // restar el costo total de la compra del saldo del usuario
        alert("Compra exitosa! Su nuevo saldo es de $" + saldoInicial);

        // Preguntar si el usuario desea seguir comprando
        seguirComprando = confirm("¿Desea comprar más celulares?");

    } else {
        let montoAdicional;

        do {
            montoAdicional = prompt("Saldo insuficiente. Su saldo actual es de $" + saldoInicial + ". Ingrese un monto adicional para agregar a su saldo:");
        } while (isNaN(parseFloat(montoAdicional))); // validar que el valor ingresado sea un número

        saldoInicial += parseFloat(montoAdicional); // agregar el monto adicional al saldo del usuario
    }
} while (seguirComprando); 