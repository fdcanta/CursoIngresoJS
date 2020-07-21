function mostrar()
{
	//declara variables y toma el valor ingresado 
	var edad, estado;
	edad = txtIdEdad.value;
	estado = estadoCivil.value;

	//lo convierte en numero
	edad = parseInt(edad, 10);
	
	

	//los revisa y avisa la franja de edad
	if (edad>18 && estado=="Soltero") {alert("Es soltero y no es menor.")}
}//FIN DE LA FUNCIÓN