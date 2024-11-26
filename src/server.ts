import express from 'express'
import helmet from 'helmet'
import path from 'path'

const app = express()
const port = 3000

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
