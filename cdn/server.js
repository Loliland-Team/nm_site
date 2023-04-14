const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3003

app.use(cors({
	credentials: true,
	origin: '*'
}))
app.use(express.static(__dirname + '/cdn'))

app.listen(PORT, () => console.log(`Server starts -> ${PORT}`))