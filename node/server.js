const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const formRoutes = require('./routes/formRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/myAppDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(bodyParser.json());
app.use('/api/forms', formRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
