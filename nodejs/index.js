/**
 * NodeJS testing using Mocha & Chai
 * ---------------------------------
 * 
 * This is a sample REST Api which has the following routes:
 * 
 * 1. GET /
 *    Returns json with success message
 * 
 * 2. Post /add
 *    Add two numbers which are passed in body and returns result
 * 
 * Server runs on port 3000
 * 
 * To setup: npm install
 * To test: npm test
 * 
 * @author Shreyansh Saha
 * 
 */


// Imports
const express = require("express");
const app = express();

// Parse body json
app.use(express.json());


// GET /
app.get("/", (req, res) => {
  return res.status(200).json({ status: "success", message: "Welcome To Testing API" });
});

// POST /add
app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  const add = (num1, num2) => {
    return num1 + num2;
  };
  return res.status(200).json({
    status: "success",
    result: add(num1, num2)
  });
});


// Run the server at port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;