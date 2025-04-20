import express from 'express'
const app = express()
import { config } from 'dotenv'
import path from 'path'
import { connectionDB } from './DB/connection.js'
config({path: path.resolve('./config/.env')})
import color from "@colors/colors"

const port = process.env.PORT
connectionDB()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`.random))




// ! Role | Stored In User? | Extra Schema Needed?
// ! end-user | ✅ yes | ❌ no
// ! admin | ✅ yes | ✅ Admin
// ! designer | ✅ yes | ✅ Designer
// ! broker | ✅ yes | ✅ Broker