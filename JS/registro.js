const input = document.getElementById("cpfCnpj");

input.addEventListener("input", function () {
  // Remove qualquer caractere que não seja número
  this.value = this.value.replace(/\D/g, "");
});

document.getElementById("formulario").addEventListener("submit", function(e) {
  const valor = input.value;
  if (!(valor.length === 11 || valor.length === 14)) {
    alert("Digite um CPF (11 dígitos) ou CNPJ (14 dígitos).");
    e.preventDefault();
  }
});


 