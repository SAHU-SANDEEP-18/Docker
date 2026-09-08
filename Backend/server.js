import express from "express"

const app = express()
const port = 3000

app.get("/",(req, res)=> {
    res.status(200).json({
        message: "Hello, World !!!!!!!"
    })
})

app.get("/api/data",(req, res)=> {
    const data = {
        id: 1,
        name: 'sample data',
        descripiton: "This is my sample data response from the API."
    }
    res.status(200).json(data)
})

app.listen(port, ()=> {
    console.log("Server in running on the port 3000")
})