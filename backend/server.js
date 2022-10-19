import express from "express"
import mongoose from "mongoose"

import bodyParser from "body-parser"
import cors from "cors"
import router from "./router.js"
const app =express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',router)
// app.use(express.urlencoded({ extended: true }))
// app.use('/api',router)
const mb = "mongodb+srv://chandan:2xcVW4SPf.SdAYU@cluster0.wnqqekd.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mb, {

    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("MB connected")
}).catch((err) => { console.log(err) })

































app.listen(5000, () => {
    console.log("listening")
})