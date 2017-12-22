"use strict";


const fs   = require("fs");
const path = require("path");
const http = require("http");
// const zlib = require("zlib");

const MIME_TYPE = {
    ".js"   : "text/javascript; charset=utf-8",
    ".css"  : "text/css; charset=utf-8",
    ".html" : "text/html; charset=utf-8",
    ".jpg"  : "image/jpeg",
    ".png"  : "image/png",
    ".ico"  : "image/x-icon",
    ".json" : "application/json; charset=utf-8"
};


http.createServer(function (req, res) {

    const url = path.join(__dirname, req.url.replace(/[\?\#].*$/, ""));
    const ext = path.extname(url).toLowerCase();

    if (fs.existsSync(url)) {
        if (fs.statSync(url).isFile()) {
            res.setHeader("Content-Type", MIME_TYPE[ext] || "text/plain; charset=utf-8");
            fs.createReadStream(url).pipe(res);
            return;
        }
    }
    res.statusCode = 404;
    res.end("Not Found");

}).listen(8000);