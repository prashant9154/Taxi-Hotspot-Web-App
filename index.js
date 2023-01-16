const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

// Set public as static directory
app.use(express.static(path.join(__dirname, "/public")));

app.set("views", path.join(__dirname, "/views"));

// Use ejs as template engine
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Render main template
app.get("/", (req, res) => {
  res.render("main");
});

// Server setup
app.listen(port, () => {
  console.log(`The server started running on port ${port}`);
});
