//npm run dev

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const routes = require('./routes/routes.js');
const connectDatabase = require('./database/db.js');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/api', routes);

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Banco de dados conectado!\nhttp://localhost:${PORT}/api/books`);
    });
  })
  .catch((error) => console.log(error));