require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./database/dbConnection')
const router = require('./router/router')

const Server = express()

Server.use(cors())
Server.use(express.json())
Server.use(router)


const PORT = 3000 || process.env.PORT

Server.listen(PORT,()=>{
    console.log(`My Server is running in port: ${PORT} and waiting for client request!!`);
})

Server.get('/',(req,res)=>{
    res.status(200).send('<h1 style="color:red;">My Server is running in port and waiting for client req</h1>')
})

Server.post('/',(req,res)=>{
    res.status(200).send("POST REQUEST")
})