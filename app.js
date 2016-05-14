const ExpressConfig = require('./config/express-config');
const gracepull = require('gracepull');

class App {

    constructor(opts) {
        this.expressConfig = gracepull(() => opts.expressConfig, () => new ExpressConfig());
    }

    configure() {
        console.log(this.expressConfig)
        this.expressConfig.configure();
        return this;
    }

    start() {

    }
}

module.exports = App;