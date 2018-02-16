const express = require('express');

class ExpressConfig {

    configure() {
        return express();
    }
}

module.exports = ExpressConfig;