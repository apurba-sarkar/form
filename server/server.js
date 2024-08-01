require('dotenv').config()
const express =require('express')
const app =express()
const router = require("./routers/auth-router")
const connectdb= require("./utils/db")
app.use(express.json())

app.use("/",router)

app.get("/list",(req,res)=>{
res.status(200).send("this is list server")
})


const PORT = 3000
connectdb().then(()=>{

    
    app.listen(PORT,()=>{
        console.log("Server is running on port number ", PORT)
    })
})