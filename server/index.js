const express = require('express')
// const app = express()
var morgan = require('morgan')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
morgan('tiny')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})