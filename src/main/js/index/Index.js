const express = require("express");
const showdown = require("showdown");
const filehound = require("filehound");
const path = require("path");
const fs = require("fs");

const router = express.Router();
const mdConverter = new showdown.Converter();

router.get("/", (req, res) => {
    getPreviewPostsPaths()
        .then(readFileContents)
        .then(convertMarkdownToHtml)
        .then(previewHtmlPosts => res.render("index", { previewHtmlPosts }))
        .catch(err => console.error(err)); // Improve error logging
});

function getPreviewPostsPaths() {
    return filehound.create()
        .path(path.join(__dirname, "../../resources/posts"))
        .match("preview.md")
        .find();
}

function readFileContents(paths) {
    const p = paths.map(path => {
        return new Promise((resolve, reject) => {
            fs.readFile(path, "utf-8", (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    });

    return Promise.all(p);
}

function convertMarkdownToHtml(markdowns) {
    return markdowns.map(md => mdConverter.makeHtml(md));
}

function getPosts() {
   return [{
       imageUrl: "https://i0.wp.com/hernaes.com/wp-content/uploads/2017/03/chess-1214226_1920.jpg?zoom=2&resize=800%2C445",
       title: "Example title",
       intro: "Example intro",
   }];
}

module.exports = router;
