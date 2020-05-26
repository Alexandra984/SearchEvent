const bcrypt = require('bcrypt');

class Router {
    constructor(app, db) {
        // declare endpoints
        this.login(app. db);
        this.logout(app, db);
        this.isLoggedIn(app, db);
    }

    login(app, db) {

    }

    logout(app, db) {

    }

    isLoggedIn(app, db) {

    }
}

module.exports = Router;