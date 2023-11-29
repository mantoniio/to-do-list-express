const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>To Do List</h1>');
});

app.get('/json', (req, res) => {
  res.json({ message: 'Tarefa x', done: true });
});

app.listen(3000, () => {
  console.log('Servidor iniciado http://localhost:3000');
});