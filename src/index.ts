require('dotenv').config();
import express from "express"
import { run } from "./database/connection"
import router from "./routes"

const app = express()

app.use(express.json())

const PORT: number = 3000 || process.env.PORT


app.get("/status", (_, res) => {
    res.status(200).send({ "status": "ok" })
})

app.use("/api", router)

run().then(() => {
    app.listen(PORT, (): void => {
        console.log(`Server is running on port ${PORT}`)
    })
});