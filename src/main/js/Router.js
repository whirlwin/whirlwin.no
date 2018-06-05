const Index = require("./Index");

class Router {

    route(app) {
        app.use(Index);
    }
}

module.exports = Router;
