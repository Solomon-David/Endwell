const express = require("express")
const port = process.env.PORT || 3030
const app = express()

app.use(express.static(__dirname + ""))

app.get("", function(req, res) {
    res.send("Page loaded")
    console.log("connected")
})

app.listen(port, () => { console.log("Started at localhost:" + port) })