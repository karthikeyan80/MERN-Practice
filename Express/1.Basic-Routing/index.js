import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Server is running on http://localhost:3000");
});
// To run this code, save it in a file named index.js and run the following command in your terminal:
