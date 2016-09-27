function parImpar() {

		var numero, num, par = 0, impar = 0, otro = 0, contP = 0, contI = 0, contO = 0;
		var pares = new Array(), impares = new Array(), otros = new Array();

		do {	
		
			numero =  prompt('Ingrese un valor entero (0 para finalizar):');
			num = parseInt(numero);
			
			if (num%2 == 0){
				pares.push(num);
				par++;
			} else if (num%2 == 1){
				impares.push(num);
				impar++;
			} else if (isNaN(num)) {
				otros.push(num);
				otro++;
			}
			
	
		} while (numero!=0);

		document.write("Lista números pares: ");
		
		for (var i=0;i<pares.length;i++){
			
			document.write(pares[i]);
		
			if (contP<(pares.length-1)) {
				document.write(', ');
			}

			contP=contP+1;
		}	
		
		document.write("<br />Total números pares: " + par + ".<br />");
		
		document.write("Lista números impares: ");
		
		for (var i=0;i<impares.length;i++){
			
			document.write(impares[i]);
		
			if (contI<(impares.length-1)) {
				document.write(', ');
			}

			contI=contI+1;
		}
		
		document.write("<br />Total números impares: " + impar + ".<br />");
		
		document.write("Lista números erroneos: ");
		
		for (var i=0;i<otros.length;i++){
			
			document.write(otros[i]);
		
			if (contO<(otros.length-1)) {
				document.write(', ');
			}

			contO=contO+1;
		}

		document.write("<br />Total números erroneos: " + otro + ".<br />");
}
