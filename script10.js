function numde1a5() {

		var numero, num;

		do {
			
			var numero =  prompt('Ingrese un valor entre 1 y 5 (Estos incluidos):');
			var num = parseInt(numero);
			
			if (num>=1 && num<=5) {
				alert ("El número es " + num);
			} else if (num<0 || num>5) {
				alert ("El número " + num + ' no esta dentro del rango.');
			} else if (num == 0) {
				alert ("Finalizado");
			}
			
		} while (numero!=0);
}
