const express = require('express');
const app = express();
app.use(express.json());

const mural = require('./routers/muralRouter');

app.use('/mural', mural);

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});