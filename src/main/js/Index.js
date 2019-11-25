const express = require("express");
const router = express.Router();

const MediumApiClient = require("./MediumApiClient");
const mediumApiClient = new MediumApiClient();

router.get("/", async (req, res) => {
    const feed = await mediumApiClient.getMyFeed();
    const minimalPosts = feed.items
        .filter((post) => post.categories.length > 0)
        .map((post) => ({ description, content, enclosure, ...minimalPost } = post));
    res.render("index", { minimalPosts });
});

module.exports = router;
