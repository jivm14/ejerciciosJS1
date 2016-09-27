function sumaproductoNums()
{
	var num1 = prompt("Introduce un primer numero:");
	var num2 = prompt("Introduce un segundo numero:");
	var suma = parseInt(num1) + parseInt(num2);
	var producto = parseInt(num1) * parseInt(num2);
		
	document.write('La suma de ' + parseInt(num1) + ' y ' + parseInt(num2) + ' es: ' + parseInt(suma) + '<br />' + 'El producto de ' + parseInt(num1) + ' y ' + parseInt(num2) + ' es: ' + parseInt(producto) + '.\n');
}