const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(express.json()); //allows to access data from client side(req.body)
app.use(cors());

//Routes

// Register and Login routes
app.use("/auth", require("./routes/jwtauth"));

// Dashboard Route 
//click here
app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
