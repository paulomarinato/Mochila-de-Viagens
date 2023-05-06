const form = document.getElementById("novoItem");

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    console.log(evento)
    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value)

});