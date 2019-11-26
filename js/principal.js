

var teste = document.querySelector(".titulo");
teste.textContent = "Aparecida Nutricionista2";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;


if ( peso <= 0 || peso >= 1000 ) {
  console.log("Peso Invalido");
  pesoEhValido = false;
  tdImc.textContent = "Peso Invalido";
  paciente.classList.add("paciente-invalido")
}

if (altura   < 0 || altura > 40 ) {
  console.log("Altura Ivalida");
  alturaEhValida = false;
  tdImc.textContent = "Altura Invalida";
  paciente.classList.add("paciente-invalido")
}


if (alturaEhValida && pesoEhValido) {
  var imc = peso / (altura * altura);
  tdImc.textContent = imc.toFixed(1);
}


}
