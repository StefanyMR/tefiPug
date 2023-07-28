const express = require('express');
const app = express();
const path = require('path');

// Configurando o mecanismo de visualização Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Dados a serem passados para o template
const data = {
  pageTitle: 'AAAAAAAA desespero e ansiedade, mom i want to go home!',
  pageDescription: 'Não sei o que estou fazendo, não sabia e provavelmente não saberei futuramente também, obg :).',
  items: ['tefi 1', 'tefi 2', 'tefi 3'],
  observacao: 'eeeee!'
};

// Rota para renderizar o template com os dados
app.get('/', (req, res) => {
  res.render('template', data);
});

// Servindo arquivos estáticos do Bootstrap, jQuery e CSS personalizado
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, '/estilos')));

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});
