const express = require("express");
const app = express();
const cors = require('cors');
const axios = require("axios");

app.use(cors({
    origin: '*'
}));

app.listen(80, () => {
    console.log("Server running on port 80");
});

app.get("/", (req, res) => {
    axios.get(req.query.url)
        .then(response => {
            res.set(response.headers);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.send(response.data);
        })
});

app.post("/", (req, res) => {
    axios.post(req.query.url, req.body)
        .then(response => {
            res.set(response.headers);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.send(response.data);
        })
});




