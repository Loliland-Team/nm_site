import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import db from './config/Database.js'
import router from './routes/index.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3006

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use(router)

app.listen(PORT, () => console.log(`Server starts -> ${PORT}`))