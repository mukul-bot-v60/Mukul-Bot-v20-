const express = require("express");

const app = express();
app.use(express.json());

app.get("/webhook", (req, res) => {
  const VERIFY_TOKEN = "YOUR_VERIFY_TOKEN";

  if (
    req.query["hub.mode"] === "subscribe" &&
    req.query["hub.verify_token"] === VERIFY_TOKEN
  ) {
    return res.status(200).send(req.query["hub.challenge"]);
  }

  res.sendStatus(403);
});

app.post("/webhook", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
