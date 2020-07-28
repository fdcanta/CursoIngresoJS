/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     //se declaran variables y se asignan
     var lamparitas;
     var marcaDeLampara;
     var descuento;
     var total;
     var impuestos;
     descuento = 0;
     lamparitas = txtIdCantidad.value;
     marcaDeLampara = Marca.value;
     lamparitas = parseInt(lamparitas, 10);

     //Se aplica descuento sobre compra mayor a 5 unidades
     if (lamparitas>5){
        descuento = 0.5;
     } 

     //este switch revisa un numero particular de lamparas y su marca para asignar descuento
     switch (lamparitas){
        case 5:
           if (marcaDeLampara == "ArgentinaLuz"){
              descuento =0.4;
           } else {
              descuento =0.3;
           } break;
         case 4:
            if (marcaDeLampara=="ArgentinaLuz" || marcaDeLampara=="FelipeLamparas") {
               descuento = 0.25;
           } else {
               descuento = 0.2;
           } break;
         case 3:
            if (marcaDeLampara == "ArgentinaLuz"){
               descuento = 0.15;
            } else if (marcaDeLampara == "FelipeLamparas"){
               descuento = 0.1;
            } else {
               descuento = 0.05;
            }

     }
     
     //calcula el total y aplica descuentos
     total = (lamparitas * 35);
     total = total - (total*descuento);

     //revisa si es mayor de 120 y aplica impuestos
     if (total>120){
        impuestos = total*0.1;
        total = total+impuestos;
         alert("IIBB Usted pago "+impuestos+"$");
     }

     
     txtIdprecioDescuento.value=total+"$";

}
