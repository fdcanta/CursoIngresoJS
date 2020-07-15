/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1, num2, num3;

	/*Se ingresan los numeros y se asignan al valor del identificador */
	num1 = prompt("Ingrese primer numero");
	txtIdNumeroUno.value = num1;

	num2 = prompt("Ingrese segundo numero");
	txtIdNumeroDos.value = num2;

	/*Se convierten en numeros y se suman*/
	num1 = parseInt(num1, 10);
	num2 = parseInt(num2, 10);
	num3 = num1+num2;

	/*Se imprime*/
	alert("La suma de los numeros es "+num3);	
}

function restar()
{
	var num1, num2, num3;

	/*Se ingresan los numeros y se asignan al valor del identificador */
	num1 = prompt("Ingrese primer numero");
	txtIdNumeroUno.value = num1;

	num2 = prompt("Ingrese segundo numero");
	txtIdNumeroDos.value = num2;

	/*Se convierten en numeros y se restan*/
	num1 = parseInt(num1, 10);
	num2 = parseInt(num2, 10);
	num3 = num1-num2;

	alert("La resta de los numeros es "+num3);
}

function multiplicar()
{ 
	var num1, num2, num3;

	/*Se ingresan los numeros y se asignan al valor del identificador */
	num1 = prompt("Ingrese primer numero");
	txtIdNumeroUno.value = num1;

	num2 = prompt("Ingrese segundo numero");
	txtIdNumeroDos.value = num2;

	/*Se convierten en numeros y se multiplica*/
	num1 = parseInt(num1, 10);
	num2 = parseInt(num2, 10);
	num3 = num1*num2;

	/*Se imprime*/
	alert("La multiplicacion de los numeros es "+num3);
}

function dividir()
{
	var num1, num2, num3;

	/*Se ingresan los numeros y se asignan al valor del identificador */
	num1 = prompt("Ingrese primer numero");
	txtIdNumeroUno.value = num1;

	num2 = prompt("Ingrese segundo numero");
	txtIdNumeroDos.value = num2;

	/*Se convierten en numeros y se dividen*/
	num1 = parseInt(num1, 10);
	num2 = parseInt(num2, 10);
	num3 = num1/num2;

	/*Se imprime*/
	alert("La division de los numeros es "+num3);
}

