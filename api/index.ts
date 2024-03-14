const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/omer", (req, res) => res.send("Omer the king"));

app.listen(3001, () => console.log("Server ready on port 3000."));

module.exports = app;
