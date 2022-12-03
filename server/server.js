const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));

app.listen(3000, (_) => {
  console.log("server is running on port 3000");
});
