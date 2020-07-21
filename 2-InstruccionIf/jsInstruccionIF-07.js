function mostrar()
{
	//declara variables y toma el valor ingresado 
	var edad, estado;
	edad = txtIdEdad.value;
	estado = estadoCivil.value;

	//lo convierte en numero
	edad = parseInt(edad, 10);
	
	

	//los revisa y avisa la franja de edad
	if (edad<18 && estado=="Soltero") {alert("Es muy pequeño para NO ser soltero.")}
	
	
}//FIN DE LA FUNCIÓN