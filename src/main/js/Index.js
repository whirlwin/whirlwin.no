const express = require("express");
const router = express.Router();

const MediumApiClient = require("./MediumApiClient");
const mediumApiClient = new MediumApiClient();

router.get("/", async (req, res) => {
    const feed = await mediumApiClient.getMyFeed();
    const minimalPosts = feed.items.map((post) => {
        const { description, content, enclosure, ...minimalPost } = post;
        return minimalPost;
    });
    res.render("index", { minimalPosts });
});

module.exports = router;
