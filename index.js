const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }),
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

const mural = require('./routers/muralRouter');

app.use('/mural', mural);

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
