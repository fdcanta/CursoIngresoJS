/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1, num2, num3;

	/*Se ingresan los numeros y se asignan al valor del identificador */
	num1 = prompt("Ingrese primer numero");
	txtIdNumeroDividendo.value = num1;

	num2 = prompt("Ingrese segundo numero");
	txtIdNumeroDivisor.value = num2;

	/*Se convierten en numeros y se dividen*/
	num1 = parseInt(num1, 10);
	num2 = parseInt(num2, 10);
	num3 = num1%num2;

	/*Se imprime*/
	alert("El resto es "+num3);
}
