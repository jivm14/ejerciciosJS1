function calcularPromedio()
{
	var nombre = prompt("Nombre del alumno: ");
	var nota1 = prompt("Introduce la nota de la asignatura 1:");
	var nota2 = prompt("Introduce la nota de la asignatura 2:");
	var nota3 = prompt("Introduce la nota de la asignatura 3:");
	var suma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
	var promedio = parseFloat(suma)/3;
	
	if (promedio>=7) {
		document.write('El alumno ' + nombre + ' con la nota ' + promedio + '<br /> Promociona.');
	} else if (promedio<7) {
		document.write('El alumno ' + nombre + ' con la nota ' + promedio + '<br /> No promociona.');
	}
	
}
