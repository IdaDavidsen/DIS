const express = require("express");
const cors = require("cors"); // hvad gør dette?

const app = express();

const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server open on port ${port}`);
});
