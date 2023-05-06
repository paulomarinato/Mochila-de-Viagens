const form = document.getElementById("novoItem") 
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []  

itens.forEach( (elemento) => {    
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {  
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find(elemento => elemento.nome === nome.value)

    const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value
    }

    if (existe){
        itemAtual.id = existe.id

    }

    criaElemento(itemAtual);

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {  
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome

    novoItem.appendChild(botãoDelete());

    lista.appendChild(novoItem)
}

function atualizaElemento(item){
    document.querySelector(" [data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botãoDelete (){
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "DELETE"

    elementoBotao.addEventListener("click", function(){
        deleteElemento(this.parentNode)
    })

    return  elementoBotao
}

function  deleteElemento(tag){
    tag.remove()
}