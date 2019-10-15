const https = require("https");

const myProfileJsonUrl = "https://medium.com/@whirlwin?format=json";
const myFeedJsonUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@whirlwin";

class MediumApiClient {

    async getMyFeed() {
        return new Promise(resolve => {
            https.get(myFeedJsonUrl, (res) => {
                let body = "";
                res.on("data", (chunk) => {
                    body += chunk;
                });
                res.on("end", () => {
                    resolve(JSON.parse(body));
                })
            });
        });
    }
}

module.exports = MediumApiClient;