const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`listening for requests on port ${port}!`);
});

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./views/contact-me.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
