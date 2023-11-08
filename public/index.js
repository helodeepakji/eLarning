const express = require('express');
const session = require('express-session');
const app = express();
const route = require('../router/route');
const path = require('path');
const port = 8000;

const viewPath = path.join(__dirname,"/../views");
const staticPath = path.join(__dirname,"/../static");

app.set('views',viewPath);
app.set('view engine','ejs');

app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(session({
    secret : 'helodeepakji',
    resave : false,
    saveUninitialized : true,
}))

app.use((req, res, next) => {
    res.locals.authenticated = req.session.userId ? true : false;
    next();
});

app.use('/',route);

app.listen(port,() => {
    console.log(`App is Started at http://127.0.0.1:${port}/`)
});