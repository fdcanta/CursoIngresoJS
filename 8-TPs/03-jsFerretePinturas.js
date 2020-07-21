/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //declarar variables
    var temperatura;

    //se le asigna un valor y se convierte en numero
    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura, 10)

    //se pasa de fahrenheit a celsius y se imprime
    temperatura = (temperatura-32)*(0.5556)
    alert("La temperatura convertida a celsius es "+temperatura+"°C");
}

function CentigradosFahrenheit () 
{
	//declarar variables
    var temperatura;

    //se le asigna un valor y se convierte en numero
    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura, 10)

    //se pasa de celsius a fahrenheit y se imprime
    temperatura = ((temperatura*9)/5)+32
    alert("La temperatura convertida a Fahrenheit es "+temperatura+"°F");
}
