import express from "express";

const app = express();
app.use(express.static(__dirname + "/static"));

app.get("/", (_, response) => {
  // response.sendFile(__dirname + "/static/index.html");
  response.send("/static/index.html");
});

app.listen(8000);
