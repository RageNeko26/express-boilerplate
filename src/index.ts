import express, { Express } from "express"
import bodyParser from "body-parser"
import { Home, About, Nested, OtherNest, v1, SaveBook } from "./Controllers"

const app: Express = express()
const jsonParser = bodyParser.json()
const port: number = 3000

app.get("/", Home)
app.get("/about", About)
app.get("/api/v1/nested", Nested)
app.get("/api/v1/other", OtherNest)
app.get("/api/v1", v1)
app.post("/api/v1/book", jsonParser ,SaveBook)

app.listen(port, (): void => {
  console.log(`Server is running on port ${port}`)
})

