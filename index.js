"use strict"

let express = require('express'),
    app = express(),
    port = process.env.PORT || 3080;

app.get('/', function(req, res) {
    let ip = req.ip.match(/[\d|\.]+/)[0],
        language = req.get('accept-language').split(",")[0],
        software = req.get('user-agent').match(/\(\w+;\s\w+\s\w+\)/)[0];

    res.json({
      ip: ip,
      language: language,
      software: software
    })
})

app.listen(port);
