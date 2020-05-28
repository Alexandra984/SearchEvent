// const bcrypt = require('bcrypt');

class Router {
    constructor(app, db) {
        // declare endpoints
        // this.login(app. db);
        this.logout(app, db);
        this.isLoggedIn(app, db);
    }

    // login(app, db) {
    //     app.post('/login', (req, res) => {
    //         console.log("hiiiii");
    //         let username = req.body.username;
    //         let password = req.body.password;
        
    //         console.log(username);
    //         console.log(password);
    //     })
                

    // }

    logout(app, db) {

    }

    isLoggedIn(app, db) {

    }
}

module.exports = Router;