class HttpConfig {

    getHttpPort() {
        return process.env.PORT || 3000;
    }
}

module.exports = HttpConfig;
