const express = require('express');
const cors = require ('cors');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/teste', (req, res) => {
  res.json({ message: 'FUNCIONOU'});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}\nhttp://localhost:${PORT}`);
})