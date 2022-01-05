import { stringify } from "querystring"


const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    mone: 'Marcelo',
    email: 'tancker@hotmail.com',
    celular: '8599999999',
    cidade: 'Fortaleza'

}

//crud criar ler editar e apagar.

const createClient = (client) => {
        const db_client = []
        db_client.push (client)
        localStorage.setItem('db_client', json.stringify (db_client))
}

// eventos


document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)
