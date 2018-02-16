const ExpressConfig = require("./ExpressConfig");
const HttpConfig = require("./HttpConfig");

class AppConfig {

    constructor() {
        this.expressConfig = new ExpressConfig();
        this.httpConfig = new HttpConfig();
    }

    configure() {
        const app = this.expressConfig.configure();
        const httpPort = this.httpConfig.getHttpPort();
        return {app, httpPort};
    }
}

module.exports = AppConfig;
