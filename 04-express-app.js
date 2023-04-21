const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  // we could have done path.join but to be a bit explicit that we are providing absolute path.
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
