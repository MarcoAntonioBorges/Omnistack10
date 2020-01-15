const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://marcoantonio:omnistack@cluster0-mbxwz.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

//Metodos HTTP: GET, POST, PUT, DELETE

// == TIPO DE PARAMETROS ==
// Query Params: req.query (Filtros, Ordenação, Paginação)
// Route Params: req.params (Ientificar um recurso na alteração ou remoção) 
// Body: req.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.listen(3333);