function mostrar()
{
	//declara variables y toma el valor ingresado 
	var edad, estado;
	edad = txtIdEdad.value;
	estado = estadoCivil.value;

	//lo convierte en numero
	edad = parseInt(edad, 10);
	
	//lo revisa y avisa bajo ciertas condiciones
	if (edad>17 && estado=="Soltero") {alert("Es soltero y no es menor.")}
}//FIN DE LA FUNCIÓN