import express from "express"

const app = express(); // create express app

app.get("/", (req, res) => {
  res.send("This is from express.js blah blah");
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});