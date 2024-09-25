const Express = require("express")
const path = require("path")

const PORT = process.env.PORT || 3005
const app=Express()

app.use(Express.static("build"))
app.get("/api/rand", (req, res)=>{
    const min = Math.floor(req.query.min || 0)
    const max = Math.floor(req.query.max || 1000000)
    res.setHeader("Content-Type", "application/json")
    res.end(`{ "result": ${Math.floor(Math.random()*(max-min))+min}}`)
})
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(PORT,()=>{
    console.log("listening on Port "+PORT)
})
