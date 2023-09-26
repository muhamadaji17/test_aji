import 'dotenv/config'
import express from 'express'
import router from './routes/route.js'

const app = express()
const port = process.env.PORT

app.use(router)

app.listen(port, () => {
    console.log(`this app now run at http://localhost:${port}`)
})
