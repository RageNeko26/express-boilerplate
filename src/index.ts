import express, { Express } from "express"
import { Home, About, Nested, OtherNest, v1 } from "./Controllers"

const app: Express = express()
const port: number = 3000

app.get("/", Home)
app.get("/about", About)
app.get("/api/v1/nested", Nested)
app.get("/api/v1/other", OtherNest)
app.get("/api/v1", v1)

app.listen(port, (): void => {
  console.log(`Server is running on port ${port}`)
})

