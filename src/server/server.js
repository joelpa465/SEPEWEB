const express = require('express');
const cors = require('./middleware/cors');
const mongoose = require('mongoose');
const subscriberRouter = require('./routes/newsletter');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors);

// Rutas
app.use('/api/newsletter', subscriberRouter);

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/wepcursosepe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});