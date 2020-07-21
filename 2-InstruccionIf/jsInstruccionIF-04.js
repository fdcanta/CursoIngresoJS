function mostrar()
{
	//tomo la edad 
	var edad;
	edad = txtIdEdad.value;
	
	//lo convierte en numero
	edad = parseInt(edad, 10);

	//lo revisa y avisa la edad
	if (edad>12 && edad<18) {alert("Usted es adolescente.")
	
	};

}//FIN DE LA FUNCIÓN