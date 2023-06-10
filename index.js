const express = require("express");
const cors = require("cors");
const {connection} = require("./cofig/db")
const {postRouter} = require("./routes/post")
const app = express();

app.use(express.json());
app.use(cors());
app.use("/post",postRouter);

app.get("/",(req,res)=>{
    res.send("data")
})


app.listen(5000,async()=>{
    try {
        await connection;
        console.log("working");
    } catch (error) {
        console.log(error.message);
    }
})