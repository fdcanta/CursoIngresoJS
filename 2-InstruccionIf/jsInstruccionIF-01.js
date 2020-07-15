function mostrar()
{
	//tomo la edad
	var edad;
	edad = txtIdEdad.value;

	//lo convierte en numero y lo revisa
	edad = parseInt (edad, 10);
	if (edad<15) {
		alert("No puede subir.")
	} else{
		alert("Puede subir.")
	}; 
	

}//FIN DE LA FUNCIÓN