const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const rideRouter = require('./backend/Routes/riderRouter');
const {connection} = require("./backend/Config/db");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8040;

// Middleware
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("Welcome!!");
});

app.use("/riders", rideRouter);

app.listen(PORT, async () => {
try {
    await connection;
    console.log(`Server is running on http://localhost:${PORT}`);
} catch (error) {
    console.log("Something went wrong");
}
    
});
