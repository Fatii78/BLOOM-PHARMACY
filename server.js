require("dotenv").config({ quiet: true })
const express = require("express")
const methodOverride = require("method-override")
const morgan = require("morgan")
const session = require("express-session")

const { MongoStore } = require("connect-mongo")

const path = require("path")

const app = express()
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


const authRouter = require("./routes/authRouter")



const PORT = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride("_method"))
app.use(morgan("dev"))
app.use(
session({
secret: process.env.SESSION_SECRET,
resave: false,
saveUninitialized: true,
store: MongoStore.create({
mongoUrl: process.env.MONGODB_URI,
}),
}),
)


app.use("/auth", authRouter)



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} . . . `)
})
