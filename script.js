		/*
		
		Masalah : waktu untuk menghitung 
		Solusi  : membuat otomasisasi perhitungan untuk konversi sistem bilangan 
		implementasi :
		==============
		Sistem Bilangan ada 4 yaitu Desimal , Biner , Hexadesimal dan Oktal
		
		
		*/
		
		
		// Konversi desimal ke bilangan lain
		function convertDecimal() {
			let desimal = document.getElementById("desimal").value;

			// Konversi ke biner
			document.getElementById("biner").value = parseInt(desimal).toString(2);

			// Konversi ke oktal
			document.getElementById("oktal").value = parseInt(desimal).toString(8);

			// Konversi ke heksadesimal
			document.getElementById("hexadesimal").value = parseInt(desimal).toString(16);
		}

		// Konversi biner ke bilangan lain
		function convertBinary() {
			let biner = document.getElementById("biner").value;

			// Konversi ke desimal
			document.getElementById("desimal").value = parseInt(biner, 2);

			// Konversi ke oktal
			document.getElementById("oktal").value = parseInt(biner, 2).toString(8);

			// Konversi ke heksadesimal
			document.getElementById("hexadesimal").value = parseInt(biner, 2).toString(16);
		}

		// Konversi oktal ke bilangan lain
		function convertOctal() {
			let oktal = document.getElementById("oktal").value;

			// Konversi ke desimal
			document.getElementById("desimal").value = parseInt(oktal, 8);

			// Konversi ke biner
			document.getElementById("binary").value = parseInt(oktal, 8).toString(2);

			// Konversi ke heksadesimal
			document.getElementById("hexadesimal").value = parseInt(oktal, 8).toString(16);
		}

		// Konversi heksadesimal ke bilangan lain
		function convertHexadecimal() {
			let hexadesimal = document.getElementById("hexadesimal").value;

			// Konversi ke desimal
			document.getElementById("desimal").value = parseInt(hexadesimal, 16);

			// Konversi ke biner
			document.getElementById("biner").value = parseInt(hexadesimal, 16).toString(2);

			// Konversi ke oktal
			document.getElementById("oktal").value = parseInt(hexadesimal, 16).toString(8);
		}