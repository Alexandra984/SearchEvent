const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Router = require('./Router');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

// console.log('Testing server')

// create the database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'alexandra',
    password: 'alexandra',
    database: 'myapp'
});

db.connect(function(err) {
    if (err) {
        console.log('DB error');
        throw err;
        return false;
    }
});

// create a session store
const sessionStore = new MySQLStore({
    expiration: (1825 * 86400 * 1000),
    endConnectionOnCLose: false
}, db);

// use the session store
app.use(session({
    key: '84839fkdhf3494309fjhfdi439',
    secret: 'njfjslsalklas3928489384493438439',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (1928382983923),
        httpOnly: false
    }
}));


// the router
new Router(app, db);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(3001);
