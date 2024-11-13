// Configurações inicias
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Importação de rotas e banco de dados
const routes = require('./routes/routes.js');
const connectDatabase = require('./database/db.js');

//Iniciando servidor
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: 'n983712983217n983mawe98wq3',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// Aplicação da rota
app.use('/api', routes);

// Iniciando banco de dados
connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Banco de dados conectado!\nhttp://localhost:${PORT}/api/books`);
    });
  })
  .catch((error) => console.log(error));
