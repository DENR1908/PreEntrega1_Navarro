let opciones = prompt ("Bienvenido.\nSeleccione la Opción deseada.\n1- Calcular Préstamo(1 Pago)\n2- Calcular Prestamos 6 Cuotas Fijas  "); 
let importe = 0;
const TNA = 45/100;

const none = ""
if (opcionesA==none){
    alert("El campo no puede estar vacío.")
}

//Funcionalidad de 1/2
while (opciones != 0) {
switch (opciones) {
        case "1":
            importe=prompt ("Ingrese importe a consultar")
            if (importe > 0){
                alert("Su importe a pagar es " + importe + TNA);
            }
            break;
                default: //Añadir default.
    }
    opciones = prompt ("Bienvenido.\nSeleccione la Opción deseada.\n1- Calcular Préstamo(1 Pago)\n2- Calcular Prestamos 6 Cuotas Fijas  ");
}