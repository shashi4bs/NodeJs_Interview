const express = require("express");
const dotenv = require("dotenv");
const app = express();

//load environment variables
dotenv.config();

app.use((req, res, next)=>{
	res.send("Hello World");
});

const PORT = (process.env.PORT||3000)
app.listen(PORT, ()=>{
	console.log("Listening on port : ", PORT);
});
