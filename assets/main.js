const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

//crud criar ler editar e apagar.

const createClient = () => {

    const client = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        cidade: document.getElementById('cidade').value
    }

    fetch('/cliente/cadastrar', {
        method: 'POST',
        body: JSON.stringify(client),        
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => {

        console.log(response)
        window.location.reload()

    })
    
}

const deletarCliente = function() {

    if (window.confirm("Você realmente quer deletar?")) {

        const id = this.getAttribute('name')

        const data = {
            id: id
        }
        
        fetch('/cliente/deletar', {
            method: 'POST',
            body: JSON.stringify(data),        
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => {

            console.log(response)
            window.location.reload()

        })
        
    }    

}

// eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvarCliente')
    .addEventListener('click', createClient)

var butoesDeletarClientes = document.getElementsByClassName('deletarCliente')

for (var i = 0; i < butoesDeletarClientes.length; i++) {

    butoesDeletarClientes[i].addEventListener('click', deletarCliente, false);

}
