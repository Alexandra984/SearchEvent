const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Router = require('./Router');
const bcrypt = require('bcryptjs');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

console.log('Testing server')
// console.log(app);

// create the database connection
const db = mysql.createConnection({
    host: 'mdsproject.ddns.net',
    port: '4444',
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
        maxAge: (1825 * 86400 * 1000),
        httpOnly: false
    }
}));

// console.log(app);
// the router
new Router(app, db);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.post('/login', (req, res) => {
        console.log("hiiiii");
        let username = req.body.username;
    let password = req.body.password;

    username = username.toLowerCase();

    if (username.length > 12 || password.length > 12) {
        res.json({
            success: false,
            msg: 'An error occured, please try again'
        })
        return;
    }
    let cols = [username];
    db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data, fields) => {
        if (err) {
            res.json({
                success: false,
                msg: 'An error occured, please try again later'
            })
            return;
        }
        if (data && data.length === 1) {
            bcrypt.compare(password, data[0].password, (bcryptErr, verified) => {
                if (verified) {
                    req.session.userID = data[0].id;
                    res.json({
                        success: true,
                        username: data[0].username
                    })
                    return;
                }
                else {
                    res.json({
                        success: false,
                        msg: 'Invalid password'
                    })
                }
            })
        } else {
            res.json({
                success: false,
                msg: 'User not found, please try again'
            })
        }
    })
})

app.post('/logout', (req, res) => {
    if (req.session.userID) {
        req.session.destroy();
        res.json({
            success: true
        })
        return true;
    } else {
        res.json({
            success: false
        })
        return false;
    }
});

app.post('/isLoggedIn', (req, res) => {
    if (req.session.userID) {
        let cols = [req.session.userID];
        db.query('SELECT * FROM user WHERE id ? LIMIT 1', cols, (err, data, fields) => {
            if (data && data.length === 1) {
                res.json({
                    success: true,
                    username: data[0].username
                })
                return true;
            } else {
                res.json({
                    success: false
                })
            }
        })
    } else {
        res.json({success: false})
    }
})
    
app.get('/events', (req, res) => {
        let cols = [req.session.userID];
        db.query('SELECT * FROM events', cols, (err, data, fields) => {
            if (data) {
                res.json({
                    success: true,
                    events: data
                })
                return true;
            } else {
                res.json({
                    success: false
                })
            }
        })
})

app.listen(3001);
    