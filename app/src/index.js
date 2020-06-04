const express = require('express')
//const infoRoute = require('./entry/info')
const routes = require('./routes');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))  

// middleware to handle our routes
app.use("/api/v1", routes)
//app.use("", infoRoute)

const port = process.env.PORT || 3000

// app.post('/users', (req, res) => {
//      res.send(req.body)

// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})