const express = require("express")
const dotenv = require("dotenv")
const chats= require("./dummy_data/data");
const app = express()

dotenv.config()

app.get("/", (req, res) => {
    res.send("ok")
})

app.get('/chat', (req, res) => {
    res.send(chats)
})

app.get('/chat/:id', (req, res) => {
    const chat = chats.find((c) => c._id === req.params.id)
    res.send(chat)
})


const port = process.env.PORT || 5000
app.listen(port, console.log(`Server started on port ${port}`))