import Person from "@/person"
import * as express from "express"
import { Request, Response } from "express"
const app = express()

app.get("/", async (req: Request, res: Response) => {
  res.send(new Person().sayMyName())
})

app.listen(4000, async () => {
  console.log("listening on port 4000")
})
