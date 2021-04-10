import express from "express"
import path from "path";

const app = express(); // create express app

app.use(express.static("./app/dist"));
// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});