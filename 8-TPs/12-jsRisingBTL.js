/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldo;
	var legajo;
	var nacionalidad;

	//Se ingresa la edad y se corrobora que este entre 18 y 90 y que sea un numero
	edadIngresada = prompt("Ingrese edad.");
	while (isNaN(edadIngresada)||edadIngresada < 18||edadIngresada>90){
		edadIngresada = prompt("Invalido, ingrese solo un numero entre 18 y 90.")
		edadIngresada = parseInt(edadIngresada);
	}

	//Se ingresa el sexo y se corrobora que sea F o M
	sexoIngresado = prompt("Ingrese su sexo. F/M");
	while (sexoIngresado != 'F' && sexoIngresado != 'M'){
		sexoIngresado = prompt("Invalido, F para femenino o M para masculino.")
	}

	//Se ingresa el estado civil y se corrobora que sea casado/soltero/viudo/divorciado
	estadoCivilIngresado = prompt("Ingrese su estado civil.");
	while (estadoCivilIngresado != 'soltero' && estadoCivilIngresado != 'casado' && estadoCivilIngresado != 'divorciado' && estadoCivilIngresado != 'viudo'){
		estadoCivilIngresado = prompt("Invalido, ingrese estado civil casado/divorciado/soltero/viudo.")
	}

	//Se ingresa el sueldo y se corrobora que no sea menor a 8000 y que sea un numero
	sueldo=prompt("Ingrese sueldo bruto no menor a 8000.")
	while (isNaN(sueldo) || sueldo<8000){
		sueldo = prompt("Invalido, ingrese solo un numero superior a 8000.")
		sueldo = parseInt(sueldo);
	}

	//se ingresa un numero de legajo y se corrobora que sea un numero entre 1000 y 9999
	legajo = prompt("Ingrese su numero de legajo.")
	while (isNaN(legajo)|| legajo>9999 || legajo<1000){
		legajo = prompt("Invalido, ingrese solo un numero de legajo valido.")
		legajo = parseInt(legajo);
	}

	//Se ingresa una nacionalidad y se corrobora que sea A para argentinos, E para extranjeros y N para nacionalizados
	nacionalidad = prompt("Ingrese nacionalidad. 'A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados.")
	while (nacionalidad != 'A' && nacionalidad != 'E' && nacionalidad != 'N' ){
		nacionalidad = prompt("Invalido, ingrese solo una letra, 'A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados. .")
	}

	//Se llenan los valores de la pagina
	txtIdEdad.value = edadIngresada;
	txtIdSexo.value = sexoIngresado;
	txtIdEstadoCivil.value= estadoCivilIngresado;
	txtIdSueldo.value = sueldo;
	txtIdLegajo.value = legajo;
	txtIdNacionalidad.value = nacionalidad;
}
