require('dotenv').config();
import express from "express"
import router from "./routes/_index"
import { run } from "./database/connection"
import  cors from "cors"


const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())


/**
 * Returns a status code of 200 with a JSON body containing the message "ok"
 */
app.get("/status", (_req, res) => {
  res.status(200).send({ status: "ok" });
});

app.use("/api", router)


/**
 * Starts the server and listens for incoming requests.
 *
 * @param {number} PORT - The port on which to listen for incoming requests.
 */
run().then(() => {
    
    app.listen(PORT, (): void => {
        console.log(`Server is running on port ${PORT}`)
    })
});