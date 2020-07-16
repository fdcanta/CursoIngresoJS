/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //Se declaran las variables
    var largo, ancho, alambre;

    //se les asigna un valor
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    //se pasan a numeros
    largo = parseInt(largo, 10);
    ancho = parseInt(ancho, 10);

    //se calcula el perimetro y la cantidad de alambre
    alambre = ((largo+ancho)*2)*3;

    alert("se necesitan "+alambre+" metros de alambre.");

}
function Circulo () 
{
    //Se declaran las variables
    var diametro, alambre;

    //se calcula el perimetro y se redonde
    diametro = txtIdRadio.value*Math.PI*2;
    diametro = Math.ceil(diametro)
    

    //se pasa a numero
    diametro = parseInt(diametro, 10);

    //se calcula la cantidad de alambre
    alambre = diametro*3;

    //se imprime cuanto alambre se necesita
    alert("Se necesitan "+alambre+" metros de alambre.")
	
}
function Materiales () 
{
	//Se declaran las variables
    var largo, ancho, materialArena, materialCal;

    //se les asigna un valor
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    //se pasan a numeros
    largo = parseInt(largo, 10);
    ancho = parseInt(ancho, 10);

    //se calcula la superficie y los materiales
    materialArena = (largo*ancho)*2;
    materialCal= (largo*ancho)*3;

    //se imprime la cantidad necesaria
    alert("Se necesitan "+materialArena+" bolsas de arena, y "+materialCal+" bolsas de cal.")


}