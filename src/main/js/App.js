const AppConfig = require("./config/AppConfig");
const winston = require("winston");

class App {

    constructor() {
        this.appConfig = new AppConfig();
    }

    configure() {
        const {app, httpPort} = this.appConfig.configure();
        this.app = app;
        this.httpPort = httpPort;
    }

    start() {
        this.app.listen(this.httpPort, () => {
            winston.info(`app started on port: ${this.httpPort}`);
        });
    }
}

module.exports = App;