const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hello this side anurag kumar 🚀");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});