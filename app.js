const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

app.use(cors());

mongoose.connect('mongodb://localhost:27017/Marketplace', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the OnlineMarket application.' });
});

app.use(productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});