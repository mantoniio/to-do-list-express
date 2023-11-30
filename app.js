const express = require('express');
const checkListRouter = require('./src/routes/checklist');
const connectDB = require('./config/database');

const app = express();
app.use(express.json());

app.use('/checklists', checkListRouter);

connectDB();

app.listen(3000, () => {
  console.log('Servidor iniciado http://localhost:3000');
});