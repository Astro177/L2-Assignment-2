import express, { Application, Request, Response }  from "express"
import cors from "cors"
import { UserRoutes } from "./app/modules/users/user.route"

const app:Application = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.use("/api/users",UserRoutes)

app.get('/', (req :Request, res:Response) => {
  res.send('Welcome Users!')
})

export default app

