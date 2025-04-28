const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); 

const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use(cors());


const MONGO_URI = 'mongodb://127.0.0.1:27017/Users';
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});