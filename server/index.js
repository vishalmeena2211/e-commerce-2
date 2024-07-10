const express = require("express");
const {dbconnect} = require("./config/database");
const routes = require("./routes/route");
require('dotenv').config();

dbconnect();
const port = process.env.PORT;

const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json()); 
app.use("/api/v1",routes);

app.listen(port,(req,res)=>{
    console.log(`server start at ${port} port number`);
})

app.get("/",(req,res)=>{
    res.send("hello jee");
})
