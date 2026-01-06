import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});


// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A joke", content: "This is a joke" },
    { id: 2, title: "Another joke", content: "This is another joke" },
    { id: 3, title: "A joke", content: "This is 3 a joke" },
    { id: 4, title: "A joke", content: "This is 4 a joke" },
    { id: 5, title: "A joke", content: "This is 5 a joke" },
  ];

  res.json(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
