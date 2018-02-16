const Index = require("./index/Index");

class Router {

    route(app) {
        app.use(Index);
    }
}

module.exports = Router;
