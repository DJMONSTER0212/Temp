const express = require('express')
// const app = express()
var morgan = require('morgan')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config();
const connectDB = require('./utils/connectDB');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
const userRoutes = require('./routes/userRoutes')
const resultRoutes = require('./routes/resultRoutes')
morgan('tiny')
const port = 3000

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/user',userRoutes)
app.use('/api/results',resultRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})