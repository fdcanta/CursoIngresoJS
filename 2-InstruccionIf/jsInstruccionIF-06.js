function mostrar()
{
	//declara variables y toma el valor ingresado 
	var edad;
	edad = txtIdEdad.value;
	
	//lo convierte en numero
	edad = parseInt(edad, 10);
	
	

	//los revisa y avisa la franja de edad
	if (edad>17){
		alert("Usted es mayor de edad.");
	} else {
		if (edad<13){
			alert("usted es menor de edad");
		} else {
			alert("Usted es adolescente");
		}
	}


}//FIN DE LA FUNCIÓN