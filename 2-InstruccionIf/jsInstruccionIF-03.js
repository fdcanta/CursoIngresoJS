function mostrar()
{
	//tomo la edad 
	var edad;
	edad = txtIdEdad.value;
	
	//lo convierte en numero
	edad = parseInt(edad, 10);

	//lo revisa y avisa la edad
	if (edad<18) {
		alert("Usted es menor de edad.")
	}else{
		alert("Usted es mayor de edad.")
	};

}//FIN DE LA FUNCIÓN