const express = require("express")
const port = process.env.PORT || 3030
const app = express()
const users = require("./routes/users")

app.use(express.static(__dirname + ""))
app.use(express.urlencoded({extended:true}))

app.get("", function(req, res) {
    res.sendFile("./index.html")
    console.log("connected")
})

app.post("/create_user",users.createUser)

app.listen(port, () => { console.log("Started at localhost:" + port) })

/*
server (get)-> users.createItem (post)-> success(home page)/failure(server) 
*/