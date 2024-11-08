const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
const PORT = process.env.PORT || 8000; 

// Middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Middleware para lidar com JSON
app.use(session({
  secret: '970bfdddae625f83efd7367af3573725035c5e200e002274932c1799e6977c2a',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 } // 1 hora
}));


app.get('/Home', (req, res) => {

})

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
