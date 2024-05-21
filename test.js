let opciones = prompt("Bienvenido.\nSeleccione la Opción deseada.\n1- Calcular Préstamo(1 Pago)\n2- Calcular Prestamos 6 Cuotas Fijas\n3-Salir."); 
let importe = 0;
let cuotas = 0;
const TNA = 45/100;
const porcentaje = 100;
const none = "";


if (opciones==none){
    alert("El campo no puede estar vacío.");
}


while (opciones!=3){
    switch (opciones){
        case "1":
            importe = prompt ("Ingrese el importe");
            if (importe>0)
                alert ("Su importe a pagar es " + importe);
            break;
        
        case "2":
            cuotas = prompt ("Seleccione el numero de cuotas\n3 Cuotas\n6 Cuotas\n12 Cuotas");
            importe = prompt ("Ahora ingrese su importe");
            if (cuotas !=0)
                cuotificar()=alert("Tus cuotas quedaran de la siguiente forma" + cuotas + " cuotas de " + cuotificar)

            break;

                default:
                    "Vuelva al menú inicial";
                    function cuotificar (importe,cuotas){
                        resultado = importe/cuotas
        }



        opciones = prompt("Bienvenido.\nSeleccione la Opción deseada.\n1- Calcular Préstamo(1 Pago)\n2- Calcular Prestamos 6 Cuotas Fijas\n3-Salir.");
}


}
