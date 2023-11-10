const buttonMedicamentos = document.querySelector("#medicamentos");
const listaRemedios = document.querySelector(".reremedios")

// variaveis de validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonValidacao = document.querySelector("#button");

// função da validação
buttonValidacao.addEventListener("click", function(event){
    event.preventDefault();
    console.log("aqui é o evento", event);
    console.log(campoNome.value);
});

buttonMedicamentos.addEventListener("click", function() {
    listaRemedios.classList.add("d-block");
});