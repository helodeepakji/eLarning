const express = require('express');
const app = express();
const route = require('../router/route');
const path = require('path');
const port = 8000;

const viewPath = path.join(__dirname,"/../views");
const staticPath = path.join(__dirname,"/../static");

app.set('views',viewPath);
app.set('view engine','ejs');

app.use(express.static(staticPath));
app.use('/',route);

app.listen(port,() => {
    console.log(`App is Started at http://127.0.0.1:${port}/`)
});