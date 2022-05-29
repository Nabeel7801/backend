const express = require('express');
const cors = require("cors")

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded());

app.use(require('./routes/books'));
app.use(require('./routes/students'));

app.listen(8080, () => console.log('Server is listening on port 8080'))