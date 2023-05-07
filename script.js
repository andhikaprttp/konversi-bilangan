		// Konversi desimal ke bilangan lain
		function convertDecimal() {
			var decimal = document.getElementById("desimal").value;

			// Konversi ke biner
			document.getElementById("binary").value = parseInt(decimal).toString(2);

			// Konversi ke oktal
			document.getElementById("octal").value = parseInt(decimal).toString(8);

			// Konversi ke heksadesimal
			document.getElementById("hexadecimal").value = parseInt(decimal).toString(16);
		}

		// Konversi biner ke bilangan lain
		function convertBinary() {
			var binary = document.getElementById("binary").value;

			// Konversi ke desimal
			document.getElementById("decimal").value = parseInt(binary, 2);

			// Konversi ke oktal
			document.getElementById("octal").value = parseInt(binary, 2).toString(8);

			// Konversi ke heksadesimal
			document.getElementById("hexadecimal").value = parseInt(binary, 2).toString(16);
		}

		// Konversi oktal ke bilangan lain
		function convertOctal() {
			var octal = document.getElementById("octal").value;

			// Konversi ke desimal
			document.getElementById("decimal").value = parseInt(octal, 8);

			// Konversi ke biner
			document.getElementById("binary").value = parseInt(octal, 8).toString(2);

			// Konversi ke heksadesimal
			document.getElementById("hexadecimal").value = parseInt(octal, 8).toString(16);
		}

		// Konversi heksadesimal ke bilangan lain
		function convertHexadecimal() {
			var hexadecimal = document.getElementById("hexadecimal").value;

			// Konversi ke desimal
			document.getElementById("decimal").value = parseInt(hexadecimal, 16);

			// Konversi ke biner
			document.getElementById("binary").value = parseInt(hexadecimal, 16).toString(2);

			// Konversi ke oktal
			document.getElementById("octal").value = parseInt(hexadecimal, 16).toString(8);
		}