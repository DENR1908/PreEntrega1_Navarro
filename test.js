let opcionesA = prompt ("Bienvenido.\nSeleccione la Opción deseada.\n1- Calcular Préstamo(1 Pago)\n2- Calcular Prestamos 6 Cuotas Fijas  "); 
let importe = 0;
const TNA = 45/100;

const none = ""
if (opcionesA==none){
    alert("El campo no puede estar vacío.")
}

//Funcionalidad de 1/2
while (opcionesA != 0) {
switch (opcionesA) {
        case "1":
            importe=prompt ("Ingrese importe a consultar")
            if (importe > 0){
                alert("Su importe a pagar es " + importe + TNA);
            }
            break;
                default: //Añadir default.
    }
    opcionesA = prompt ("Bienvenido.\nSeleccione la Opción deseada.\n1- Calcular Préstamo(1 Pago)\n2- Calcular Prestamos 6 Cuotas Fijas  ");
}