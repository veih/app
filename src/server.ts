const express = require('express')
const mongoose = require('mongoose')
const engines = require('consolidate')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost:27017/clientes');

const Cliente = mongoose.model('Cliente', { 
    name: String,
    email: String
});


app.use('/static', express.static(__dirname + '/assets'));

app.set('views', __dirname + '/views')
app.engine('html', engines.mustache)
app.set('view engine', 'html')

app.use(bodyParser.json({limit: '8mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    Cliente.find().then(clientes => {
        
        res.render('cliente/cadastro', {
            clientes
        })

    })    

})

app.post('/cliente/cadastrar', (request, response) => {

    const cliente = new Cliente();
    cliente.name = request.body.nome
    cliente.email = request.body.email
    cliente.save().then(error => {

        console.log('salvou o cliente')
        response.send('salvou o cliente')

    })      
})

app.post('/cliente/deletar', (request, response) => {

    Cliente.findByIdAndRemove(request.body.id)
    .then(error => {
        
        console.log('deletou o cliente')
        response.send('deletou o cliente')
        
    })
    
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
