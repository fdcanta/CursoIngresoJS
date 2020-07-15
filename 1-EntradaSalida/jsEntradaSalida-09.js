/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	

	/*Se ingresan los numeros y se asignan al valor del identificador */
	sueldo = prompt("Ingrese sueldo.");
	txtIdSueldo.value = sueldo;

	/*Se convierten en numero*/
	sueldo = parseInt(sueldo, 10);
	
	/*Se realiza la operacion y se asigna el aumento*/
	txtIdResultado.value = sueldo+(sueldo/10);

	alert("Aumento realizado.");

}
