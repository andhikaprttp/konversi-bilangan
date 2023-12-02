
function convertDecimal() {
  let desimal = parseInt(document.getElementById("desimal").value, 10);

  document.getElementById("biner").value = desimal.toString(2);
  document.getElementById("oktal").value = desimal.toString(8);
  document.getElementById("hexadesimal").value = desimal.toString(16);
}


function convertBinary() {
  let biner = document.getElementById("biner").value;

  document.getElementById("desimal").value = parseInt(biner, 2);
  document.getElementById("oktal").value = parseInt(biner, 2).toString(8);
  document.getElementById("hexadesimal").value = parseInt(biner, 2).toString(16);
}


function convertOctal() {
  let oktal = document.getElementById("oktal").value;

  document.getElementById("desimal").value = parseInt(oktal, 8);
  document.getElementById("biner").value = parseInt(oktal, 8).toString(2);
  document.getElementById("hexadesimal").value = parseInt(oktal, 8).toString(16);
}

// Function untuk konversi heksadesimal ke bilangan lain
function convertHexadecimal() {
  let hexadesimal = document.getElementById("hexadesimal").value;

  document.getElementById("desimal").value = parseInt(hexadesimal, 16);
  document.getElementById("biner").value = parseInt(hexadesimal, 16).toString(2);
  document.getElementById("oktal").value = parseInt(hexadesimal, 16).toString(8);
}
