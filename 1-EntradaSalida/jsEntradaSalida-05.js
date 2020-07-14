/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre, edad;
	nombre = prompt("ingrese su nombre");
	txtIdNombre.value = nombre;
	edad = prompt("ingrese su edad");
	txtIdEdad.value = edad;
	alert("Su nombre es "+txtIdNombre.value+", y usted tiene "+txtIdEdad.value+" años.");
}

