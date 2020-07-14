/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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
	alert(num3);
}

