const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static('public'));

app.listen(3000, () => {
    console.log('App running at port 3000');
});
