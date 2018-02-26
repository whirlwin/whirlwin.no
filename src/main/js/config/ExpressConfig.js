const express = require("express");

class ExpressConfig {

    configure() {
        const app = express();
        app.set("view engine", "pug");
        app.set("views", "src/main/views");
        app.use("/assets", express.static("src/main/assets/"));
        return app;
    }
}

module.exports = ExpressConfig;
