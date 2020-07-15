function mostrar()
{
	//tomo la edad
	var edad;
	edad = txtIdEdad.value;
	
	//lo convierto en numero
	edad = parseInt(edad, 10);

	//lo compara y avisa, si es mayor
	if (edad>18){alert("Usted es mayor de edad.")};
	
	

}//FIN DE LA FUNCIÓN